(function () {
  'use strict';

  const TRANSLATIONS = {
    en: {
      pageTitle: 'Lucas Lamounier Faria — Senior Java Backend Engineer',
      skipLink: 'Skip to content',
      ariaThemeToDark: 'Switch to dark theme',
      ariaThemeToLight: 'Switch to light theme',
      ariaMenuToggle: 'Toggle navigation menu',
      navExperience: 'Experience',
      navProjects: 'Projects',
      navExpertise: 'Expertise',
      navCredentials: 'Education',
      navContact: 'Contact',
      eyebrow: 'Senior Java Backend Engineer · Brazil (UTC-3) · Remote US & UK',
      heroTitle: 'Designing resilient <em>distributed systems</em> &amp; payment backends.',
      heroSummary:
        'Backend engineer with 7+ years building cloud-native microservices and APIs with Java and Spring Boot across fintech, payments, and enterprise platforms. Currently embedded with US and UK product teams at Acorns/goHenry via Turing; previously Technical Lead at Ambev Tech and payments engineer at HST.',
      btnDownloadCv: 'Download CV (PDF)',
      btnContact: 'Get in touch',
      portraitCaptionLeft: 'Lucas Lamounier Faria',
      portraitCaptionRight: 'Itajubá, MG · UTC-3',
      ledger1Title: '7+ Years',
      ledger1Desc: 'Production Java & Spring Boot backend engineering.',
      ledger2Title: 'Fintech & Payments',
      ledger2Desc: 'PCI-regulated tokenization & high-throughput systems.',
      ledger3Title: 'Cloud & Kubernetes',
      ledger3Desc: 'GCP & Azure workloads monitored with Datadog.',
      ledger4Title: 'End-to-End Ownership',
      ledger4Desc: 'Architecture, testing, CI/CD, and squad leadership.',
      expKicker: '01 / Career',
      expTitle: 'Experience',
      currentBadge: 'Current',
      role1Dates: 'Mar 2025 – Present',
      role1Loc: 'Remote · US & UK Teams',
      role1Title: 'Senior Java Backend Engineer (via Turing)',
      role1Context:
        'Embedded with the goHenry / Acorns Early product and engineering teams — a debit card and money app for kids and teens.',
      role1B1:
        'Designed and built a Backend-for-Frontend (BFF) exposing REST endpoints to the mobile app and translating requests into GraphQL queries against a downstream system.',
      role1B2:
        'Build and maintain Java 21 / Spring Boot 3.x microservices integrated through Spring Cloud OpenFeign (synchronous) and RabbitMQ (asynchronous) for resilient workflows.',
      role1B3:
        'Deploy and operate services on Google Cloud Platform (GCP) with Kubernetes; monitor production health and troubleshoot incidents using Datadog.',
      role1B4:
        'Maintain automated unit, integration, and end-to-end tests (including Testcontainers), support CI/CD pipelines, and adopt AI-assisted engineering workflows (Claude, Cursor).',
      role2Dates: 'Jun 2022 – Feb 2025',
      role2Loc: 'Brazil · Remote',
      role2Title: 'Senior Java Developer & Technical Lead',
      role2Context:
        'Technology organization of Ambev, one of Brazil’s largest companies. Multi-module invoice-management platform.',
      role2B1:
        'Served as technical lead of a development squad: mentored junior engineers, reviewed code, guided architectural decisions, and facilitated backlog refinement.',
      role2B2:
        'Drove the modernization of a multi-module invoice-management platform from a monolith toward a cloud-native, multi-tenant microservices architecture on Microsoft Azure.',
      role2B3:
        'Redesigned core workflows as an event-driven architecture (RabbitMQ, Azure Service Bus) with reactive Java (Project Reactor) in selected components for scalable asynchronous processing.',
      role2B4:
        'Built and maintained Azure CI/CD pipelines automating deployments to Virtual Machines and AKS; applied hexagonal architecture with Redis, Azure Blob Storage, SQL Server, and MongoDB.',
      role3Dates: 'May 2021 – May 2022',
      role3Loc: 'Campinas, SP · Brazil',
      role3Title: 'Mid-Level Java Developer',
      role3Context:
        'Payment tokenization and digital payment integrations for Latin American banks, working directly with Visa and Mastercard network standards.',
      role3B1:
        'Built secure Spring Boot services for payment tokenization and payment messaging in a PCI-regulated environment.',
      role3B2:
        'Maintained mission-critical Java EJB systems processing thousands of transactions per second in an always-on environment.',
      role3B3:
        'Designed microservices and REST APIs documented with OpenAPI (Swagger) for internal and partner engineering teams.',
      role3B4:
        'Automated Jenkins deployment pipelines and containerized services with Docker on WildFly, integrating PostgreSQL, MongoDB, and RabbitMQ.',
      role4Dates: 'Feb 2020 – Apr 2021',
      role4Loc: 'Barueri, SP · Brazil',
      role4Title: 'Support Analyst & Java Developer',
      role4Context:
        'Enterprise Java/JSF and Oracle systems supporting multi-franchise operations.',
      role4B1:
        'Implemented Spring Boot APIs to centralize financial reporting across multiple franchises, replacing manual, fragmented processes.',
      role4B2:
        'Developed internal Java diagnostic tools enabling real-time issue resolution and reducing support response times.',
      role4B3:
        'Partnered directly with end users and stakeholders to gather requirements and improve legacy Java/JSF and Oracle Forms & Reports / PL/SQL applications.',
      role5Dates: 'Jan 2019 – Feb 2020',
      role5Loc: 'Itajubá, MG · Brazil',
      role5Title: 'Full Stack Developer',
      role5Context:
        'Clinic-management platform used by healthcare providers across Brazil.',
      role5B1:
        'Built backend and frontend features and RESTful APIs using Java 8, Spring MVC, Hibernate, JSF, PrimeFaces, and PostgreSQL.',
      projKicker: '02 / Independent Work',
      projTitle: 'FalconApps & Projects',
      projAside:
        'Independent studio behind 10,000+ AI creations for 5,000+ users, multi-platform conversational bots, Android games on Google Play, and web tools.',
      projVisit: 'Visit falconapps.org',
      proj1Kicker: 'AI & Conversational Commerce',
      proj1Title: 'WhatsApp AI Bot & Creation Studio',
      proj1Desc:
        '20+ on-demand AI services serving 5,000+ customers directly on WhatsApp — custom songs with vocals, 4K personalized Santa videos, LinkedIn headshots, and photo restoration delivered in under 2 minutes via PIX & Stripe.',
      proj2Kicker: 'Multi-Platform Bots',
      proj2Title: 'Messenger, Instagram DM & Telegram Bots',
      proj2Desc:
        'Global conversational bots across Facebook Messenger, Instagram DM (@tech_falcon_ai), and Telegram (@music_with_ai_bot) delivering custom songs, AI dance videos, and Santa messages with Stripe, Apple Pay, and Telegram Stars.',
      proj3Kicker: 'Android & Web Game',
      proj3Title: 'Shape Survivors',
      proj3Desc:
        'Minimalist Paper & Ink roguelite arena survival published on Google Play and playable on the web — built with Java and libGDX featuring one-thumb controls, procedural OpenGL graphics, synthesized audio, and 4 secret weapon evolutions.',
      proj4Kicker: 'Google Play Games',
      proj4Title: 'Endless Tap Survival, Worst App Ever & Flappy Maker',
      proj4Desc:
        'Published Android arcade titles including Endless Tap Survival (wave-based reflex survival), Worst App Ever (satirical UX challenge), and Custom Flappy Bird Maker (editable skins, colors, and game physics).',
      proj5Kicker: 'Web Apps & Free Tools',
      proj5Title: 'DopaminaShop & Interactive Generators',
      proj5Desc:
        'DopaminaShop — a free therapeutic shopping simulator in 7 languages to curb impulse buying — alongside printable Next.js tools: Santa Letter Maker, Song Lyrics Generator, Baby Milestone Cards, and LinkedIn Headline Generator.',
      proj6Kicker: 'Browser Automation & More',
      proj6Title: 'Chrome Extensions & Full Catalog',
      proj6Desc:
        'Published Chrome automation extensions — IG Auto-Follow (TypeScript DOM automation) and WA Bulk Message Sender / Pro (WhatsApp Web workflows) — plus playable Canvas games and client web projects.',
      skillsKicker: '03 / Stack',
      skillsTitle: 'Technical Expertise',
      skillCat1: 'Languages & Frameworks',
      skillCat2: 'Architecture & APIs',
      skillCat3: 'Databases & Messaging',
      skillCat4: 'Cloud, Infra & Observability',
      skillCat5: 'Testing & Modern Workflow',
      credKicker: '04 / Background',
      credTitle: 'Education & Certifications',
      subEducation: 'Education',
      edu1Title: 'B.Sc. in Computer Engineering',
      edu1School: 'Federal University of Itajubá (UNIFEI), Brazil',
      edu2Title: 'MBA in IT Project Management',
      edu2School: 'Descomplica Faculdade Digital',
      edu3Title: 'Postgraduate Diploma in Software Analysis & Development',
      edu3School: 'Descomplica Faculdade Digital',
      subCerts: 'Certifications',
      subLanguages: 'Languages',
      langPt: 'Portuguese',
      langPtLevel: 'Native',
      langEn: 'English',
      langEnLevel: 'Full Professional (C1)',
      contactKicker: '05 / Contact',
      contactTitle: 'Let’s talk',
      contactLead: 'Open to meaningful conversations on distributed systems, backend architecture, and international engineering teams.',
      contactNote:
        'Based in Brazil (UTC-3) with flexible overlap across US and UK time zones. The best way to reach me is via LinkedIn.',
      labelLinkedin: 'LinkedIn',
      labelGithub: 'GitHub',
      labelFalconApps: 'FalconApps',
      labelCv: 'Resume / CV',
      footerRight: 'Built as clean static HTML/CSS/JS · Hosted on GitHub Pages'
    },
    pt: {
      pageTitle: 'Lucas Lamounier Faria — Engenheiro Backend Java Sênior',
      skipLink: 'Pular para o conteúdo',
      ariaThemeToDark: 'Ativar tema escuro',
      ariaThemeToLight: 'Ativar tema claro',
      ariaMenuToggle: 'Alternar menu de navegação',
      navExperience: 'Experiência',
      navProjects: 'Projetos',
      navExpertise: 'Especialidades',
      navCredentials: 'Formação',
      navContact: 'Contato',
      eyebrow: 'Engenheiro Backend Java Sênior · Brasil (UTC-3) · Remoto EUA & Reino Unido',
      heroTitle: 'Projetando <em>sistemas distribuídos</em> resilientes e backends de pagamentos.',
      heroSummary:
        'Engenheiro backend com mais de 7 anos construindo microsserviços cloud-native e APIs com Java e Spring Boot em fintechs, meios de pagamento e plataformas corporativas. Atualmente atuando junto aos times de produto dos EUA e Reino Unido na Acorns/goHenry via Turing; anteriormente Tech Lead na Ambev Tech e desenvolvedor de pagamentos na HST.',
      btnDownloadCv: 'Baixar CV (PDF)',
      btnContact: 'Entrar em contato',
      portraitCaptionLeft: 'Lucas Lamounier Faria',
      portraitCaptionRight: 'Itajubá, MG · UTC-3',
      ledger1Title: '7+ Anos',
      ledger1Desc: 'Engenharia backend em produção com Java e Spring Boot.',
      ledger2Title: 'Fintech & Pagamentos',
      ledger2Desc: 'Tokenização regulada por PCI e sistemas de alta vazão.',
      ledger3Title: 'Cloud & Kubernetes',
      ledger3Desc: 'Operação em GCP e Azure com observabilidade no Datadog.',
      ledger4Title: 'Visão Ponta a Ponta',
      ledger4Desc: 'Arquitetura, testes automatizados, CI/CD e liderança técnica.',
      expKicker: '01 / Carreira',
      expTitle: 'Experiência',
      currentBadge: 'Atual',
      role1Dates: 'Mar 2025 – Atual',
      role1Loc: 'Remoto · Times EUA & Reino Unido',
      role1Title: 'Engenheiro Backend Java Sênior (via Turing)',
      role1Context:
        'Alocado nos times de produto e engenharia da goHenry / Acorns Early — aplicativo financeiro e cartão de débito para jovens e adolescentes.',
      role1B1:
        'Projetou e construiu um Backend-for-Frontend (BFF) expondo endpoints REST para o aplicativo móvel e traduzindo requisições em consultas GraphQL para um sistema downstream.',
      role1B2:
        'Desenvolve e mantém microsserviços em Java 21 / Spring Boot 3.x integrados via Spring Cloud OpenFeign (síncrono) e RabbitMQ (assíncrono) para fluxos resilientes.',
      role1B3:
        'Implanta e opera serviços no Google Cloud Platform (GCP) com Kubernetes, monitorando a saúde em produção e investigando incidentes com Datadog.',
      role1B4:
        'Mantém testes automatizados unitários, de integração e ponta a ponta (incluindo Testcontainers), pipelines de CI/CD e fluxos de desenvolvimento assistido por IA (Claude, Cursor).',
      role2Dates: 'Jun 2022 – Fev 2025',
      role2Loc: 'Brasil · Remoto',
      role2Title: 'Desenvolvedor Java Sênior & Tech Lead',
      role2Context:
        'Braço de tecnologia da Ambev, uma das maiores empresas do Brasil. Plataforma multimódulo de gestão de notas fiscais.',
      role2B1:
        'Atuou como líder técnico de uma squad de desenvolvimento: mentoria de engenheiros juniores, code reviews, direcionamento arquitetural e refinamento de backlog.',
      role2B2:
        'Liderou a modernização de uma plataforma multimódulo de gestão fiscal, migrando de monólito para microsserviços cloud-native multi-tenant no Microsoft Azure.',
      role2B3:
        'Redesenhou fluxos críticos com arquitetura orientada a eventos (RabbitMQ, Azure Service Bus) e Java reativo (Project Reactor) em componentes selecionados para processamento assíncrono escalável.',
      role2B4:
        'Construiu e manteve pipelines de CI/CD no Azure automatizando deploys em VMs e AKS; aplicou arquitetura hexagonal integrando Redis, Azure Blob Storage, SQL Server e MongoDB.',
      role3Dates: 'Mai 2021 – Mai 2022',
      role3Loc: 'Campinas, SP · Brasil',
      role3Title: 'Desenvolvedor Java Pleno',
      role3Context:
        'Tokenização de pagamentos e integrações digitais para bancos latino-americanos, trabalhando diretamente com padrões das bandeiras Visa e Mastercard.',
      role3B1:
        'Construiu serviços seguros em Spring Boot para tokenização e mensageria de pagamentos em ambiente regulado por PCI.',
      role3B2:
        'Manteve sistemas críticos em Java EJB processando milhares de transações por segundo em operação contínua 24/7.',
      role3B3:
        'Projetou microsserviços e APIs REST documentadas com OpenAPI (Swagger) para times internos e parceiros bancários.',
      role3B4:
        'Automatizou pipelines de deploy com Jenkins e conteinerizou serviços com Docker em WildFly, integrando PostgreSQL, MongoDB e RabbitMQ.',
      role4Dates: 'Fev 2020 – Abr 2021',
      role4Loc: 'Barueri, SP · Brasil',
      role4Title: 'Analista de Suporte & Desenvolvedor Java',
      role4Context:
        'Sistemas corporativos em Java/JSF e Oracle Database atendendo operações de múltiplas franquias.',
      role4B1:
        'Implementou APIs em Spring Boot para centralizar relatórios financeiros de múltiplas franquias, substituindo processos manuais fragmentados.',
      role4B2:
        'Desenvolveu ferramentas internas em Java para diagnóstico e resolução de incidentes em tempo real, reduzindo o tempo de resposta do suporte.',
      role4B3:
        'Atuou diretamente com usuários e áreas de negócio para levantar requisitos e evoluir sistemas legados Java/JSF e Oracle Forms & Reports / PL/SQL.',
      role5Dates: 'Jan 2019 – Fev 2020',
      role5Loc: 'Itajubá, MG · Brasil',
      role5Title: 'Desenvolvedor Full Stack',
      role5Context:
        'Sistema de gestão clínica utilizado por profissionais e instituições de saúde.',
      role5B1:
        'Desenvolveu funcionalidades de backend e frontend e APIs RESTful com Java 8, Spring MVC, Hibernate, JSF, PrimeFaces e PostgreSQL.',
      projKicker: '02 / Projetos Independentes',
      projTitle: 'FalconApps & Projetos',
      projAside:
        'Estúdio independente por trás de 10.000+ criações com IA para 5.000+ clientes, bots conversacionais multiplataforma, jogos Android na Google Play e ferramentas web.',
      projVisit: 'Visitar falconapps.org',
      proj1Kicker: 'IA & Comércio Conversacional',
      proj1Title: 'Bot de IA no WhatsApp & Estúdio',
      proj1Desc:
        'Mais de 20 serviços sob demanda atendendo 5.000+ clientes direto no WhatsApp — músicas personalizadas com voz, vídeos 4K do Papai Noel, fotos profissionais para LinkedIn e restauração de fotos entregues em menos de 2 minutos via PIX e Stripe.',
      proj2Kicker: 'Bots Multiplataforma',
      proj2Title: 'Bots para Messenger, Instagram DM & Telegram',
      proj2Desc:
        'Bots conversacionais globais no Facebook Messenger, Instagram DM (@tech_falcon_ai) e Telegram (@music_with_ai_bot), gerando músicas sob medida, vídeos de dança com IA e vídeos natalinos com Stripe, Apple Pay e Telegram Stars.',
      proj3Kicker: 'Jogo Android & Web',
      proj3Title: 'Shape Survivors',
      proj3Desc:
        'Roguelite minimalista de sobrevivência em arena (estética Paper & Ink) publicado na Google Play e jogável no navegador — construído em Java e libGDX com controles de um polegar, gráficos OpenGL procedurais, áudio sintetizado e 4 evoluções secretas.',
      proj4Kicker: 'Jogos na Google Play',
      proj4Title: 'Endless Tap Survival, Worst App Ever & Flappy Maker',
      proj4Desc:
        'Jogos arcade publicados para Android, incluindo Endless Tap Survival (sobrevivência em ondas de reflexo), Worst App Ever (desafio satírico de UX) e Custom Flappy Bird Maker (edição de skins, cores e física do jogo).',
      proj5Kicker: 'Apps Web & Ferramentas Grátis',
      proj5Title: 'DopaminaShop & Geradores Interativos',
      proj5Desc:
        'DopaminaShop — simulador terapêutico gratuito de compras em 7 idiomas para controlar compras por impulso — além de ferramentas imprimíveis em Next.js: Cartinha do Papai Noel, Gerador de Letras, Plaquinha de Mêsversário e Resumo para LinkedIn.',
      proj6Kicker: 'Automação & Catálogo Completo',
      proj6Title: 'Extensões Chrome & Portfólio FalconApps',
      proj6Desc:
        'Extensões de automação publicadas para Chrome — IG Auto-Follow (automação DOM em TypeScript) e WA Bulk Message Sender / Pro (fluxos no WhatsApp Web) — além de jogos em Canvas e projetos web para clientes.',
      skillsKicker: '03 / Stack',
      skillsTitle: 'Especialidades Técnicas',
      skillCat1: 'Linguagens & Frameworks',
      skillCat2: 'Arquitetura & APIs',
      skillCat3: 'Bancos de Dados & Mensageria',
      skillCat4: 'Cloud, Infra & Observabilidade',
      skillCat5: 'Testes & Fluxo Moderno',
      credKicker: '04 / Formação',
      credTitle: 'Formação & Certificações',
      subEducation: 'Formação Acadêmica',
      edu1Title: 'Bacharelado em Engenharia de Computação',
      edu1School: 'Universidade Federal de Itajubá (UNIFEI), Brasil',
      edu2Title: 'MBA em Gestão de Projetos em TI',
      edu2School: 'Descomplica Faculdade Digital',
      edu3Title: 'Pós-Graduação em Análise e Desenvolvimento de Programas',
      edu3School: 'Descomplica Faculdade Digital',
      subCerts: 'Certificações',
      subLanguages: 'Idiomas',
      langPt: 'Português',
      langPtLevel: 'Nativo',
      langEn: 'Inglês',
      langEnLevel: 'Profissional Pleno (C1)',
      contactKicker: '05 / Contato',
      contactTitle: 'Vamos conversar',
      contactLead: 'Aberto a conversas sobre sistemas distribuídos, arquitetura backend e times internacionais de engenharia.',
      contactNote:
        'Baseado no Brasil (UTC-3), com sobreposição flexível de horário com times dos EUA e Reino Unido. A melhor forma de entrar em contato é pelo LinkedIn.',
      labelLinkedin: 'LinkedIn',
      labelGithub: 'GitHub',
      labelFalconApps: 'FalconApps',
      labelCv: 'Currículo / CV',
      footerRight: 'HTML/CSS/JS estático e leve · Hospedado no GitHub Pages'
    }
  };

  let currentLang = 'en';

  function getInitialLang() {
    try {
      const params = new URLSearchParams(window.location.search);
      const paramLang = (params.get('lang') || '').toLowerCase();
      if (paramLang === 'pt' || paramLang === 'pt-br') return 'pt';
      if (paramLang === 'en' || paramLang === 'en-us') return 'en';
    } catch (_) {}
    try {
      const saved = localStorage.getItem('portfolio_lang');
      if (saved === 'pt' || saved === 'en') return saved;
    } catch (_) {}
    return 'en';
  }

  function updateThemeAria() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    const dict = TRANSLATIONS[currentLang];
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-pressed', isDark ? 'true' : 'false');
    toggle.setAttribute('aria-label', isDark ? dict.ariaThemeToLight : dict.ariaThemeToDark);
  }

  function updateControlAriaLabels() {
    const dict = TRANSLATIONS[currentLang];
    updateThemeAria();

    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) menuToggle.setAttribute('aria-label', dict.ariaMenuToggle);
  }

  function applyLang(lang, persist) {
    currentLang = lang === 'pt' ? 'pt' : 'en';
    const dict = TRANSLATIONS[currentLang];
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
    document.title = dict.pageTitle;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (el.hasAttribute('data-i18n-html')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    document.querySelectorAll('[data-href-en]').forEach(function (el) {
      const targetHref = el.getAttribute(currentLang === 'pt' ? 'data-href-pt' : 'data-href-en');
      if (targetHref) el.setAttribute('href', targetHref);
    });

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      const isMatch = btn.getAttribute('data-lang') === currentLang;
      btn.setAttribute('aria-pressed', isMatch ? 'true' : 'false');
    });

    updateControlAriaLabels();

    if (persist) {
      try {
        localStorage.setItem('portfolio_lang', currentLang);
      } catch (_) {}
    }
  }

  function initTheme() {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;

    function getSavedTheme() {
      try {
        const saved = localStorage.getItem('portfolio_theme');
        if (saved === 'dark' || saved === 'light') return saved;
      } catch (_) {}
      return null;
    }

    const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
    if (!document.documentElement.getAttribute('data-theme') && mediaQuery && mediaQuery.matches) {
      document.documentElement.setAttribute('data-theme', 'dark');
    }

    updateThemeAria();

    if (mediaQuery) {
      const handleMediaChange = function (e) {
        if (getSavedTheme()) return;
        document.documentElement.setAttribute('data-theme', e.matches ? 'dark' : 'light');
        updateThemeAria();
      };
      if (typeof mediaQuery.addEventListener === 'function') {
        mediaQuery.addEventListener('change', handleMediaChange);
      } else if (typeof mediaQuery.addListener === 'function') {
        mediaQuery.addListener(handleMediaChange);
      }
    }

    toggle.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try {
        localStorage.setItem('portfolio_theme', next);
      } catch (_) {}
      updateThemeAria();
    });
  }

  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-nav');
    if (!toggle || !drawer) return;

    function closeMenu(restoreFocus) {
      if (!drawer.classList.contains('is-open')) return;
      drawer.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      if (restoreFocus) toggle.focus();
    }

    toggle.addEventListener('click', function () {
      const isOpen = drawer.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    drawer.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu(false);
      });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        closeMenu(drawer.contains(document.activeElement));
      }
    });
  }

  function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    function setActive(id) {
      navLinks.forEach(function (link) {
        link.classList.toggle('is-active', Boolean(id) && link.getAttribute('href') === '#' + id);
      });
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            setActive(id === 'top' ? null : id);
          }
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    let ticking = false;
    window.addEventListener(
      'scroll',
      function () {
        if (ticking) return;
        ticking = true;
        window.requestAnimationFrame(function () {
          ticking = false;
          const doc = document.documentElement;
          if (window.scrollY < 100) {
            setActive(null);
          } else if (window.innerHeight + window.scrollY >= doc.scrollHeight - 24) {
            setActive('contact');
          }
        });
      },
      { passive: true }
    );
  }

  function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!targets.length) return;

    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      targets.forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }

    document.documentElement.classList.add('js-enabled');

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.05 }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }

  function initYear() {
    const el = document.getElementById('copyright-year');
    if (el) el.textContent = String(new Date().getFullYear());
  }

  document.addEventListener('DOMContentLoaded', function () {
    applyLang(getInitialLang(), false);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'), true);
      });
    });

    initTheme();
    initMobileMenu();
    initScrollSpy();
    initReveal();
    initYear();
  });
})();
