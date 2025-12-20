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

  // --- 1. Données A PROPOS ---
  aboutData = {
    title: "A PROPOS",
    subtitle: "Développeur Full Stack",
    paragraph1: `Passionné par la création d'interfaces intuitives et performantes, je suis un <strong>développeur Full Stack</strong> avec une forte spécialisation <strong>Front-End</strong>. Après une première carrière dans l'aménagement paysager, j'ai converti ma créativité et ma rigueur dans le monde du numérique. Aujourd'hui, je transforme des concepts complexes en expériences web fluides.`,
    paragraph2: `Mon parcours atypique est ma force : il m'a apporté une grande adaptabilité et une vision globale des projets. Spécialisé dans les écosystèmes modernes comme <strong>Angular</strong> et <strong>React</strong>, je mets un point d'honneur à coder des interfaces pixel-perfect tout en garantissant une logique back-end robuste.`,
    imgProfile: "assets/img/person.jpg"
  };

  // --- 2. Données SERVICES ---
  servicesData = [
    {
      title: "Développement Front-End",
      description: "Conception d'applications single-page (SPA) modernes et réactives avec Angular et React.",
      iconPath: "M160-160v-640h640v640H160Zm80-80h480v-480H240v480Z" // Icone écran/code
    },
    {
      title: "UI/UX Design & Intégration",
      description: "Maquettage sur Figma et intégration précise avec Tailwind CSS et SCSS pour un rendu moderne.",
      iconPath: "M480-80 310-250l57-57 73 73v-506l-73 73-57-57 170-170 170 170-57 57-73-73v506l73-73 57 57L480-80Z" // Icone design/ajustement
    },
    {
      title: "Solutions Full Stack",
      description: "Architecture de solutions complètes intégrant des logiques métiers complexes et la gestion de données.",
      iconPath: "M280-120v-80h400v80H280Zm0-160v-480h400v480H280Z" // Icone layers/stack
    }
  ];

  // --- 3. Données SKILLS ---
  skillsData = {
    domains: [
      { title: "Développement Front", text: "Expertise en frameworks modernes (Angular, React) et gestion d'état." },
      { title: "Design System", text: "Création de composants réutilisables et stylisation avancée avec Tailwind et SCSS." },
      { title: "Architecture Web", text: "Conception de structures Full Stack propres, maintenables et scalables." }
    ],
    techs: [
      { name: "Angular", percent: 90 },
      { name: "React", percent: 85 },
      { name: "TypeScript", percent: 90 },
      { name: "Tailwind / SCSS", percent: 95 },
      { name: "Figma", percent: 80 },
      { name: "Node.js", percent: 75 }
    ]
  };

  // --- 4. PROJETS (Exemples adaptés) ---
  projects = [
    {
      id: 1,
      title: "Portfolio",
      category: "web", 
      categoryDisplay: "Portfolio", 
      image: "assets/img/avatarportfolio.png",
      description: "Ma première réalisation !",
      year: "2024",
      techs: ["HTML", "CSS", "JavaScript"],
      fullDescription: "Vous l'aurez deviné, le Portfolio sur lequel vous naviguez, c'est bien ma première réalisation Web. Réalisé lors de ma formation Num&Boost."
    },
    {
      id: 2,
      title: "Dessins",
      category: "design",
      categoryDisplay: "Dessins sur supports papier ou numérique",
      image: "assets/img/dessin4.png",
      description: "Dessins sur supports papier ou numérique",
      year: "2005 - 2024",
      techs: ["Papier", "Paint3D", "GIMP", "Autodesk SketchBook"],
      fullDescription: "Voici quelques petits exemples de dessins que j'ai réalisés au fil des années. Certains sont totalement sur papiers, d'autres sont parfois légèrement modifiés sur logiciels."
    },
    {
      id: 3,
      title: "Parcours Pro",
      category: "life",
      categoryDisplay: "CV",
      image: "assets/img/monparcours.png",
      description: "Mon Parcours",
      year: "1993 - 2024",
      techs: ["Vie", "Expérience", "Travail"],
      fullDescription: "Afin de connaître mon parcours scolaire et professionnel, je mets ici mon CV à votre disposition."
    },
    {
      id: 4,
      title: "Logos et enseignes",
      category: "design",
      categoryDisplay: "Créations pour des enseignes ou autres",
      image: "assets/img/logo1.png",
      description: "Logos et enseignes",
      year: "2020 - 2024",
      techs: ["GIMP", "Paint3D", "Autodesk SketchBook"],
      fullDescription: "Voici quelques réalisations personnelles de dessins pouvant servir d'enseignes ou de logos pour des logiciels, marques ou entreprises."
    },
    {
      id: 5,
      title: "Futur projet",
      category: "web",
      categoryDisplay: "En attente...",
      image: "https://picsum.photos/600/400?random=5", 
      description: "Projet à venir",
      year: "2025",
      techs: ["Angular", "Node.js"],
      fullDescription: "Un futur projet incroyable arrive bientôt."
    }
  ];
}