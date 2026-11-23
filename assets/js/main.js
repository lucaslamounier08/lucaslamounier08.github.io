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
        'Products built and operated under FalconApps — 10,000+ AI creations for 5,000+ users, multi-platform bots, Google Play games, web tools, and Chrome extensions.',
      projVisit: 'Visit falconapps.org',
      projGrp1Title: 'AI Bots & Studios',
      projGrp1Sub: 'WhatsApp · Messenger · IG · Telegram',
      projBotWaTitle: 'WhatsApp AI Bot',
      projBotWaDesc:
        '20+ on-demand AI services (custom songs, 4K Santa videos, photo shoots) delivered in <2 min via PIX & Stripe.',
      projBotMsgTitle: 'Messenger & Instagram DM Bots',
      projBotMsgDesc:
        'Custom songs, AI dance videos, and North Pole messages inside Facebook Messenger and @tech_falcon_ai.',
      projBotTgTitle: 'Telegram AI Music Bot',
      projBotTgDesc:
        '@music_with_ai_bot generating personalized studio tracks worldwide via Stripe and Telegram Stars.',
      projStudioTitle: 'AI Photo & Video Studio',
      projStudioDesc:
        'LinkedIn headshots, old photo restoration, Ghibli/Disney styles, and personalized 4K Santa Claus videos.',
      projGrp2Title: 'Android Games',
      projGrp2Sub: 'Google Play · Java · libGDX',
      projShapeDesc:
        'Paper & Ink roguelite arena survival built with Java/libGDX, procedural OpenGL, and 4 weapon evolutions.',
      projTapDesc:
        'Fast-paced Android reflex survival against escalating enemy waves, published on Google Play.',
      projWorstDesc:
        'Satirical Android UX-challenge game designed to test players’ patience on Google Play.',
      projFlappyDesc:
        'Customizable arcade game where players edit skins, colors, and game physics.',
      projGrp3Title: 'Web Apps & Tools',
      projGrp3Sub: 'Next.js · React · Canvas',
      projDopaminaDesc:
        'Free therapeutic online shopping simulator in 7 languages helping users curb impulse buying.',
      projToolsTitle: 'Free Printable & AI Generators',
      projToolsDesc:
        'No-login tools: Song Lyrics, Santa Letter, Baby Milestone Cards, Birthday Cards & LinkedIn Headline.',
      projGrp4Title: 'Chrome Extensions',
      projGrp4Sub: 'TypeScript · Browser Automation',
      projIgExtDesc:
        'Chrome extension built with TypeScript DOM automation for organic Instagram engagement.',
      projWaExtDesc:
        'WhatsApp Web bulk messaging and group workflow automation extensions for Chrome.',
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
        'Produtos desenvolvidos e operados sob a marca FalconApps — 10.000+ criações com IA para 5.000+ usuários, bots multiplataforma, jogos na Google Play, ferramentas web e extensões Chrome.',
      projVisit: 'Visitar falconapps.org',
      projGrp1Title: 'Bots de IA & Estúdios',
      projGrp1Sub: 'WhatsApp · Messenger · IG · Telegram',
      projBotWaTitle: 'Bot de IA no WhatsApp',
      projBotWaDesc:
        '20+ serviços sob demanda (músicas personalizadas, vídeos 4K do Papai Noel, ensaios de foto) entregues em <2 min via PIX e Stripe.',
      projBotMsgTitle: 'Bots para Messenger & Instagram DM',
      projBotMsgDesc:
        'Músicas sob medida, vídeos de dança com IA e vídeos natalinos direto no Facebook Messenger e @tech_falcon_ai.',
      projBotTgTitle: 'Bot de Música com IA no Telegram',
      projBotTgDesc:
        '@music_with_ai_bot criando faixas personalizadas no mundo todo com pagamento via Stripe e Telegram Stars.',
      projStudioTitle: 'Estúdio de Fotos & Vídeos IA',
      projStudioDesc:
        'Fotos profissionais para LinkedIn, restauração de fotos antigas, estilos Ghibli/Disney e vídeos 4K do Papai Noel.',
      projGrp2Title: 'Jogos Android',
      projGrp2Sub: 'Google Play · Java · libGDX',
      projShapeDesc:
        'Roguelite minimalista Paper & Ink feito em Java/libGDX com OpenGL procedural e 4 evoluções secretas.',
      projTapDesc:
        'Jogo arcade de sobrevivência por ondas e reflexo rápido para Android, publicado na Google Play.',
      projWorstDesc:
        'Jogo satírico de desafio de UX para Android criado para testar a paciência dos jogadores na Google Play.',
      projFlappyDesc:
        'Versão arcade customizável onde o jogador edita skins, cores e física do jogo.',
      projGrp3Title: 'Apps Web & Ferramentas',
      projGrp3Sub: 'Next.js · React · Canvas',
      projDopaminaDesc:
        'Simulador terapêutico gratuito de compras online em 7 idiomas para ajudar a controlar compras por impulso.',
      projToolsTitle: 'Geradores Gratuitos & Imprimíveis',
      projToolsDesc:
        'Ferramentas sem login: Letra de Música, Cartinha do Papai Noel, Mêsversário, Cartão de Aniversário e Bio do LinkedIn.',
      projGrp4Title: 'Extensões Chrome',
      projGrp4Sub: 'TypeScript · Automação de Navegador',
      projIgExtDesc:
        'Extensão Chrome em TypeScript com automação DOM para engajamento orgânico no Instagram.',
      projWaExtDesc:
        'Extensões Chrome para envio em massa e automação de fluxos no WhatsApp Web.',
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
