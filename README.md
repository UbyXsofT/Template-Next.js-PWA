Template Next.js PWA con TypeScript, Tailwind CSS e shadcn/ui Benvenuto! Questo repository è un template pronto all'uso per creare applicazioni web moderne utilizzando Next.js 13, TypeScript, Tailwind CSS, shadcn/ui e lucide-react. È progettato per aiutarti a iniziare rapidamente lo sviluppo di Progressive Web Apps (PWA) performanti e scalabili.

📋 Indice Caratteristiche Prerequisiti Come Iniziare Struttura del Progetto Configurazione PWA Gestione del Tema Navigazione Contribuire Licenza Ringraziamenti 🚀 Caratteristiche Next.js 13 con App Router: Utilizza la nuova directory app/ per un routing più modulare e flessibile. TypeScript: Tipizzazione statica per un codice più robusto e manutenibile. Tailwind CSS: Framework CSS per uno sviluppo rapido e uno stile personalizzabile. shadcn/ui: Collezione di componenti UI predefiniti e altamente personalizzabili. lucide-react: Set di icone semplici e belle per le tue interfacce. PWA Ready: Configurazione per trasformare l'applicazione in una Progressive Web App, inclusi manifesti e service worker. Tema Scuro/Chiaro: Gestione del tema con Context API e switch per cambiare tema. Barra di Navigazione Responsiva: Menu con sottomenu per desktop e mobile. 📚 Prerequisiti Node.js versione 14 o superiore npm o yarn 🏁 Come Iniziare

1. Usa Questo Template Clicca sul pulsante "Use this template" nella pagina del repository per creare un nuovo repository basato su questo template.
2. Clona il Repository bash Copia codice git clone https://github.com/tuo-username/tuo-repository.git cd tuo-repository
3. Installa le Dipendenze Con npm:

bash Copia codice npm install Con yarn:

bash Copia codice yarn install 4. Avvia il Server di Sviluppo Con npm:

bash Copia codice npm run dev Con yarn:

bash Copia codice yarn dev Visita http://localhost:3000 per vedere l'applicazione in esecuzione.

🗂 Struttura del Progetto La struttura principale del progetto è la seguente:

lua Copia codice . ├── app │ ├── fonts │ ├── info │ ├── guide │ ├── dashboard │ │ └── stats │ ├── favicon.ico │ ├── globals.css │ ├── layout.tsx │ └── page.tsx ├── components │ ├── ui │ ├── custom │ ├── Guide.tsx │ ├── icons.tsx │ ├── main-nav.tsx │ └── page-header.tsx ├── context ├── lib ├── public │ ├── assets │ │ ├── icons │ │ └── screenshots │ ├── browserconfig.xml │ ├── manifest.json │ ├── sw.js │ └── workbox-\*.js ├── hooks ├── .env.local ├── .env.production ├── next.config.mjs ├── package.json ├── postcss.config.js ├── tailwind.config.ts └── tsconfig.json 📱 Configurazione PWA Questo template include una configurazione di base per trasformare la tua applicazione in una PWA. Ecco come procedere:

1. Aggiorna il Manifesto Modifica public/manifest.json per riflettere le informazioni della tua applicazione, come name, short_name, start_url, background_color, theme_color, ecc.

2. Personalizza le Icone Sostituisci le icone nella cartella public/assets/icons con quelle della tua applicazione. Assicurati di mantenere le dimensioni e i nomi dei file per garantire la compatibilità.

3. Configura il Service Worker Il file public/sw.js è il service worker che gestisce la cache e le funzionalità offline. Puoi personalizzarlo secondo le tue esigenze.

4. Verifica la PWA Utilizza strumenti come Lighthouse (integrato negli strumenti di sviluppo di Chrome) per verificare che la tua applicazione soddisfi i criteri di una PWA.

🎨 Gestione del Tema Il progetto utilizza la Context API di React per gestire il tema scuro/chiaro. Il componente ThemeSwitch permette agli utenti di cambiare tema facilmente.

Percorso del Contesto Tema: context/ThemeContext.tsx Wrapper del Provider: context/ThemeProviderWrapper.tsx Componente Switch Tema: components/custom/ThemeSwitch.tsx 🧭 Navigazione La barra di navigazione è responsiva e include un sottomenu per "Dashboard" che si comporta in modo diverso su desktop e mobile:

Desktop: Il sottomenu si apre al passaggio del mouse.

Mobile: Il sottomenu si apre al clic.

Componente Barra di Navigazione: components/main-nav.tsx

Gestione dei Menu: Puoi personalizzare le voci del menu modificando l'array mainListMenu nel componente main-nav.tsx.

🤝 Contribuire Contributi, issue e richieste pull sono benvenuti! Se desideri contribuire:

Forka il progetto. Crea un branch per la tua feature (git checkout -b feature/AmazingFeature). Commetti le tue modifiche (git commit -m 'Add some AmazingFeature'). Push sul branch (git push origin feature/AmazingFeature). Apri una Pull Request. Per grandi cambiamenti, ti preghiamo di aprire prima un'issue per discutere cosa vorresti modificare.

📄 Licenza Questo progetto è sotto licenza MIT. Consulta il file LICENSE per i dettagli.

💖 Ringraziamenti Next.js Tailwind CSS shadcn/ui lucide-react Voi per aver utilizzato questo template! Se hai domande o suggerimenti, non esitare a contattarmi. Buon coding! 🚀
