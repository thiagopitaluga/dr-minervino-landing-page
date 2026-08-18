"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  CalendarCheck,
  Check,
  ChevronDown,
  CircleCheck,
  Clock3,
  Droplets,
  HeartPulse,
  MapPin,
  MessageCircle,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRoundCheck,
} from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";

const whatsappUrl =
  "https://wa.me/5598988077189?text=Ol%C3%A1%2C%20vi%20o%20site%20e%20gostaria%20de%20agendar%20uma%20consulta%20com%20o%20Dr.%20Minervino.";

const instagramUrl = "https://www.instagram.com/dr.minervino_urologista/";

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Urocenter%20SLZ%20Av.%20Daniel%20de%20La%20Touche%20987%20S%C3%A3o%20Lu%C3%ADs%20MA";

const mapsEmbedUrl =
  "https://www.google.com/maps?q=UroCenter%20SLZ%2C%20Avenida%20Daniel%20de%20La%20Touche%2C%20987%2C%20S%C3%A3o%20Lu%C3%ADs%20-%20MA&output=embed";

const specialties = [
  {
    icon: ScanLine,
    number: "01",
    title: "Próstata & prevenção",
    text: "Avaliação preventiva, investigação de alterações e cuidado individualizado da saúde da próstata.",
    tags: ["Check-up urológico", "Próstata aumentada", "Oncologia urológica"],
  },
  {
    icon: Droplets,
    number: "02",
    title: "Rins & trato urinário",
    text: "Diagnóstico e condução de sintomas urinários, cálculos renais e alterações do trato urinário.",
    tags: ["Cálculos renais", "Sintomas urinários", "Rins e bexiga"],
  },
  {
    icon: HeartPulse,
    number: "03",
    title: "Saúde sexual masculina",
    text: "Uma abordagem reservada para questões que afetam confiança, bem-estar e qualidade de vida.",
    tags: ["Disfunção erétil", "Infertilidade", "Saúde do homem"],
  },
  {
    icon: Microscope,
    number: "04",
    title: "Cirurgia urológica",
    text: "Indicação criteriosa e técnicas modernas para uma condução mais precisa de cada caso.",
    tags: ["Cirurgia robótica", "Vasectomia", "Procedimentos"],
  },
];

const journey = [
  {
    icon: UserRoundCheck,
    title: "Escuta e avaliação",
    text: "A consulta começa entendendo seus sintomas, histórico e o que realmente preocupa você.",
  },
  {
    icon: ScanLine,
    title: "Investigação direcionada",
    text: "Exames são solicitados com critério, conforme a necessidade clínica de cada caso.",
  },
  {
    icon: Stethoscope,
    title: "Plano de cuidado claro",
    text: "Você entende o diagnóstico, as possibilidades de tratamento e os próximos passos.",
  },
  {
    icon: CircleCheck,
    title: "Acompanhamento",
    text: "Evolução acompanhada com responsabilidade para decisões seguras ao longo do tratamento.",
  },
];

const faqs = [
  {
    question: "Quando devo procurar um urologista?",
    answer:
      "Dor ou dificuldade para urinar, sangue na urina, dor nos rins, alterações sexuais, dúvidas sobre fertilidade e acompanhamento da próstata são motivos para uma avaliação. A consulta preventiva também é importante mesmo sem sintomas.",
  },
  {
    question: "O atendimento é somente para homens?",
    answer:
      "Não. A urologia cuida do trato urinário de homens e mulheres. O Dr. Minervino avalia condições relacionadas aos rins, ureteres, bexiga e uretra, além da saúde urológica masculina.",
  },
  {
    question: "Como saber sobre convênios e consulta particular?",
    answer:
      "As modalidades e condições de atendimento podem variar. A equipe confirma rapidamente as opções disponíveis para o seu caso pelo WhatsApp.",
  },
  {
    question: "Há possibilidade de teleconsulta?",
    answer:
      "A disponibilidade depende do tipo de atendimento e da necessidade clínica. Fale com a equipe pelo WhatsApp para verificar se essa modalidade é adequada ao seu caso.",
  },
  {
    question: "Como me preparo para a primeira consulta?",
    answer:
      "Se tiver exames recentes, receitas e uma lista dos medicamentos em uso, leve-os com você. Também vale anotar os sintomas, quando começaram e as principais dúvidas que deseja esclarecer.",
  },
];

