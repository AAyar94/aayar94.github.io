const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    common: {
      backToProjects: 'Back to Projects',
      backToPortfolio: 'Back to Portfolio',
      viewDetails: 'View details',
      viewLicense: 'View License',
      allProjects: 'All Projects',
      viewOnGithub: 'View on GitHub',
      privacyPolicy: 'Privacy Policy',
      overview: 'Overview',
      architecture: 'Architecture',
      howItWorks: 'How It Works',
      howToUse: 'How to Use',
      techStack: 'Tech Stack',
      technologiesUsed: 'Technologies Used'
    },
    hero: {
      title: 'Hi, I\'m <span class="gradient-text">Adem Ayar</span>',
      desc: 'Android Developer passionate about crafting clean, performant mobile experiences with Kotlin and Jetpack Compose.',
      viewProjects: 'View Projects',
      downloadCV: 'Download CV',
      roles: ['Android Developer', 'Kotlin Engineer', 'Mobile App Builder', 'KMM Enthusiast']
    },
    about: {
      label: 'About Me',
      title: 'Building apps people<br><span class="gradient-text">actually enjoy using</span>',
      bio: "I'm an Android Developer with a background in Electrical &amp; Electronics Engineering (class of 2022). I build polished, production-ready Android apps using Kotlin, Jetpack Compose, and modern architecture patterns like MVVM and Clean Architecture.<br><br>Beyond Android, I'm passionate about Kotlin Multiplatform for sharing business logic across platforms, and I've extended my skills into IntelliJ plugin development with SmartCodeSorter.",
      projectsBuilt: 'Projects Built',
      yearsExp: 'Years Experience',
      platforms: 'Platforms'
    },
    skills: {
      label: 'What I Work With',
      title: 'Tech Stack'
    },
    projects: {
      label: "What I've Built",
      title: 'Projects',
      smartCodeSorter: 'IntelliJ IDEA &amp; Android Studio plugin that automatically organizes Kotlin class members by structure and conventions.',
      kmmNotes: 'Cross-platform notes app for Android &amp; iOS built with Kotlin Multiplatform — sharing business logic across both platforms.',
      crypto: 'Live cryptocurrency tracker with coin details, price charts, and adaptive UI for phones and tablets.',
      aquatick: 'Daily hydration tracker that calculates your personal water intake goal and logs progress throughout the day.',
      calorieTracker: 'Nutrition app to set daily calorie goals, track meals, and monitor macronutrient intake throughout the day.',
      earthquakes: 'Real-time tracker for the last 100 earthquakes in Turkey with interactive map view and risk zone visualization.',
      settowally: 'Free high-resolution wallpaper app with curated collections, search, and one-tap set functionality.',
      foodRecipes: 'Recipe discovery app with ingredients, cooking steps, and filters for different dietary preferences.',
      valorGuide: 'Valorant companion app — browse game info, agent guides, and view your personal match statistics.',
      passwordGenerator: 'Secure password generator with customizable length, character sets, and one-tap clipboard copy.',
      chronix: 'Countdown &amp; event timer for Android with home-screen widgets, calendar import, and reminders — built on Clean Architecture with Jetpack Compose.',
      shine: 'macOS menu-bar app to control external monitor brightness &amp; volume with your keyboard keys over DDC/CI, built with Swift and SwiftUI.'
    },
    contact: {
      label: 'Get In Touch',
      title: 'Let\'s <span class="gradient-text">Work Together</span>',
      desc: "Have a project in mind or want to collaborate? I'd love to hear from you.",
      email: 'Email',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: '© 2026 Adem Ayar — Designed &amp; built from scratch',

    detail: {
      scs: {
        subtitle: 'IntelliJ IDEA &amp; Android Studio plugin that automatically organizes Kotlin class members by structure and conventions — with zero configuration.',
        ovTitle: 'Clean Kotlin code,<br><span class="gradient-text">automatically</span>',
        ovDesc: 'SmartCodeSorter keeps your Kotlin class structure consistent without any manual effort. Install it, press a shortcut, and your class members, constructor parameters, and nested classes are instantly organized following Kotlin conventions.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Sort class members (fields, methods, nested classes) in one keystroke</li><li class="feature-item"><span class="feature-dot"></span>Constructor parameter sorting for cleaner class definitions</li><li class="feature-item"><span class="feature-dot"></span>Sort on Save — auto-sort every time you save a file</li><li class="feature-item"><span class="feature-dot"></span>Shortcut: <strong>⌥⌘S</strong> (macOS) / <strong>Code → Smart Code Sorter</strong></li><li class="feature-item"><span class="feature-dot"></span>Zero configuration — works out of the box</li><li class="feature-item"><span class="feature-dot"></span>Compatible with IntelliJ IDEA &amp; Android Studio</li>',
        getStarted: 'Get Started',
        card1Title: 'Manual Sort',
        card1: '<li>Open any Kotlin file in IntelliJ IDEA or Android Studio</li><li>Press <strong style="color:var(--cyan)">⌥⌘S</strong> (macOS)</li><li>Or go to <strong>Code → Smart Code Sorter → Sort Kotlin Code</strong></li>',
        card2Title: 'Sort on Save',
        card2: '<li>Go to <strong>Code → Smart Code Sorter → Sort on Save</strong></li><li>Toggle the option on</li><li>Your code is sorted automatically every time you save</li>'
      },
      kmm: {
        subtitle: 'Cross-platform notes app for Android &amp; iOS built with Kotlin Multiplatform — sharing business logic across both platforms.',
        ovTitle: 'One codebase,<br><span class="gradient-text">two platforms</span>',
        ovDesc: 'A fast, clean note-taking app built with Kotlin Multiplatform that runs natively on both Android and iOS. The shared Kotlin module handles all business logic and data persistence, while each platform gets its own native UI.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Create and edit notes with priority levels (high, medium, low)</li><li class="feature-item"><span class="feature-dot"></span>Real-time search across all notes</li><li class="feature-item"><span class="feature-dot"></span>Shared business logic for Android &amp; iOS via KMM</li><li class="feature-item"><span class="feature-dot"></span>Offline-first persistence with SQLDelight</li><li class="feature-item"><span class="feature-dot"></span>Dependency injection with Dagger-Hilt (Android)</li>'
      },
      crypto: {
        subtitle: 'Live cryptocurrency tracker with coin details, price charts, and an adaptive multi-pane layout for phones and tablets.',
        ovTitle: 'Modern Android<br><span class="gradient-text">best practices</span>',
        ovDesc: 'Built as a reference project to explore Android\'s latest best practices. Crypto Tracker pulls live coin data and displays it with a clean list-detail UI. On tablets, it uses Adaptive Navigation for a proper multi-pane experience.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Live cryptocurrency list with price &amp; change data</li><li class="feature-item"><span class="feature-dot"></span>Detail view with price chart per coin</li><li class="feature-item"><span class="feature-dot"></span>Adaptive Navigation — single/dual pane based on screen size</li><li class="feature-item"><span class="feature-dot"></span>MVI architecture for predictable state management</li><li class="feature-item"><span class="feature-dot"></span>Koin for lightweight dependency injection</li>'
      },
      aquatick: {
        subtitle: 'Daily hydration tracker with beverage type charts, reminders, and health articles to build better water habits.',
        ovTitle: 'Stay hydrated,<br><span class="gradient-text">every day</span>',
        ovDesc: 'Aquatick helps you track your daily fluid intake broken down by drink type, visualized as charts. It calculates your personal daily goal, sends reminders throughout the day, and offers health articles to build lasting hydration habits.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Track different beverage types separately with chart visualization (Vico)</li><li class="feature-item"><span class="feature-dot"></span>Personalized daily hydration goal calculation</li><li class="feature-item"><span class="feature-dot"></span>Background reminders via WorkManager</li><li class="feature-item"><span class="feature-dot"></span>Curated health articles fetched via Retrofit</li><li class="feature-item"><span class="feature-dot"></span>Lottie animations for a polished UI experience</li><li class="feature-item"><span class="feature-dot"></span>Firebase analytics &amp; multi-module architecture</li>'
      },
      cal: {
        subtitle: 'Track your daily calorie intake and macronutrients — carbs, protein, and fat — with visual breakdown charts.',
        ovTitle: 'Know what you<br><span class="gradient-text">put in your body</span>',
        ovDesc: 'Set your daily calorie goal and track every meal with a full macronutrient breakdown. Carbs, protein, and fat are displayed in individual visual charts so you can see exactly how your nutrition stacks up against your targets each day.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Set personalized daily calorie and macro goals</li><li class="feature-item"><span class="feature-dot"></span>Log meals and track carbs, protein &amp; fat separately</li><li class="feature-item"><span class="feature-dot"></span>Visual chart breakdown per macronutrient</li><li class="feature-item"><span class="feature-dot"></span>Clean MVVM + Clean Architecture structure</li><li class="feature-item"><span class="feature-dot"></span>Offline-first with Room database caching</li>'
      },
      eq: {
        subtitle: 'Real-time tracker for the last 100 earthquakes in Turkey with interactive map view, sorting, and risk zone visualization.',
        ovTitle: 'Stay informed<br><span class="gradient-text">about seismic activity</span>',
        ovDesc: 'A real-time app showing the last 100 earthquakes recorded in Turkey. Tap any event to see its epicenter on the map along with depth and magnitude details. You can also view the Turkey seismic risk map.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Last 100 earthquakes fetched in real time</li><li class="feature-item"><span class="feature-dot"></span>Sort by magnitude (asc/desc) or chronologically</li><li class="feature-item"><span class="feature-dot"></span>Interactive Google Maps view with epicenter marker</li><li class="feature-item"><span class="feature-dot"></span>Depth, magnitude, and location details per event</li><li class="feature-item"><span class="feature-dot"></span>Turkey seismic risk zone map overlay</li>'
      },
      settowally: {
        subtitle: 'Ad-free high-resolution wallpaper app with dark &amp; light mode support and a dedicated tablet-optimized layout.',
        ovTitle: 'Beautiful wallpapers,<br><span class="gradient-text">zero ads</span>',
        ovDesc: 'Browse and download free high-resolution wallpapers without any ads or distractions. Save your favourites inside the app for offline access. Settowally fully supports dark and light mode, and features a tablet-optimized dual-pane layout for larger screens.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Browse &amp; download free HD wallpapers</li><li class="feature-item"><span class="feature-dot"></span>Save favourites locally with Room database</li><li class="feature-item"><span class="feature-dot"></span>Full dark &amp; light mode support</li><li class="feature-item"><span class="feature-dot"></span>Tablet-optimized dual-pane layout</li><li class="feature-item"><span class="feature-dot"></span>Fast image loading with Coil</li>'
      },
      food: {
        subtitle: 'Recipe discovery app with ingredients, step-by-step cooking instructions, and filters for dietary preferences.',
        ovTitle: 'Discover recipes<br><span class="gradient-text">for every diet</span>',
        ovDesc: 'Explore thousands of recipes across categories like Vegan, Vegetarian, Desserts, Main Dishes, and Drinks. Each recipe includes a full ingredient list, step-by-step cooking instructions, and nutritional info. Results are cached locally so they work offline too.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Multi-category browsing: Vegan, Vegetarian, Desserts, Drinks &amp; more</li><li class="feature-item"><span class="feature-dot"></span>Full ingredient lists with measurements</li><li class="feature-item"><span class="feature-dot"></span>Step-by-step cooking instructions</li><li class="feature-item"><span class="feature-dot"></span>Diet type filter (gluten-free, ketogenic, etc.)</li><li class="feature-item"><span class="feature-dot"></span>Offline caching with Room database</li>'
      },
      valo: {
        subtitle: 'Valorant companion app — browse agent guides, weapons, maps, and look up your personal match statistics.',
        ovTitle: 'Your Valorant<br><span class="gradient-text">companion app</span>',
        ovDesc: 'A comprehensive Valorant companion for Android. Browse every agent with their abilities and role, explore all weapons and maps, and review the current season. Enter your in-game username to pull a live summary of your rank, level, and recent match history.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Full agent roster with abilities &amp; role descriptions</li><li class="feature-item"><span class="feature-dot"></span>Weapon stats &amp; map guides</li><li class="feature-item"><span class="feature-dot"></span>Current &amp; past season overview</li><li class="feature-item"><span class="feature-dot"></span>Player stats lookup by in-game username</li><li class="feature-item"><span class="feature-dot"></span>In-game sticker sharing to WhatsApp &amp; social media</li>'
      },
      pwd: {
        subtitle: 'Generate strong, hard-to-crack passwords with customizable settings and save them locally with labels.',
        ovTitle: 'Strong passwords,<br><span class="gradient-text">effortlessly</span>',
        ovDesc: 'Generate cryptographically strong passwords with full control over length (8–16 characters) and character sets — uppercase, lowercase, numbers, and symbols. Copy to clipboard with one tap, or save with a custom label for later retrieval.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Customizable length (8–16 characters)</li><li class="feature-item"><span class="feature-dot"></span>Toggle uppercase, lowercase, numbers &amp; symbols</li><li class="feature-item"><span class="feature-dot"></span>One-tap clipboard copy</li><li class="feature-item"><span class="feature-dot"></span>Save passwords locally with custom labels</li><li class="feature-item"><span class="feature-dot"></span>Browse &amp; delete saved passwords</li>'
      },
      chronix: {
        subtitle: 'Countdown &amp; event timer for Android — track the days to the moments that matter, right from your home screen, with calendar import and reminders.',
        ov1Title: 'Count down to<br><span class="gradient-text">what matters</span>',
        ov1Desc: 'Chronix turns important dates — birthdays, deadlines, holidays, trips — into live countdowns you can glance at any time. Add events by hand or import them straight from your device calendar, pin them to your home screen as widgets, and get a reminder before they arrive. Everything is stored locally on your device.',
        ov1Feat: '<li class="feature-item"><span class="feature-dot"></span>Create countdowns for any date and watch the days tick down</li><li class="feature-item"><span class="feature-dot"></span>Import events directly from your device calendar (read-only)</li><li class="feature-item"><span class="feature-dot"></span>Home-screen widgets in multiple sizes and configurations</li><li class="feature-item"><span class="feature-dot"></span>Local reminder notifications, re-scheduled after reboot</li><li class="feature-item"><span class="feature-dot"></span>Material 3 design with light &amp; dark themes and 7 languages</li><li class="feature-item"><span class="feature-dot"></span>Fully offline — your data never leaves the device</li>',
        ov2Title: 'Built to<br><span class="gradient-text">scale cleanly</span>',
        ov2Desc: 'Chronix is engineered on Clean Architecture with a fully modularized, feature-based structure. Build logic is centralized through Gradle Convention Plugins and a Version Catalog, keeping every module consistent and duplication-free. Navigation uses the type-safe Navigation3 library through a custom NavigationManager.',
        ov2Feat: '<li class="feature-item"><span class="feature-dot"></span>Data / Domain / Presentation separation per feature module</li><li class="feature-item"><span class="feature-dot"></span>Hilt dependency injection with scoped components</li><li class="feature-item"><span class="feature-dot"></span>Type-safe Navigation3 with a custom NavigationManager</li><li class="feature-item"><span class="feature-dot"></span>Convention Plugins &amp; Version Catalog for build logic</li><li class="feature-item"><span class="feature-dot"></span>Unit tested with JUnit, MockK &amp; Truth</li>'
      },
      shine: {
        subtitle: 'Control the brightness and volume of external monitors from your Mac — with your keyboard\'s own brightness and volume keys, over DDC/CI.',
        ov1Title: 'Native keys,<br><span class="gradient-text">any monitor</span>',
        ov1Desc: 'Third-party monitors ignore the brightness and volume keys on a Mac keyboard. Shine fixes that. It lives in your menu bar and speaks the DDC/CI protocol to external displays, so your keyboard\'s own keys adjust the monitor under your pointer — with a macOS-style on-screen HUD, just like the built-in display.',
        ov1Feat: '<li class="feature-item"><span class="feature-dot"></span>Brightness control for external monitors via DDC/CI</li><li class="feature-item"><span class="feature-dot"></span>Volume &amp; mute control for monitor speakers</li><li class="feature-item"><span class="feature-dot"></span>Native keyboard keys — brightness follows the mouse pointer, volume follows the audio output</li><li class="feature-item"><span class="feature-dot"></span>Multi-monitor aware — displays matched to DDC ports by EDID</li><li class="feature-item"><span class="feature-dot"></span>macOS-style on-screen HUD when using the keys</li><li class="feature-item"><span class="feature-dot"></span>Lives in the menu bar; the icon can be hidden entirely</li>',
        ov2Title: 'Talking to displays<br><span class="gradient-text">the hard way</span>',
        ov2Desc: 'Shine communicates over the DDC/CI protocol (VESA MCCS): brightness is VCP code <code>0x10</code>, speaker volume <code>0x62</code>, and mute <code>0x8D</code>. On Apple Silicon the I2C channel is reached through the private <code>IOAVService</code> API, resolved at runtime. Media keys are intercepted with a <code>CGEventTap</code>, which is why the app needs Accessibility permission.',
        ov2Feat: '<li class="feature-item"><span class="feature-dot"></span>Apple Silicon, macOS 14 (Sonoma) or later</li><li class="feature-item"><span class="feature-dot"></span>Works over HDMI, DisplayPort &amp; USB-C</li><li class="feature-item"><span class="feature-dot"></span>Runtime-resolved <code>IOAVService</code> I2C access</li><li class="feature-item"><span class="feature-dot"></span>Free &amp; open source, MIT licensed</li>'
      }
    }
  },

  tr: {
    nav: {
      home: 'Ana Sayfa',
      about: 'Hakkımda',
      skills: 'Yetenekler',
      projects: 'Projeler',
      contact: 'İletişim'
    },
    common: {
      backToProjects: 'Projelere Dön',
      backToPortfolio: 'Portfolyoya Dön',
      viewDetails: 'Detayları Gör',
      viewLicense: 'Lisansı Gör',
      allProjects: 'Tüm Projeler',
      viewOnGithub: 'GitHub\'da Görüntüle',
      privacyPolicy: 'Gizlilik Politikası',
      overview: 'Genel Bakış',
      architecture: 'Mimari',
      howItWorks: 'Nasıl Çalışır',
      howToUse: 'Nasıl Kullanılır',
      techStack: 'Teknoloji Yığını',
      technologiesUsed: 'Kullanılan Teknolojiler'
    },
    hero: {
      title: 'Merhaba, Ben <span class="gradient-text">Adem Ayar</span>',
      desc: 'Kotlin ve Jetpack Compose ile temiz, performanslı mobil deneyimler geliştirmeye tutkulu Android Geliştirici.',
      viewProjects: 'Projeleri Gör',
      downloadCV: 'CV İndir',
      roles: ['Android Geliştirici', 'Kotlin Mühendisi', 'Mobil Uygulama Geliştiricisi', 'KMM Meraklısı']
    },
    about: {
      label: 'Hakkımda',
      title: 'İnsanların gerçekten keyif aldığı<br><span class="gradient-text">uygulamalar geliştiriyorum</span>',
      bio: "Elektrik &amp; Elektronik Mühendisliği mezunuyum (2022). Kotlin, Jetpack Compose ve MVVM, Clean Architecture gibi modern mimari kalıplarını kullanarak üretim kalitesinde Android uygulamaları geliştiriyorum.<br><br>Android'in yanı sıra, iş mantığını platformlar arasında paylaşmak için Kotlin Multiplatform'a ve SmartCodeSorter ile IntelliJ eklenti geliştirmeye büyük ilgi duyuyorum.",
      projectsBuilt: 'Tamamlanan Proje',
      yearsExp: 'Yıl Deneyim',
      platforms: 'Platform'
    },
    skills: {
      label: 'Nelerle Çalışıyorum',
      title: 'Teknoloji Yığını'
    },
    projects: {
      label: 'Neler Yaptım',
      title: 'Projeler',
      smartCodeSorter: 'Kotlin sınıf üyelerini yapı ve kurallara göre otomatik düzenleyen IntelliJ IDEA &amp; Android Studio eklentisi.',
      kmmNotes: 'Kotlin Multiplatform ile oluşturulmuş, iş mantığını her iki platformda paylaşan Android &amp; iOS için platformlar arası notlar uygulaması.',
      crypto: 'Canlı kripto para takip uygulaması — coin detayları, fiyat grafikleri ve telefon ile tablet için uyarlanabilir arayüz.',
      aquatick: 'Kişisel su tüketimi hedefini hesaplayan ve gün boyunca ilerlemeyi kaydeden günlük hidrasyon takip uygulaması.',
      calorieTracker: 'Günlük kalori hedefi belirleme, öğün takibi ve makro besin alımını izleme için beslenme uygulaması.',
      earthquakes: "Türkiye'deki son 100 depremi interaktif harita görünümü ve risk bölgesi görselleştirmesiyle gösteren gerçek zamanlı takip uygulaması.",
      settowally: 'Seçilmiş koleksiyonlar, arama ve tek dokunuşla ayarlama özelliğine sahip ücretsiz yüksek çözünürlüklü duvar kağıdı uygulaması.',
      foodRecipes: 'Malzemeler, pişirme adımları ve farklı diyet tercihlerine göre filtreler içeren tarif keşif uygulaması.',
      valorGuide: 'Valorant arkadaş uygulaması — oyun bilgilerini ve ajan rehberlerini incele, kişisel maç istatistiklerini görüntüle.',
      passwordGenerator: 'Özelleştirilebilir uzunluk, karakter setleri ve tek dokunuşla pano kopyalama özelliklerine sahip güvenli şifre oluşturucu.',
      chronix: 'Android için geri sayım ve etkinlik zamanlayıcı — ana ekran widget’ları, takvim içe aktarma ve hatırlatıcılarla; Jetpack Compose ile Temiz Mimari üzerine inşa edildi.',
      shine: 'Harici monitör parlaklığını ve sesini klavye tuşlarınızla DDC/CI üzerinden kontrol eden macOS menü çubuğu uygulaması; Swift ve SwiftUI ile geliştirildi.'
    },
    contact: {
      label: 'İletişime Geç',
      title: 'Birlikte <span class="gradient-text">Çalışalım</span>',
      desc: 'Aklınızda bir proje mi var ya da iş birliği yapmak mı istiyorsunuz? Sizden haber almaktan mutluluk duyarım.',
      email: 'E-posta',
      linkedin: 'LinkedIn',
      github: 'GitHub'
    },
    footer: '© 2026 Adem Ayar — Sıfırdan Tasarlandı &amp; Geliştirildi',

    detail: {
      scs: {
        subtitle: 'Kotlin sınıf üyelerini yapı ve kurallara göre otomatik düzenleyen IntelliJ IDEA &amp; Android Studio eklentisi — sıfır yapılandırmayla.',
        ovTitle: 'Temiz Kotlin kodu,<br><span class="gradient-text">otomatik olarak</span>',
        ovDesc: 'SmartCodeSorter, hiçbir manuel çaba gerektirmeden Kotlin sınıf yapınızı tutarlı tutar. Kurun, bir kısayola basın; sınıf üyeleriniz, yapıcı parametreleriniz ve iç içe sınıflarınız Kotlin kurallarına göre anında düzenlensin.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Sınıf üyelerini (alanlar, metotlar, iç içe sınıflar) tek tuşla sıralayın</li><li class="feature-item"><span class="feature-dot"></span>Daha temiz sınıf tanımları için yapıcı parametresi sıralaması</li><li class="feature-item"><span class="feature-dot"></span>Kaydederken Sırala — her dosya kaydında otomatik sıralama</li><li class="feature-item"><span class="feature-dot"></span>Kısayol: <strong>⌥⌘S</strong> (macOS) / <strong>Code → Smart Code Sorter</strong></li><li class="feature-item"><span class="feature-dot"></span>Sıfır yapılandırma — kutudan çıktığı gibi çalışır</li><li class="feature-item"><span class="feature-dot"></span>IntelliJ IDEA &amp; Android Studio ile uyumlu</li>',
        getStarted: 'Başlayın',
        card1Title: 'Manuel Sıralama',
        card1: '<li>IntelliJ IDEA veya Android Studio\'da herhangi bir Kotlin dosyası açın</li><li><strong style="color:var(--cyan)">⌥⌘S</strong> (macOS) tuşlarına basın</li><li>Ya da <strong>Code → Smart Code Sorter → Sort Kotlin Code</strong> yolunu izleyin</li>',
        card2Title: 'Kaydederken Sırala',
        card2: '<li><strong>Code → Smart Code Sorter → Sort on Save</strong> yolunu izleyin</li><li>Seçeneği açın</li><li>Kodunuz her kaydettiğinizde otomatik olarak sıralanır</li>'
      },
      kmm: {
        subtitle: 'Kotlin Multiplatform ile geliştirilmiş Android &amp; iOS için platformlar arası notlar uygulaması — iş mantığını her iki platformda paylaşır.',
        ovTitle: 'Tek kod tabanı,<br><span class="gradient-text">iki platform</span>',
        ovDesc: 'Kotlin Multiplatform ile geliştirilen, Android ve iOS\'ta yerel olarak çalışan hızlı ve temiz bir not uygulaması. Paylaşılan Kotlin modülü tüm iş mantığını ve veri kalıcılığını yönetirken her platform kendi yerel arayüzüne sahip olur.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Öncelik seviyeleriyle (yüksek, orta, düşük) not oluşturma ve düzenleme</li><li class="feature-item"><span class="feature-dot"></span>Tüm notlarda gerçek zamanlı arama</li><li class="feature-item"><span class="feature-dot"></span>KMM ile Android &amp; iOS için paylaşılan iş mantığı</li><li class="feature-item"><span class="feature-dot"></span>SQLDelight ile önce çevrimdışı veri kalıcılığı</li><li class="feature-item"><span class="feature-dot"></span>Dagger-Hilt ile bağımlılık enjeksiyonu (Android)</li>'
      },
      crypto: {
        subtitle: 'Coin detayları, fiyat grafikleri ve telefon ile tabletler için uyarlanabilir çok bölmeli düzene sahip canlı kripto para takip uygulaması.',
        ovTitle: 'Modern Android<br><span class="gradient-text">en iyi uygulamaları</span>',
        ovDesc: 'Android\'in en güncel en iyi uygulamalarını keşfetmek için bir referans projesi olarak geliştirildi. Crypto Tracker canlı coin verilerini çeker ve temiz bir liste-detay arayüzüyle gösterir. Tabletlerde, gerçek bir çok bölmeli deneyim için Adaptive Navigation kullanır.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Fiyat &amp; değişim verileriyle canlı kripto para listesi</li><li class="feature-item"><span class="feature-dot"></span>Her coin için fiyat grafikli detay görünümü</li><li class="feature-item"><span class="feature-dot"></span>Adaptive Navigation — ekran boyutuna göre tek/çift bölme</li><li class="feature-item"><span class="feature-dot"></span>Öngörülebilir durum yönetimi için MVI mimarisi</li><li class="feature-item"><span class="feature-dot"></span>Hafif bağımlılık enjeksiyonu için Koin</li>'
      },
      aquatick: {
        subtitle: 'İçecek türü grafikleri, hatırlatıcılar ve daha iyi su içme alışkanlıkları için sağlık makaleleri içeren günlük hidrasyon takip uygulaması.',
        ovTitle: 'Her gün<br><span class="gradient-text">susuz kalmayın</span>',
        ovDesc: 'Aquatick, günlük sıvı alımınızı içecek türüne göre ayırarak grafiklerle takip etmenize yardımcı olur. Kişisel günlük hedefinizi hesaplar, gün boyunca hatırlatıcılar gönderir ve kalıcı hidrasyon alışkanlıkları oluşturmanız için sağlık makaleleri sunar.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Farklı içecek türlerini grafik görselleştirmesiyle (Vico) ayrı ayrı takip edin</li><li class="feature-item"><span class="feature-dot"></span>Kişiselleştirilmiş günlük hidrasyon hedefi hesaplaması</li><li class="feature-item"><span class="feature-dot"></span>WorkManager ile arka plan hatırlatıcıları</li><li class="feature-item"><span class="feature-dot"></span>Retrofit ile çekilen seçilmiş sağlık makaleleri</li><li class="feature-item"><span class="feature-dot"></span>Şık bir arayüz deneyimi için Lottie animasyonları</li><li class="feature-item"><span class="feature-dot"></span>Firebase analitiği &amp; çok modüllü mimari</li>'
      },
      cal: {
        subtitle: 'Günlük kalori alımınızı ve makro besinleri — karbonhidrat, protein ve yağ — görsel dağılım grafikleriyle takip edin.',
        ovTitle: 'Vücudunuza ne<br><span class="gradient-text">aldığınızı bilin</span>',
        ovDesc: 'Günlük kalori hedefinizi belirleyin ve her öğünü eksiksiz bir makro besin dağılımıyla takip edin. Karbonhidrat, protein ve yağ ayrı görsel grafiklerde gösterilir; böylece beslenmenizin her gün hedeflerinizle nasıl örtüştüğünü tam olarak görebilirsiniz.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Kişiselleştirilmiş günlük kalori ve makro hedefleri belirleyin</li><li class="feature-item"><span class="feature-dot"></span>Öğünleri kaydedin; karbonhidrat, protein &amp; yağı ayrı ayrı takip edin</li><li class="feature-item"><span class="feature-dot"></span>Her makro besin için görsel grafik dağılımı</li><li class="feature-item"><span class="feature-dot"></span>Temiz MVVM + Clean Architecture yapısı</li><li class="feature-item"><span class="feature-dot"></span>Room veritabanı önbelleğiyle önce çevrimdışı</li>'
      },
      eq: {
        subtitle: 'İnteraktif harita görünümü, sıralama ve risk bölgesi görselleştirmesiyle Türkiye\'deki son 100 depremi gösteren gerçek zamanlı takip uygulaması.',
        ovTitle: 'Sismik hareketlilikten<br><span class="gradient-text">haberdar olun</span>',
        ovDesc: 'Türkiye\'de kaydedilen son 100 depremi gösteren gerçek zamanlı bir uygulama. Herhangi bir depreme dokunarak merkez üssünü haritada, derinlik ve büyüklük detaylarıyla birlikte görebilirsiniz. Ayrıca Türkiye deprem risk haritasını da görüntüleyebilirsiniz.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Son 100 deprem gerçek zamanlı olarak çekilir</li><li class="feature-item"><span class="feature-dot"></span>Büyüklüğe (artan/azalan) veya kronolojik olarak sıralama</li><li class="feature-item"><span class="feature-dot"></span>Merkez üssü işaretçili interaktif Google Maps görünümü</li><li class="feature-item"><span class="feature-dot"></span>Her deprem için derinlik, büyüklük ve konum detayları</li><li class="feature-item"><span class="feature-dot"></span>Türkiye deprem risk bölgesi harita katmanı</li>'
      },
      settowally: {
        subtitle: 'Karanlık &amp; aydınlık mod desteği ve tablete özel optimize edilmiş düzene sahip reklamsız yüksek çözünürlüklü duvar kağıdı uygulaması.',
        ovTitle: 'Güzel duvar kağıtları,<br><span class="gradient-text">sıfır reklam</span>',
        ovDesc: 'Reklam veya dikkat dağıtıcı olmadan ücretsiz yüksek çözünürlüklü duvar kağıtlarına göz atın ve indirin. Favorilerinizi çevrimdışı erişim için uygulama içinde kaydedin. Settowally, karanlık ve aydınlık modu tam olarak destekler ve büyük ekranlar için tablete optimize edilmiş çift bölmeli bir düzen sunar.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Ücretsiz HD duvar kağıtlarına göz atın &amp; indirin</li><li class="feature-item"><span class="feature-dot"></span>Favorileri Room veritabanıyla yerel olarak kaydedin</li><li class="feature-item"><span class="feature-dot"></span>Tam karanlık &amp; aydınlık mod desteği</li><li class="feature-item"><span class="feature-dot"></span>Tablete optimize edilmiş çift bölmeli düzen</li><li class="feature-item"><span class="feature-dot"></span>Coil ile hızlı görsel yükleme</li>'
      },
      food: {
        subtitle: 'Malzemeler, adım adım pişirme talimatları ve diyet tercihleri için filtreler içeren tarif keşif uygulaması.',
        ovTitle: 'Her diyet için<br><span class="gradient-text">tarifler keşfedin</span>',
        ovDesc: 'Vegan, Vejetaryen, Tatlılar, Ana Yemekler ve İçecekler gibi kategorilerdeki binlerce tarifi keşfedin. Her tarif; eksiksiz bir malzeme listesi, adım adım pişirme talimatları ve besin değeri bilgisi içerir. Sonuçlar yerel olarak önbelleğe alınır, böylece çevrimdışı da çalışır.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Çok kategorili gezinme: Vegan, Vejetaryen, Tatlılar, İçecekler &amp; daha fazlası</li><li class="feature-item"><span class="feature-dot"></span>Ölçüleriyle birlikte eksiksiz malzeme listeleri</li><li class="feature-item"><span class="feature-dot"></span>Adım adım pişirme talimatları</li><li class="feature-item"><span class="feature-dot"></span>Diyet türü filtresi (glutensiz, ketojenik vb.)</li><li class="feature-item"><span class="feature-dot"></span>Room veritabanı ile çevrimdışı önbellekleme</li>'
      },
      valo: {
        subtitle: 'Valorant arkadaş uygulaması — ajan rehberlerine, silahlara, haritalara göz atın ve kişisel maç istatistiklerinizi görüntüleyin.',
        ovTitle: 'Valorant<br><span class="gradient-text">arkadaş uygulamanız</span>',
        ovDesc: 'Android için kapsamlı bir Valorant arkadaş uygulaması. Her ajanı yetenekleri ve rolüyle inceleyin, tüm silahları ve haritaları keşfedin ve mevcut sezonu gözden geçirin. Rütbenizin, seviyenizin ve son maç geçmişinizin canlı bir özetini almak için oyun içi kullanıcı adınızı girin.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Yetenek &amp; rol açıklamalarıyla tam ajan kadrosu</li><li class="feature-item"><span class="feature-dot"></span>Silah istatistikleri &amp; harita rehberleri</li><li class="feature-item"><span class="feature-dot"></span>Mevcut &amp; geçmiş sezon özeti</li><li class="feature-item"><span class="feature-dot"></span>Oyun içi kullanıcı adına göre oyuncu istatistiği arama</li><li class="feature-item"><span class="feature-dot"></span>WhatsApp &amp; sosyal medyaya oyun içi çıkartma paylaşımı</li>'
      },
      pwd: {
        subtitle: 'Özelleştirilebilir ayarlarla güçlü, kırılması zor şifreler oluşturun ve bunları etiketlerle yerel olarak kaydedin.',
        ovTitle: 'Güçlü şifreler,<br><span class="gradient-text">zahmetsizce</span>',
        ovDesc: 'Uzunluk (8–16 karakter) ve karakter setleri — büyük harf, küçük harf, rakam ve sembol — üzerinde tam kontrolle kriptografik olarak güçlü şifreler oluşturun. Tek dokunuşla panoya kopyalayın veya sonradan erişmek için özel bir etiketle kaydedin.',
        ovFeat: '<li class="feature-item"><span class="feature-dot"></span>Özelleştirilebilir uzunluk (8–16 karakter)</li><li class="feature-item"><span class="feature-dot"></span>Büyük harf, küçük harf, rakam &amp; sembolleri açıp kapatın</li><li class="feature-item"><span class="feature-dot"></span>Tek dokunuşla panoya kopyalama</li><li class="feature-item"><span class="feature-dot"></span>Şifreleri özel etiketlerle yerel olarak kaydedin</li><li class="feature-item"><span class="feature-dot"></span>Kayıtlı şifreleri görüntüleyin &amp; silin</li>'
      },
      chronix: {
        subtitle: 'Android için geri sayım &amp; etkinlik zamanlayıcı — önemli anlara kalan günleri, takvim içe aktarma ve hatırlatıcılarla doğrudan ana ekranınızdan takip edin.',
        ov1Title: 'Önemli olana<br><span class="gradient-text">geri sayın</span>',
        ov1Desc: 'Chronix, önemli tarihleri — doğum günleri, son teslim tarihleri, tatiller, geziler — istediğiniz an göz atabileceğiniz canlı geri sayımlara dönüştürür. Etkinlikleri elle ekleyin ya da doğrudan cihaz takviminizden içe aktarın, widget olarak ana ekranınıza sabitleyin ve gelmeden önce hatırlatma alın. Her şey cihazınızda yerel olarak saklanır.',
        ov1Feat: '<li class="feature-item"><span class="feature-dot"></span>Herhangi bir tarih için geri sayım oluşturun ve günlerin azalışını izleyin</li><li class="feature-item"><span class="feature-dot"></span>Etkinlikleri doğrudan cihaz takviminizden içe aktarın (salt okunur)</li><li class="feature-item"><span class="feature-dot"></span>Birden çok boyut ve yapılandırmada ana ekran widget\'ları</li><li class="feature-item"><span class="feature-dot"></span>Yeniden başlatmanın ardından yeniden zamanlanan yerel hatırlatma bildirimleri</li><li class="feature-item"><span class="feature-dot"></span>Aydınlık &amp; karanlık temalar ve 7 dil ile Material 3 tasarımı</li><li class="feature-item"><span class="feature-dot"></span>Tamamen çevrimdışı — verileriniz cihazdan asla çıkmaz</li>',
        ov2Title: 'Temiz biçimde<br><span class="gradient-text">ölçeklenmek üzere kuruldu</span>',
        ov2Desc: 'Chronix, tamamen modüler, özellik tabanlı bir yapıyla Clean Architecture üzerine inşa edilmiştir. Derleme mantığı, Gradle Convention Plugins ve bir Version Catalog aracılığıyla merkezileştirilir; böylece her modül tutarlı ve tekrarsız kalır. Gezinme, özel bir NavigationManager üzerinden tür güvenli Navigation3 kütüphanesini kullanır.',
        ov2Feat: '<li class="feature-item"><span class="feature-dot"></span>Her özellik modülü için Data / Domain / Presentation ayrımı</li><li class="feature-item"><span class="feature-dot"></span>Kapsamlı bileşenlerle Hilt bağımlılık enjeksiyonu</li><li class="feature-item"><span class="feature-dot"></span>Özel bir NavigationManager ile tür güvenli Navigation3</li><li class="feature-item"><span class="feature-dot"></span>Derleme mantığı için Convention Plugins &amp; Version Catalog</li><li class="feature-item"><span class="feature-dot"></span>JUnit, MockK &amp; Truth ile birim testleri</li>'
      },
      shine: {
        subtitle: 'Harici monitörlerin parlaklığını ve sesini Mac\'inizden — klavyenizin kendi parlaklık ve ses tuşlarıyla, DDC/CI üzerinden — kontrol edin.',
        ov1Title: 'Yerel tuşlar,<br><span class="gradient-text">her monitör</span>',
        ov1Desc: 'Üçüncü taraf monitörler, Mac klavyesindeki parlaklık ve ses tuşlarını görmezden gelir. Shine bunu çözer. Menü çubuğunuzda yaşar ve harici ekranlarla DDC/CI protokolüyle konuşur; böylece klavyenizin kendi tuşları, imlecinizin altındaki monitörü — tıpkı dahili ekran gibi macOS tarzı bir ekran HUD\'uyla — ayarlar.',
        ov1Feat: '<li class="feature-item"><span class="feature-dot"></span>DDC/CI ile harici monitörler için parlaklık kontrolü</li><li class="feature-item"><span class="feature-dot"></span>Monitör hoparlörleri için ses &amp; sessize alma kontrolü</li><li class="feature-item"><span class="feature-dot"></span>Yerel klavye tuşları — parlaklık fare imlecini, ses ise ses çıkışını izler</li><li class="feature-item"><span class="feature-dot"></span>Çoklu monitör farkındalığı — ekranlar EDID ile DDC bağlantı noktalarına eşlenir</li><li class="feature-item"><span class="feature-dot"></span>Tuşları kullanırken macOS tarzı ekran HUD\'u</li><li class="feature-item"><span class="feature-dot"></span>Menü çubuğunda yaşar; simge tamamen gizlenebilir</li>',
        ov2Title: 'Ekranlarla<br><span class="gradient-text">zor yoldan konuşmak</span>',
        ov2Desc: 'Shine, DDC/CI protokolü (VESA MCCS) üzerinden iletişim kurar: parlaklık VCP kodu <code>0x10</code>, hoparlör sesi <code>0x62</code> ve sessize alma <code>0x8D</code>\'dir. Apple Silicon\'da I2C kanalına, çalışma zamanında çözümlenen özel <code>IOAVService</code> API\'si aracılığıyla erişilir. Medya tuşları bir <code>CGEventTap</code> ile yakalanır; bu yüzden uygulama Erişilebilirlik izni gerektirir.',
        ov2Feat: '<li class="feature-item"><span class="feature-dot"></span>Apple Silicon, macOS 14 (Sonoma) veya üzeri</li><li class="feature-item"><span class="feature-dot"></span>HDMI, DisplayPort &amp; USB-C üzerinden çalışır</li><li class="feature-item"><span class="feature-dot"></span>Çalışma zamanında çözümlenen <code>IOAVService</code> I2C erişimi</li><li class="feature-item"><span class="feature-dot"></span>Ücretsiz &amp; açık kaynak, MIT lisanslı</li>'
      }
    }
  }
};

let currentLang = localStorage.getItem('lang') || 'en';

function getNestedKey(obj, path) {
  return path.split('.').reduce((o, k) => (o ? o[k] : undefined), obj);
}

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = getNestedKey(t, el.getAttribute('data-i18n'));
    if (val !== undefined) el.textContent = val;
  });

  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const val = getNestedKey(t, el.getAttribute('data-i18n-html'));
    if (val !== undefined) el.innerHTML = val;
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  if (typeof window.updateTypewriterRoles === 'function' && t.hero && t.hero.roles) {
    window.updateTypewriterRoles(t.hero.roles);
  }

  localStorage.setItem('lang', lang);
  currentLang = lang;
}

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => applyTranslations(btn.getAttribute('data-lang')));
  });
});
