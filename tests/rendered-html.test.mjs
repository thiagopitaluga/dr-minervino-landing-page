import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html", host: "localhost" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Dr. Minervino landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html[^>]*lang="pt-BR"/i);
  assert.match(html, /<title>Dr\. Minervino \| Urologista em São Luís<\/title>/i);
  assert.match(html, /Urologia de/);
  assert.match(html, /alta precisão/);
  assert.match(html, /CRM-MA 5051/);
  assert.match(html, /wa\.me\/5598988077189/);
  assert.match(html, /http:\/\/localhost\/og\.png/);
  assert.doesNotMatch(html, /codex-preview|Building your site|react-loading-skeleton/i);
});

test("keeps production metadata and assets wired", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
    access(new URL("../public/dr-minervino-hero.webp", import.meta.url)),
    access(new URL("../public/dr-minervino-retrato.webp", import.meta.url)),
    access(new URL("../public/og.png", import.meta.url)),
    access(new URL("../public/kidneys-branco.png", import.meta.url)),
    access(new URL("../public/favicon.png", import.meta.url)),
  ]);

  assert.match(page, /IntersectionObserver/);
  assert.match(page, /data-track="whatsapp-/);
  assert.match(page, /kidneys-branco\.png/);
  assert.match(page, /FaInstagram/);
  assert.match(page, /FaWhatsapp/);
  assert.match(page, /mapsEmbedUrl/);
  assert.doesNotMatch(page, /portrait-badge/);
  assert.match(layout, /generateMetadata/);
  assert.match(layout, /\$\{origin\}\/og\.png/);
  assert.doesNotMatch(page, /SkeletonPreview|codex-preview/i);
  assert.doesNotMatch(layout, /Starter Project|codex-preview/i);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
});
