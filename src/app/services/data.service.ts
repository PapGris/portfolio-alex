import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  heroData = {
    title: "Alexandre Blaizot",
    subtitle: "Développeur Full Stack | Spécialisé Front-End",
    description: "Je conçois et développe des interfaces web performantes et scalables. Mon approche combine la rigueur technique du Full Stack et une sensibilité particulière pour l'expérience utilisateur.",
    avatarUrl: "assets/img/avatar.png"
  };

  aboutData = {
    title: "A PROPOS",
    subtitle: "Développeur Full Stack",
    paragraph1: `Passionné par la création d'interfaces intuitives et performantes, je suis un <strong>développeur Full Stack</strong> avec une forte spécialisation <strong>Front-End</strong>. Après une première carrière dans l'aménagement paysager, j'ai converti ma créativité et ma rigueur dans le monde du numérique. Aujourd'hui, je transforme des concepts complexes en expériences web fluides.`,
    paragraph2: `Mon parcours atypique est ma force : il m'a apporté une grande adaptabilité et une vision globale des projets. Spécialisé dans les écosystèmes modernes comme <strong>Angular</strong> et <strong>React</strong>, je mets un point d'honneur à coder des interfaces pixel-perfect tout en garantissant une logique back-end robuste.`,
    imgProfile: "assets/img/person.jpg"
  };

  servicesData = [
    {
      title: "Développement Front-End",
      description: "Conception d'applications single-page (SPA) modernes et réactives avec Angular et React.",
      iconPath: "M160-160v-640h640v640H160Zm80-80h480v-480H240v480Z"
    },
    {
      title: "UI/UX Design & Intégration",
      description: "Maquettage sur Figma et intégration précise avec Tailwind CSS et SCSS pour un rendu moderne.",
      iconPath: "M480-80 310-250l57-57 73 73v-506l-73 73-57-57 170-170 170 170-57 57-73-73v506l73-73 57 57L480-80Z"
    },
    {
      title: "Solutions Full Stack",
      description: "Architecture de solutions complètes intégrant des logiques métiers complexes et la gestion de données.",
      iconPath: "M280-120v-80h400v80H280Zm0-160v-480h400v480H280Z"
    }
  ];

  skillsData = {
    domains: [
      { title: "Développement Front", text: "Expertise en frameworks modernes (Angular, React) et interfaces réactives." },
      { title: "Design System", text: "Maquettage Figma et intégration précise avec Tailwind et SCSS." },
      { title: "Architecture Web", text: "Conception de structures Full Stack propres et maintenables." },
      { title: "Expériences Diverses", text: "Adaptabilité héritée d'un parcours riche et varié." }
    ],
    techs: [
      { 
        name: "Angular", 
        viewBox: "0 0 24 24", 
        iconPath: "M12,2.5l8.84,3.15L19.5,17.35,12,21.5,4.5,17.35,3.16,5.65,12,2.5m0,2L5,7l1.08,9.22L12,19.5l5.92-3.28L19,7,12,4.5m0,1.22L16.58,16H14.87l-.93-2.28H10L9.12,16H7.41L12,5.72m1.34,6.58L12,9.07,10.66,12.3Z" 
      },
      { 
        name: "React", 
        viewBox: "0 0 24 24", 
        iconPath: "M12,10.11A1.87,1.87,0,1,1,10.13,12,1.88,1.88,0,0,1,12,10.11M7.37,20c.63.38,2-.2,3.6-1.7a24.22,24.22,0,0,1-1.51-1.9A22.7,22.7,0,0,1,7.06,16c-.51,2.14-.32,3.61.31,4m.71-5.74-.29-.51a7.91,7.91,0,0,0-.29.86c.27.06.57.11.88.16l-.3-.51m6.54-.76.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17,9,12.6,9,12,9s-1.17,0-1.71,0c-.29.47-.61.94-.91,1.47L8.57,12l.81,1.5c.3.53.62,1,.91,1.47.54,0,1.11,0,1.71,0s1.17,0,1.71,0c.29-.47.61-.94.91-1.47M12,6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0,10.44c.19-.22.39-.45.59-.72H11.41c.2.27.4.5.59.72M16.62,4c-.62-.38-2,.2-3.59,1.7a24.22,24.22,0,0,1,1.51,1.9,22.7,22.7,0,0,1,2.4.36c.51-2.14.32-3.61-.32-4m-.7,5.74.29.51a7.91,7.91,0,0,0,.29-.86c-.27-.06-.57-.11-.88-.16l.3.51m1.45-7c1.47.84,1.63,3.05,1,5.63,2.54.75,4.37,2,4.37,3.68s-1.83,2.93-4.37,3.68c.62,2.58.46,4.79-1,5.63s-3.45-.12-5.37-1.95c-1.92,1.83-3.91,2.79-5.38,1.95s-1.62-3-1-5.63c-2.54-.75-4.37-2-4.37-3.68S3.08,9.07,5.62,8.32c-.62-2.58-.46-4.79,1-5.63s3.46.12,5.38,1.95c1.92-1.83,3.91-2.79,5.37-1.95M17.08,12A22.51,22.51,0,0,1,18,14.26c2.1-.63,3.28-1.53,3.28-2.26S20.07,10.37,18,9.74A22.51,22.51,0,0,1,17.08,12M6.92,12A22.51,22.51,0,0,1,6,9.74c-2.1.63-3.28,1.53-3.28,2.26S3.93,13.63,6,14.26A22.51,22.51,0,0,1,6.92,12m9,2.26-.3.51c.31,0,.61-.1.88-.16a7.91,7.91,0,0,0-.29-.86l-.29.51M13,18.3c1.59,1.5,3,2.08,3.59,1.7s.83-1.82.32-4a22.7,22.7,0,0,1-2.4.36A24.22,24.22,0,0,1,13,18.3M8.08,9.74l.3-.51c-.31,0-.61.1-.88.16a7.91,7.91,0,0,0,.29.86l.29-.51M11,5.7C9.38,4.2,8,3.62,7.37,4s-.82,1.82-.31,4a22.7,22.7,0,0,1,2.4-.36A24.22,24.22,0,0,1,11,5.7Z" 
      },
      { 
        name: "TypeScript", 
        viewBox: "0 0 16 16", 
        iconPath: "M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" 
      },
      { 
        name: "Tailwind", 
        viewBox: "0 0 16 16", 
        iconPath: "M7.5 3C5.63333 3 4.46667 4 4 5.99999C4.7 4.99999 5.51667 4.625 6.45 4.87499C6.98252 5.01763 7.36314 5.43155 7.78443 5.88974C8.47074 6.63613 9.26506 7.49999 11 7.49999C12.8667 7.49999 14.0333 6.49999 14.5 4.5C13.8 5.49999 12.9833 5.87499 12.05 5.62499C11.5175 5.48235 11.1369 5.06844 10.7156 4.61025C10.0293 3.86386 9.23494 3 7.5 3ZM4 7.49999C2.13333 7.49999 0.966667 8.49998 0.5 10.5C1.2 9.49998 2.01667 9.12498 2.95 9.37498C3.48252 9.51762 3.86314 9.93154 4.28443 10.3897C4.97074 11.1361 5.76506 12 7.5 12C9.36667 12 10.5333 11 11 8.99998C10.3 9.99998 9.48333 10.375 8.55 10.125C8.01748 9.98234 7.63686 9.56843 7.21557 9.11023C6.52926 8.36385 5.73494 7.49999 4 7.49999Z" 
      },
      { 
        name: "SCSS", 
        viewBox: "0 0 24 24", 
        iconPath: "M12,2A10,10,0,1,1,2,12,10,10,0,0,1,12,2M10,15.33a2.55,2.55,0,0,1,0,1.5c0,.05,0,.1-.06.17s0,.07-.07.12a2.5,2.5,0,0,1-.46.67c-.58.64-1.41.88-1.74.68s-.17-1.12.49-1.83a6.91,6.91,0,0,1,1.76-1.26h0l.08-.05m8.27-9c-.45-1.78-3.4-2.36-6.18-1.37A14,14,0,0,0,7.34,7.63c-1.53,1.44-1.78,2.69-1.68,3.21.34,1.84,2.88,3.05,3.92,3.94h0c-.3.15-2.54,1.28-3.08,2.44A1.62,1.62,0,0,0,7,19.45a3.16,3.16,0,0,0,3.41-1.38A3.44,3.44,0,0,0,10.75,15a4.34,4.34,0,0,1,1.53-.08c1.76.21,2.1,1.3,2,1.76a1.16,1.16,0,0,1-.55.79c-.12.07-.16.1-.15.16s.07.08.17.06a1.36,1.36,0,0,0,1-1.22c0-1.08-1-2.28-2.81-2.25a4.84,4.84,0,0,0-1.56.22l-.08-.09c-1.13-1.2-3.21-2-3.12-3.67,0-.59.23-2.13,4-4,3.08-1.54,5.55-1.12,6-.17.61,1.33-1.32,3.82-4.52,4.18a2.44,2.44,0,0,1-2-.51c-.17-.17-.19-.2-.25-.17s0,.23,0,.33a2,2,0,0,0,1.15.91,6.18,6.18,0,0,0,3.76-.37C17.2,10.12,18.72,8,18.27,6.28Z" 
      },
      { 
        name: "Node.js", 
        viewBox: "0 0 512 512", 
        iconPath: "M482.585,147.869v216.113c0,14.025-7.546,27.084-19.672,34.143L275.665,506.241c-5.989,3.474-12.782,5.259-19.719,5.259c-6.838,0-13.649-1.785-19.639-5.259l-62.521-36.99c-9.326-5.207-4.775-7.059-1.692-8.128c12.454-4.322,14.973-5.318,28.268-12.863c1.387-0.793,3.216-0.483,4.647,0.343l48.031,28.519c1.741,0.981,4.2,0.981,5.801,0l187.263-108.086c1.744-0.996,2.862-2.983,2.862-5.053V147.869c0-2.117-1.118-4.094-2.906-5.163L258.874,34.716c-1.726-1.01-4.03-1.01-5.768,0L65.962,142.736c-1.818,1.04-2.965,3.079-2.965,5.133v216.113c0,2.069,1.146,4.009,2.954,4.99l51.299,29.654c27.829,13.903,44.875-2.485,44.875-18.956V166.309c0-3.017,2.423-5.396,5.439-5.396h23.747c2.969,0,5.429,2.378,5.429,5.396v213.362c0,37.146-20.236,58.454-55.452,58.454c-10.816,0-19.347,0-43.138-11.713l-49.098-28.287c-12.133-6.995-19.638-20.117-19.638-34.143V147.869c0-14.043,7.505-27.15,19.638-34.135L236.308,5.526c11.85-6.701,27.608-6.701,39.357,0l187.248,108.208C475.039,120.748,482.585,133.826,482.585,147.869z M321.171,343.367c-55.88,0-68.175-14.048-72.294-41.836c-0.477-2.966-3.018-5.175-6.063-5.175h-27.306c-3.382,0-6.096,2.703-6.096,6.104c0,35.56,19.354,77.971,111.759,77.971c66.906,0,105.269-26.339,105.269-72.343c0-45.623-30.827-57.76-95.709-66.35c-65.579-8.678-72.243-13.147-72.243-28.508c0-12.661,5.643-29.581,54.216-29.581c43.374,0,59.365,9.349,65.94,38.576c0.579,2.755,3.083,4.765,5.923,4.765h27.409c1.7,0,3.315-0.73,4.47-1.943c1.158-1.28,1.773-2.947,1.611-4.695c-4.241-50.377-37.713-73.844-105.354-73.844c-60.209,0-96.118,25.414-96.118,68.002c0,46.217,35.729,59,93.5,64.702c69.138,6.782,74.504,16.883,74.504,30.488C384.589,333.299,365.655,343.367,321.171,343.367z" 
      },
      { 
        name: "Figma", 
        viewBox: "0 0 24 24", 
        iconPath: "M12 3H9C7.34315 3 6 4.34315 6 6C6 7.65685 7.34315 9 9 9M12 3V9M12 3H15C16.6569 3 18 4.34315 18 6C18 7.65685 16.6569 9 15 9M12 9H9M12 9H15M12 9V15M9 9C7.34315 9 6 10.3431 6 12C6 13.6569 7.34315 15 9 15M15 9C16.6569 9 18 10.3431 18 12C18 13.6569 16.6569 15 15 15C13.3431 15 12 13.6569 12 12C12 10.3431 13.3431 9 15 9ZM12 15H9M12 15V18C12 19.6569 10.6569 21 9 21C7.34315 21 6 19.6569 6 18C6 16.3431 7.34315 15 9 15" 
      },
      { 
        name: "JavaScript", 
        viewBox: "0 0 16 16", 
        iconPath: "M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z" 
      },
      { 
        name: "HTML5", 
        viewBox: "5 7479 18 20", 
        iconPath: "M19.4350881,7485 L19.4279481,7485 L10.8119794,7485 L11.0180201,7487 L19.2300674,7487 C19.109707,7488.752 18.7455658,7492.464 18.6119454,7494.153 L13.99949,7495.451 L13.99949,7495.455 L13.98929,7495.46 L9.37377458,7493.836 L9.05757353,7490 L11.3199411,7490 L11.4800816,7492.063 L13.99337,7493 L13.99949,7493 L16.5086984,7492.1 L16.7667592,7489 L8.95659319,7489 C8.91885306,7488.599 8.43333144,7483.392 8.34867116,7483 L19.6370488,7483 C19.5738086,7483.66 19.5095484,7484.338 19.4350881,7485 L19.4350881,7485 Z M5,7479 L6.63812546,7497.148 L13.98929,7499 L21.3598345,7497.111 L23,7479 L5,7479 Z" 
      }
    ]
  };

  projects = [
      {
        id: 1,
        title: "Portfolio Professionnel",
        category: "web",
        categoryDisplay: "Développement Web",
        image: "assets/img/portfolio.png", // Une capture de ton site actuel
        description: "Design & Développement",
        year: "2025",
        techs: ["Angular 18", "SCSS", "TypeScript", "UI/UX"],
        fullDescription: "Conception et réalisation de mon portfolio personnel. L'objectif était de créer une interface immersive typée 'système d'exploitation' tout en garantissant une navigation fluide et responsive.",
        url: "https://papgris.github.io/portfolio-alex/" // Ton lien de déploiement
      },
      {
        id: 2,
        title: "Les Mondes de Papillon Gris",
        category: "web", 
        categoryDisplay: "Site de JDR", 
        image: "assets/img/jdr.png", // Pense à ajouter tes captures d'écran
        description: "Univers artistique personnel",
        year: "2024",
        techs: ["HTML", "SCSS", "JavaScript"],
        url: "https://www.les-mondes-de-papillon-gris.com/",
        fullDescription: "Plateforme complète présentant mon univers artistique. Un projet axé sur l'immersion visuelle et l'identité de marque."
      },
      {
        id: 3,
        title: "Click & Chill",
        category: "web",
        categoryDisplay: "Application Web",
        image: "assets/img/candc.png",
        description: "Projet collaboratif de divertissement",
        year: "2024",
        techs: ["GitHub Pages", "JavaScript", "API"],
        url: "https://evalutation-ablaizot-zbeouche.github.io/Click-Chill/",
        fullDescription: "Une application interactive permettant de trouver son film, sa serie ou son anim en un clic. Réalisée dans le cadre d'une évaluation technique."
      },
      {
        id: 4,
        title: "Carpool",
        category: "web",
        categoryDisplay: "Développement Web",
        image: "assets/img/carpool.png",
        description: "Projet de formation intensive",
        year: "2024",
        techs: ["PHP", "SQL", "Tailwind"],
        url: "https://dw2024-alexandre.stagiairesmns.fr/",
        fullDescription: "Développement d'un site web de covoiturage avec gestion de base de données et logique métier backend. Dans le cadre de l'optention de mon titre professionnel developpemeur web."
      },
      {
        id: 5,
        title: "Concept Logo Design",
        category: "design",
        categoryDisplay: "Identité Visuelle",
        image: "assets/img/logo1.png", // Image principale pour la carte de la grille
        images: [
          "assets/img/logo1.png",
          "assets/img/logo 2.png",
          "assets/img/logo3.png",
        ],
        description: "Création graphique",
        year: "2024",
        techs: ["Support Papier","GIMP", "Figma", "Autodesk Sketchbook"],
        fullDescription: "Recherches graphiques et création de logos pour diverses enseignes imaginaires ou réelles. Ce projet regroupe mes travaux sur l'équilibre des formes et le choix des palettes chromatiques."
      },
      {
      id: 6,
      title: "Réalisations Figma",
      category: "design",
      categoryDisplay: "Design Numérique",
      image: "assets/img/afficheCine.png", // Ta miniature principale
      images: [
        "assets/img/afficheCine.png",
      ],
      description: "Affiches et Publicités",
      year: "2024 - 2025",
      techs: ["Figma", "UI/UX", "Compo Graphique"],
      fullDescription: "Conception de supports de communication variés. De l'affiche publicitaire à la maquette d'interface utilisateur, j'utilise Figma pour donner vie à des concepts visuels modernes."
    },
    {
      id: 7,
      title: "Dessins Traditionnels",
      category: "design",
      categoryDisplay: "Art Papier",
      image: "assets/img/dessin4.png",
      images: [
        "assets/img/dessin1.png",
        "assets/img/dessin2.png",
        "assets/img/dessin3.png",
        "assets/img/dessin4.png",
        "assets/img/dessin5.png",
        "assets/img/dessin6.png"
      ],
      description: "Crayonnés et Encres",
      year: "2005 - 2024",
      techs: ["Papier", "Crayon", "Encre", "Feutres"],
      fullDescription: "Une sélection de mes dessins réalisés sur support physique. Cette pratique me permet de cultiver mon sens du détail et de la composition avant de passer au numérique."
    }
      // Tu pourras en ajouter d'autres ici pour la partie Design !
  ];
}