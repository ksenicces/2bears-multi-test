/* ===================================================================
   i18n.js — простой переключатель языка RU / ES без перезагрузки страницы
   =================================================================== */
(function () {
  var translations = {
    ru: {
      page_title: "2 МЕДВЕДЯ — маркетинговое агентство",
      alt_logo: "Логотип",

      nav_services: "Услуги",
      nav_pricing: "Цены",
      nav_cases: "Кейсы",
      nav_company: "Компания",

      hero_eyebrow: "Маркетинговое агентство · Минск",
      hero_title: 'Контекстная реклама и <em>digital-стратегии</em> для вашего бизнеса',
      hero_lead: "Приводим целевых клиентов из Яндекс.Директ и Google Ads. Настраиваем прозрачную сквозную аналитику и оптимизируем стоимость лида.",
      hero_cta_primary: "Обсудить проект →",
      hero_cta_secondary: "Смотреть услуги",

      stat1_label: "на рынке интернет-рекламы с этого года",
      stat2_label: "прямые контракты с Яндекс и Google — без переплат за посредников",
      stat3_label: "персональный подход к каждому проекту",

      kicker_services: "Услуги и решения",
      title_services: "Всё, что нужно бизнесу, чтобы находить клиентов онлайн",
      sub_services: "От настройки рекламного кабинета до сайта под ключ — закрываем весь цифровой контур одной командой.",

      svc1_title: "Контекстная реклама",
      svc1_desc: "Быстро настраиваем, сопровождаем и точно анализируем кампании в Яндекс Директе и Google Ads. Тестируем новые инструменты для лучшего результата.",
      svc2_title: "Медийная и таргетированная реклама",
      svc2_desc: "Собираем внимание аудитории яркими баннерами на подобранных площадках и точным таргетингом — для роста узнаваемости бренда.",
      svc3_title: "Зачисление на рекламные аккаунты",
      svc3_desc: "Зачисляем деньги на аккаунт в течение 30 минут, готовим полный пакет документов с НДС и ежедневно контролируем остаток.",
      svc4_title: "Создание сайтов",
      svc4_desc: "Запускаем продающий сайт с системой управления за 7 дней: лендинги, визитки, каталоги и интернет-магазины с адаптацией под мобильные.",
      svc5_title: "Видеореклама и продвижение на YouTube",
      svc5_desc: "Запускаем видеокампании и продвигаем ролики так, чтобы их досматривали, а не пропускали.",
      svc6_title: "Веб-аналитика и аудит",
      svc6_desc: "Настраиваем Яндекс Метрику и Google Analytics, находим точки утечки бюджета в текущей рекламе.",
      svc7_title: "Внедрение CRM",
      svc7_desc: "Настройка и сопровождение Битрикс24 и AmoCRM — чтобы заявки не терялись между отделами.",
      svc8_title: "Управление репутацией",
      svc8_desc: "Работаем с отзывами и поисковой выдачей о бренде, снимаем негатив и усиливаем доверие.",
      svc9_title: "Видеосъёмка для бизнеса",
      svc9_desc: "Снимаем ролики о продукте и трансляции мероприятий для последующего продвижения.",

      kicker_process: "Как мы работаем",
      title_process: "Путь от заявки до первых клиентов из рекламы",
      step1_title: "Бриф и аудит",
      step1_desc: "Разбираем задачу бизнеса, аудируем текущий сайт и рекламу, если она уже была.",
      step2_title: "Стратегия и медиаплан",
      step2_desc: "Подбираем каналы, площадки и бюджет под конкретную цель, а не «для галочки».",
      step3_title: "Запуск за 7 дней",
      step3_desc: "Рабочий сайт с системой управления, кампании в Яндекс Директ и Google Ads, техподдержка и бесплатный годовой хостинг.",
      step4_title: "Сопровождение",
      step4_desc: "Еженедельно оптимизируем ставки, следим за аналитикой и присылаем понятные отчёты.",

      kicker_company: "Компания",
      title_company: "Digital-агентство 2 МЕДВЕДЯ",
      company_p1: "Надёжный партнёр на рынке интернет-рекламы с 2012 года. За это время наработали внушительную базу лояльных клиентов, получили ценный опыт и собрали профессиональную команду специалистов.",
      company_p2: "Всегда открыты для обсуждения условий сотрудничества — от цены на настройку рекламы до порядка расчётов. Работаем с компаниями в Минске, Могилёве и других городах.",
      comp1_title: "Без переплат и скрытых комиссий",
      comp1_desc: "Работаем по прямым контрактам с Яндекс и Google",
      comp2_title: "Контроль бюджета",
      comp2_desc: "Оперативно решаем сложные вопросы и уведомляем об изменениях в ходе кампаний",
      comp3_title: "Фокус на результат",
      comp3_desc: "Экспериментируем с инструментами, используем технологический подход к рекламе",
      comp4_title: "Постоянное развитие",
      comp4_desc: "Регулярно проходим сертификацию в рекламных системах",

      kicker_pricing: "Цены",
      title_pricing: "Прозрачная стоимость услуг",
      sub_pricing: "Три готовых пакета — точная стоимость зависит от объёма задач и обсуждается индивидуально.",
      price1_title: "Комплексная настройка",
      price1_desc: "Настройка контекстной рекламы в Яндекс Директ / Google Ads: поисковая, мобильная и тематическая кампании плюс ремаркетинг",
      price2_title: "Зачисление (пополнение)",
      price2_desc: "Пополнение рекламных аккаунтов: зачисление в течение 30 минут, полный пакет документов с НДС, ежедневный мониторинг остатка",
      price3_title: "Готовое решение",
      price3_desc: "Продающий сайт + настройка рекламных кампаний в Яндекс Директ и Google Ads + техподдержка сайта и хостинг. Стоимость в месяц",

      kicker_cases: "Нам доверяют",
      title_cases: "Клиенты и результаты",
      aria_prev: "Предыдущий отзыв",
      aria_next: "Следующий отзыв",

      t1_role: "ООО «Точдеталь»",
      t1_quote: "Ведут наши рекламные кампании в Google и Яндексе с начала 2017 года, а в 2019-м сделали нам новый сайт. Полностью довольны сотрудничеством.",
      t2_role: "директор по маркетингу, «Чистый берег»",
      t2_quote: "Работаем много лет — делали нам несколько лендингов под разные проекты, всегда в срок. Легко берутся за нестандартные задачи: онлайн-тестирования, анкетирование, личные кабинеты пользователей.",
      t3_role: "управляющий ИП",
      t3_quote: "Работаю с агентством почти два года — комфортно, отвечают быстро и гибко по контекстной рекламе, все спорные вопросы снимаются после разъяснений специалистов.",
      t4_role: "директор, ООО «50.by»",
      t4_quote: "После запуска контекстной рекламы количество обращений с сайта выросло на 26%. Отдельное спасибо за техподдержку и лояльность в цене.",
      t5_role: "компания «МИПС»",
      t5_quote: "Благодарим за индивидуальный подход и оперативную реакцию на любые изменения в ходе работы — рабочие вопросы решаются быстро.",
      t6_role: "директор, «Модультехнострой»",
      t6_quote: "Несколько раз меняли подрядчика по продвижению сайтов и остановились на 2 МЕДВЕДЯ — приятно работать с профессионалами.",

      cases_sub: "Среди клиентов — компании, которые становятся лидерами в своих отраслях благодаря планированию и системному подходу.",
      title_cases2: "Наши кейсы",
      case1_title: "Видеосъёмка и продвижение канала на YouTube",
      case2_title: "Разработка сайта и онлайн-тестирования",
      case3_title: "Как быстро найти сотрудников с помощью контекстной рекламы",
      case4_title: "Оптимизация рекламных кампаний в Яндексе",

      cta_title: "Расскажите о задаче — подберём решение под бюджет",
      cta_text: "Ответим в течение рабочего дня и предложим, с чего начать: аудит текущей рекламы, новый сайт или всё сразу.",
      cta_address: "Минск, Могилёв — работаем по всей Беларуси",

      label_name: "Имя",
      ph_name: "Как к вам обращаться",
      label_phone: "Телефон или e-mail",
      label_task: "Задача",
      ph_task: "Нужен сайт, реклама или всё сразу",
      btn_submit: "Отправить заявку",
      fine_text: "Нажимая кнопку, вы соглашаетесь на обработку данных",

      footer_muted: "© 2026 2 МЕДВЕДЯ · Рекламные решения в интернете · Минск"
    },

    es: {
      page_title: "2 MEDVEDYA — agencia de marketing",
      alt_logo: "Logotipo",

      nav_services: "Servicios",
      nav_pricing: "Precios",
      nav_cases: "Casos",
      nav_company: "Empresa",

      hero_eyebrow: "Agencia de marketing · Minsk",
      hero_title: 'Publicidad contextual y <em>estrategias digitales</em> para tu negocio',
      hero_lead: "Atraemos clientes objetivo desde Yandex.Direct y Google Ads. Configuramos una analítica transparente de extremo a extremo y optimizamos el costo por lead.",
      hero_cta_primary: "Hablar del proyecto →",
      hero_cta_secondary: "Ver servicios",

      stat1_label: "en el mercado de publicidad online desde este año",
      stat2_label: "contratos directos con Yandex y Google — sin sobrecostos por intermediarios",
      stat3_label: "enfoque personalizado en cada proyecto",

      kicker_services: "Servicios y soluciones",
      title_services: "Todo lo que tu negocio necesita para encontrar clientes online",
      sub_services: "Desde la configuración de la cuenta publicitaria hasta un sitio web llave en mano — cubrimos todo el circuito digital con un solo equipo.",

      svc1_title: "Publicidad contextual",
      svc1_desc: "Configuramos, gestionamos y analizamos con precisión las campañas en Yandex Direct y Google Ads. Probamos nuevas herramientas para obtener mejores resultados.",
      svc2_title: "Publicidad de display y segmentada",
      svc2_desc: "Captamos la atención de la audiencia con banners llamativos en plataformas seleccionadas y una segmentación precisa — para aumentar el reconocimiento de marca.",
      svc3_title: "Recarga de cuentas publicitarias",
      svc3_desc: "Acreditamos el saldo en la cuenta en 30 minutos, preparamos el paquete completo de documentos con IVA y controlamos el saldo diariamente.",
      svc4_title: "Creación de sitios web",
      svc4_desc: "Lanzamos un sitio web orientado a ventas con sistema de gestión en 7 días: landing pages, sitios corporativos, catálogos y tiendas online adaptadas a móviles.",
      svc5_title: "Publicidad en vídeo y promoción en YouTube",
      svc5_desc: "Lanzamos campañas de vídeo y promocionamos los clips para que se vean hasta el final y no se salten.",
      svc6_title: "Analítica web y auditoría",
      svc6_desc: "Configuramos Yandex Metrica y Google Analytics, y detectamos dónde se filtra el presupuesto en la publicidad actual.",
      svc7_title: "Implementación de CRM",
      svc7_desc: "Configuración y soporte de Bitrix24 y AmoCRM — para que ninguna solicitud se pierda entre departamentos.",
      svc8_title: "Gestión de reputación",
      svc8_desc: "Trabajamos con las reseñas y los resultados de búsqueda sobre la marca, reducimos lo negativo y reforzamos la confianza.",
      svc9_title: "Producción de vídeo para empresas",
      svc9_desc: "Grabamos vídeos de producto y transmisiones de eventos para su posterior promoción.",

      kicker_process: "Cómo trabajamos",
      title_process: "El camino desde la solicitud hasta los primeros clientes gracias a la publicidad",
      step1_title: "Brief y auditoría",
      step1_desc: "Analizamos la tarea del negocio y auditamos el sitio web y la publicidad actuales, si ya existían.",
      step2_title: "Estrategia y plan de medios",
      step2_desc: "Elegimos los canales, las plataformas y el presupuesto para un objetivo concreto, no «por cumplir».",
      step3_title: "Lanzamiento en 7 días",
      step3_desc: "Sitio web funcional con sistema de gestión, campañas en Yandex Direct y Google Ads, soporte técnico y hosting gratuito durante un año.",
      step4_title: "Acompañamiento",
      step4_desc: "Optimizamos las pujas semanalmente, monitoreamos la analítica y enviamos informes claros.",

      kicker_company: "Empresa",
      title_company: "Agencia digital 2 MEDVEDYA",
      company_p1: "Socio confiable en el mercado de la publicidad online desde 2012. Durante este tiempo hemos formado una sólida base de clientes fieles, adquirido una valiosa experiencia y reunido un equipo profesional de especialistas.",
      company_p2: "Siempre abiertos a conversar sobre las condiciones de colaboración — desde el precio de la configuración publicitaria hasta la forma de pago. Trabajamos con empresas en Minsk, Mogilev y otras ciudades.",
      comp1_title: "Sin sobrecostos ni comisiones ocultas",
      comp1_desc: "Trabajamos con contratos directos con Yandex y Google",
      comp2_title: "Control del presupuesto",
      comp2_desc: "Resolvemos rápidamente las cuestiones complejas y notificamos sobre los cambios durante las campañas",
      comp3_title: "Enfoque en resultados",
      comp3_desc: "Experimentamos con herramientas y aplicamos un enfoque tecnológico a la publicidad",
      comp4_title: "Desarrollo constante",
      comp4_desc: "Nos certificamos regularmente en las plataformas publicitarias",

      kicker_pricing: "Precios",
      title_pricing: "Costos de servicios transparentes",
      sub_pricing: "Tres paquetes listos — el costo exacto depende del volumen de tareas y se acuerda de forma individual.",
      price1_title: "Configuración integral",
      price1_desc: "Configuración de publicidad contextual en Yandex Direct / Google Ads: campañas de búsqueda, móvil y temática, además de remarketing",
      price2_title: "Recarga de saldo",
      price2_desc: "Recarga de cuentas publicitarias: acreditación en 30 minutos, paquete completo de documentos con IVA, monitoreo diario del saldo",
      price3_title: "Solución llave en mano",
      price3_desc: "Sitio web orientado a ventas + configuración de campañas publicitarias en Yandex Direct y Google Ads + soporte técnico del sitio y hosting. Precio mensual",

      kicker_cases: "Confían en nosotros",
      title_cases: "Clientes y resultados",
      aria_prev: "Reseña anterior",
      aria_next: "Siguiente reseña",

      t1_role: "OOO «Tochdetal»",
      t1_quote: "Gestionan nuestras campañas publicitarias en Google y Yandex desde inicios de 2017, y en 2019 nos hicieron un nuevo sitio web. Totalmente satisfechos con la colaboración.",
      t2_role: "director de marketing, «Chisty Bereg»",
      t2_quote: "Trabajamos juntos desde hace muchos años — nos hicieron varias landing pages para distintos proyectos, siempre a tiempo. Asumen con facilidad tareas poco habituales: pruebas online, encuestas, áreas de usuario personales.",
      t3_role: "gerente, empresario individual",
      t3_quote: "Trabajo con la agencia desde hace casi dos años — es cómodo, responden rápido y con flexibilidad sobre la publicidad contextual, y cualquier duda se resuelve tras las explicaciones de los especialistas.",
      t4_role: "director, OOO «50.by»",
      t4_quote: "Tras lanzar la publicidad contextual, el número de solicitudes desde el sitio web aumentó un 26 %. Gracias especialmente por el soporte técnico y la flexibilidad en el precio.",
      t5_role: "empresa «MIPS»",
      t5_quote: "Agradecemos el trato personalizado y la reacción rápida ante cualquier cambio durante el trabajo — los asuntos se resuelven con agilidad.",
      t6_role: "director, «Modultehnostroy»",
      t6_quote: "Cambiamos de proveedor de posicionamiento web varias veces y nos quedamos con 2 MEDVEDYA — es un placer trabajar con profesionales.",

      cases_sub: "Entre nuestros clientes hay empresas que se convierten en líderes de su sector gracias a la planificación y un enfoque sistemático.",
      title_cases2: "Nuestros casos",
      case1_title: "Producción de vídeo y promoción de un canal de YouTube",
      case2_title: "Desarrollo de sitio web y pruebas online",
      case3_title: "Cómo encontrar empleados rápidamente con publicidad contextual",
      case4_title: "Optimización de campañas publicitarias en Yandex",

      cta_title: "Cuéntanos tu proyecto — te proponemos una solución acorde a tu presupuesto",
      cta_text: "Responderemos en el transcurso del día laboral y te propondremos por dónde empezar: auditoría de la publicidad actual, un nuevo sitio web o todo junto.",
      cta_address: "Minsk, Mogilev — trabajamos en toda Bielorrusia",

      label_name: "Nombre",
      ph_name: "¿Cómo te llamamos?",
      label_phone: "Teléfono o e-mail",
      label_task: "Tarea",
      ph_task: "Necesitas un sitio, publicidad o todo a la vez",
      btn_submit: "Enviar solicitud",
      fine_text: "Al pulsar el botón, aceptas el tratamiento de tus datos",

      footer_muted: "© 2026 2 MEDVEDYA · Soluciones publicitarias en internet · Minsk"
    }
  };

  var STORAGE_KEY = "site_lang";
  window.i18nCurrentLang = "ru";

  function getStoredLang() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
  }

  function applyLanguage(lang) {
    var dict = translations[lang] || translations.ru;
    window.i18nCurrentLang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });

    var titleEl = document.getElementById("page-title");
    if (titleEl && dict.page_title) {
      titleEl.textContent = dict.page_title;
      document.title = dict.page_title;
    }

    var htmlRoot = document.getElementById("html-root");
    if (htmlRoot) htmlRoot.setAttribute("lang", lang);

    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang-btn") === lang);
    });

    storeLang(lang);
  }

  function detectInitialLang() {
    var stored = getStoredLang();
    if (stored === "ru" || stored === "es") return stored;
    var nav = (navigator.language || "").toLowerCase();
    return nav.indexOf("es") === 0 ? "es" : "ru";
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLanguage(btn.getAttribute("data-lang-btn"));
      });
    });
    applyLanguage(detectInitialLang());
  });
})();