const physicianSchema = {
  "@context": "https://schema.org",
  "@type": "Physician",
  name: "Dr. Antonio Sergio Leite Minervino",
  medicalSpecialty: "Urology",
  telephone: "+55 98 98807-7189",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Av. Daniel de La Touche, 987, Centro Empresarial Shopping da Ilha, salas 206 e 207, Torre 2",
    addressLocality: "São Luís",
    addressRegion: "MA",
    postalCode: "65074-115",
    addressCountry: "BR",
  },
  sameAs: [instagramUrl],
};

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(physicianSchema) }}
      />

      <a
        className="skip-link"
        href="#conteudo"
      >
        Ir para o conteúdo
      </a>

      <nav className={`site-nav ${navScrolled ? "site-nav--scrolled" : ""}`} aria-label="Navegação principal">
        <div className="nav-inner">
          <a className="brand" href="#top" aria-label="Dr. Minervino — início">
            <span className="brand-mark">
              <img src="/kidneys-branco.png" alt="" />
            </span>
            <span>
              <strong>Dr. Minervino</strong>
              <small>Urologista</small>
            </span>
          </a>

          <div className="nav-links">
            <a href="#atuacao">Atuação</a>
            <a href="#sobre">Sobre</a>
            <a href="#localizacao">Localização</a>
          </div>

          <a className="nav-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-nav">
            Agendar consulta
            <ArrowUpRight aria-hidden="true" size={17} strokeWidth={1.8} />
          </a>
        </div>
      </nav>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-orb hero-orb--one" aria-hidden="true" />
        <div className="hero-orb hero-orb--two" aria-hidden="true" />

        <div className="hero-content" id="conteudo">
          <div className="hero-kicker reveal is-visible">
            <span className="kicker-line" />
            Urologia em São Luís
          </div>

          <h1 id="hero-title" className="reveal is-visible reveal-delay-1">
            Urologia de <span className="gradient-text">alta precisão.</span>
            <br />
            Cuidado que respeita você.
          </h1>

          <p className="hero-copy reveal is-visible reveal-delay-2">
            Precisão, tecnologia e uma condução clara para cuidar da sua saúde
            com segurança e discrição.
          </p>

          <div className="hero-actions reveal is-visible reveal-delay-3">
            <a className="primary-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-hero">
              <span>Agendar minha consulta</span>
              <ArrowUpRight aria-hidden="true" size={19} strokeWidth={1.8} />
            </a>
            <span className="cta-note">
              <FaWhatsapp aria-hidden="true" size={14} />
              Atendimento discreto pelo WhatsApp
            </span>
          </div>

          <div className="hero-credential reveal is-visible reveal-delay-4">
            <BadgeCheck aria-hidden="true" size={21} strokeWidth={1.6} />
            <span>
              <strong>CRM-MA 5051 · RQE 1487</strong>
              <small>Título de especialista em Urologia</small>
            </span>
          </div>
        </div>

        <div className="hero-index" aria-hidden="true">
          <span>01</span>
          <i />
          <span>Saúde &amp; precisão</span>
        </div>

        <div className="scroll-cue" aria-hidden="true">
          <span>Role para conhecer</span>
          <i />
        </div>
      </section>

      <section className="trust-band" aria-label="Credenciais profissionais">
        <div className="trust-band__inner">
          <div className="trust-item reveal">
            <span className="trust-number">2011</span>
            <span>Atuação em urologia<br />no Maranhão</span>
          </div>
          <div className="trust-item reveal reveal-delay-1">
            <Award aria-hidden="true" size={24} strokeWidth={1.35} />
            <span>Titular da Sociedade<br />Brasileira de Urologia</span>
          </div>
          <div className="trust-item reveal reveal-delay-2">
            <Sparkles aria-hidden="true" size={24} strokeWidth={1.35} />
            <span>Pioneirismo em cirurgia<br />robótica no estado</span>
          </div>
        </div>
      </section>

      <section className="specialties section-light" id="atuacao" aria-labelledby="specialties-title">
        <div className="section-shell">
          <div className="section-intro reveal">
            <div>
              <span className="eyebrow">Cuidado urológico completo</span>
              <h2 id="specialties-title">
                O próximo passo começa com uma <span className="gradient-text gradient-text--dark">avaliação clara.</span>
              </h2>
            </div>
            <p>
              Sintomas urológicos podem impactar rotina, sono, confiança e qualidade de vida.
              Uma avaliação especializada ajuda a transformar preocupação em direção.
            </p>
          </div>

          <div className="specialty-grid">
            {specialties.map((item, index) => (
              <article className={`specialty-card reveal reveal-delay-${index % 3}`} key={item.title}>
                <div className="card-topline">
                  <span>{item.number}</span>
                  <item.icon aria-hidden="true" size={28} strokeWidth={1.35} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.tags.map((tag) => (
                    <li key={tag}>
                      <Check aria-hidden="true" size={14} strokeWidth={2} />
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="conversion-strip reveal">
            <div className="conversion-strip__icon">
              <CalendarCheck aria-hidden="true" size={26} strokeWidth={1.5} />
            </div>
            <div>
              <strong>Não sabe se o seu caso precisa de um urologista?</strong>
              <span>Converse com a equipe e receba orientação sobre o agendamento.</span>
            </div>
            <a className="text-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-specialties">
              Falar com a equipe
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="journey-section" aria-labelledby="journey-title">
        <div className="journey-glow" aria-hidden="true" />
        <div className="section-shell">
          <div className="journey-heading reveal">
            <span className="eyebrow eyebrow--light">Uma consulta com direção</span>
            <h2 id="journey-title">
              Medicina moderna sem perder o essencial: <span className="gradient-text">ouvir.</span>
            </h2>
            <p>
              Cada decisão começa por uma compreensão cuidadosa do seu caso — com
              informação clara, respeito e participação do paciente.
            </p>
          </div>

          <div className="journey-grid">
            {journey.map((item, index) => (
              <article className={`journey-step reveal reveal-delay-${index % 3}`} key={item.title}>
                <span className="journey-step__number">0{index + 1}</span>
                <div className="journey-step__icon">
                  <item.icon aria-hidden="true" size={22} strokeWidth={1.45} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <div className="journey-quote reveal">
            <span className="quote-mark" aria-hidden="true">“</span>
            <p>
              Clareza reduz a ansiedade. Precisão orienta decisões. Respeito faz
              toda a diferença no cuidado.
            </p>
          </div>
        </div>
      </section>

      <section className="about section-light" id="sobre" aria-labelledby="about-title">
        <div className="section-shell about-grid">
          <div className="about-visual reveal">
            <div className="portrait-frame">
              <img
                src="/dr-minervino-retrato.webp"
                alt="Dr. Antonio Minervino em seu consultório"
                loading="lazy"
              />
              <div className="portrait-caption">
                <span>Dr. Antonio Sérgio Leite Minervino</span>
                <small>Urologista · CRM-MA 5051 · RQE 1487</small>
              </div>
            </div>
          </div>

          <div className="about-content reveal reveal-delay-1">
            <span className="eyebrow">Sobre o especialista</span>
            <h2 id="about-title">
              Experiência que acompanha a <span className="gradient-text gradient-text--dark">evolução da urologia.</span>
            </h2>
            <p className="about-lead">
              Dr. Minervino atua como urologista no Maranhão desde 2011, unindo
              atualização contínua, tecnologia e uma conduta responsável em cada decisão.
            </p>
            <p>
              Titular da Sociedade Brasileira de Urologia e pioneiro em cirurgia
              robótica no estado, construiu sua trajetória com atuação hospitalar,
              procedimentos de alta complexidade e participação ativa na comunidade médica.
            </p>

            <div className="credential-list">
              <div>
                <BadgeCheck aria-hidden="true" size={20} />
                <span>Título de especialista pela SBU e AMB</span>
              </div>
              <div>
                <Microscope aria-hidden="true" size={20} />
                <span>Experiência em cirurgia robótica e transplante renal</span>
              </div>
              <div>
                <Award aria-hidden="true" size={20} />
                <span>Membro da Câmara Técnica de Urologia do CRM-MA</span>
              </div>
            </div>

            <a className="primary-cta primary-cta--dark" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-about">
              <span>Agendar uma avaliação</span>
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="decision-section" aria-labelledby="decision-title">
        <div className="section-shell decision-grid">
          <div className="decision-copy reveal">
            <span className="eyebrow eyebrow--light">Seu cuidado não precisa esperar</span>
            <h2 id="decision-title">
              Alguns sinais pedem <span className="gradient-text">investigação</span> — não convivência.
            </h2>
            <p>
              Mudanças no padrão urinário, dor, desconforto, alterações sexuais ou
              dúvidas sobre prevenção merecem atenção. O diagnóstico precoce amplia
              possibilidades e traz mais segurança para decidir.
            </p>
          </div>

          <div className="signal-panel reveal reveal-delay-1">
            <span className="signal-panel__label">Considere uma avaliação se você percebe</span>
            {[
              "Dor, ardência ou dificuldade para urinar",
              "Sangue na urina ou mudanças persistentes",
              "Dor lombar intensa ou recorrente",
              "Alterações na função sexual ou fertilidade",
              "Necessidade de prevenção da próstata",
            ].map((signal) => (
              <div className="signal-item" key={signal}>
                <span />
                {signal}
              </div>
            ))}
            <a className="primary-cta" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-signals">
              <span>Quero cuidar disso agora</span>
              <ArrowUpRight aria-hidden="true" size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="location section-light" id="localizacao" aria-labelledby="location-title">
        <div className="section-shell">
          <div className="location-card reveal">
            <div className="location-copy">
              <span className="eyebrow">Atendimento em São Luís</span>
              <h2 id="location-title">Um ambiente preparado para receber você com <span className="gradient-text gradient-text--dark">tranquilidade.</span></h2>
              <div className="address-line">
                <MapPin aria-hidden="true" size={21} strokeWidth={1.45} />
                <p>
                  Av. Daniel de La Touche, 987<br />
                  Centro Empresarial Shopping da Ilha<br />
                  Salas 206 e 207 · Torre 2 · Cohama<br />
                  São Luís — MA · CEP 65074-115
                </p>
              </div>
              <div className="location-actions">
                <a className="primary-cta primary-cta--dark" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-location">
                  <span>Agendar pelo WhatsApp</span>
                  <MessageCircle aria-hidden="true" size={18} />
                </a>
                <a className="map-link" href={mapsUrl} target="_blank" rel="noreferrer">
                  Ver no mapa
                  <ArrowUpRight aria-hidden="true" size={16} />
                </a>
              </div>
            </div>

            <div className="location-visual">
              <iframe
                className="map-frame"
                src={mapsEmbedUrl}
                title="Mapa da UroCenter SLZ em São Luís"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="map-shade" aria-hidden="true" />
              <div className="map-card">
                <span className="map-card__icon">
                  <MapPin aria-hidden="true" size={21} strokeWidth={1.6} />
                </span>
                <span className="map-card__copy">
                  <strong>UroCenter SLZ</strong>
                  <span>Shopping da Ilha · Torre 2</span>
                  <small>São Luís — MA</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section section-light" aria-labelledby="faq-title">
        <div className="section-shell faq-grid">
          <div className="faq-heading reveal">
            <span className="eyebrow">Dúvidas frequentes</span>
            <h2 id="faq-title">Informação para você decidir com mais <span className="gradient-text gradient-text--dark">segurança.</span></h2>
            <p>Se sua dúvida não estiver aqui, a equipe pode orientar você diretamente pelo WhatsApp.</p>
            <a className="text-cta text-cta--dark" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-faq">
              Tirar uma dúvida
              <ArrowRight aria-hidden="true" size={18} />
            </a>
          </div>

          <div className="faq-list reveal reveal-delay-1">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary>
                  <span>{faq.question}</span>
                  <ChevronDown aria-hidden="true" size={20} strokeWidth={1.5} />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="final-cta" aria-labelledby="final-title">
        <div className="final-cta__texture" aria-hidden="true" />
        <div className="section-shell final-cta__inner reveal">
          <div className="final-cta__seal">
            <ShieldCheck aria-hidden="true" size={26} strokeWidth={1.3} />
          </div>
          <span className="eyebrow eyebrow--light">Sua saúde merece prioridade</span>
          <h2 id="final-title">Troque a dúvida por um <span className="gradient-text">próximo passo claro.</span></h2>
          <p>Agende sua avaliação e converse com a equipe do Dr. Minervino.</p>
          <a className="primary-cta primary-cta--large" href={whatsappUrl} target="_blank" rel="noreferrer" data-track="whatsapp-final">
            <span>Agendar consulta agora</span>
            <ArrowUpRight aria-hidden="true" size={20} />
          </a>
          <span className="final-note">
            <Clock3 aria-hidden="true" size={14} />
            Solicitação de agendamento pelo WhatsApp
          </span>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <a className="brand" href="#top">
              <span className="brand-mark">
                <img src="/kidneys-branco.png" alt="" />
              </span>
              <span>
                <strong>Dr. Minervino</strong>
                <small>Urologista</small>
              </span>
            </a>
            <p>CRM-MA 5051 · RQE 1487</p>
          </div>

          <div className="footer-contact">
            <span>Contato</span>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">
              <FaWhatsapp aria-hidden="true" size={17} />
              (98) 98807-7189
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram do Dr. Minervino">
              <FaInstagram aria-hidden="true" size={17} />
              @dr.minervino_urologista
            </a>
          </div>

          <div className="footer-legal">
            <p>As informações desta página têm caráter informativo e não substituem uma avaliação médica.</p>
            <small>© 2026 Dr. Minervino. Todos os direitos reservados.</small>
          </div>
        </div>
      </footer>

      <a
        className="floating-whatsapp"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar consulta pelo WhatsApp"
        data-track="whatsapp-floating"
      >
        <FaWhatsapp aria-hidden="true" size={20} />
        <span>Agendar consulta</span>
      </a>
    </main>
  );
}
