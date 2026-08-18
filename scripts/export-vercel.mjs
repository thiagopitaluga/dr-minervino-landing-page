import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const clientDirectory = join(projectRoot, "dist", "client");
const workerPath = join(projectRoot, "dist", "server", "index.js");
const outputDirectory = join(projectRoot, "vercel-dist");
const productionOrigin = "https://dr-minervino-urologista.vercel.app";

await rm(outputDirectory, { recursive: true, force: true });
await mkdir(outputDirectory, { recursive: true });
await cp(clientDirectory, outputDirectory, { recursive: true });

const workerUrl = pathToFileURL(workerPath);
workerUrl.searchParams.set("export", `${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

const response = await worker.fetch(
  new Request(`${productionOrigin}/`, {
    headers: {
      accept: "text/html",
      host: "dr-minervino-urologista.vercel.app",
      "x-forwarded-host": "dr-minervino-urologista.vercel.app",
      "x-forwarded-proto": "https",
    },
  }),
  {
    ASSETS: {
      fetch: async (request) => {
        const assetUrl = new URL(request.url);
        const relativePath = decodeURIComponent(assetUrl.pathname).replace(/^\/+/, "");

        try {
          const file = await readFile(join(clientDirectory, relativePath));
          return new Response(file);
        } catch {
          return new Response("Not found", { status: 404 });
        }
      },
    },
  },
  {
    waitUntil() {},
    passThroughOnException() {},
  },
);

if (!response.ok) {
  throw new Error(`Failed to render the Vercel index: ${response.status}`);
}

const html = await response.text();

if (!html.includes("Urologia de") || !html.includes("wa.me/5598988077189")) {
  throw new Error("The rendered Vercel index is missing required landing-page content.");
}

await writeFile(join(outputDirectory, "index.html"), html, "utf8");
await writeFile(join(outputDirectory, "404.html"), html, "utf8");

console.log("Vercel static output generated successfully.");
