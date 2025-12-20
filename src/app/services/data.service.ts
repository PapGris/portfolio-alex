// src/app/services/data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // --- 1. Données A PROPOS ---
  aboutData = {
    title: "A PROPOS",
    subtitle: "Qui suis-je ?",
    paragraph1: `Vous l'aurez compris, je suis en pleine phase d'apprentissage dans le milieu du <strong>développement Web</strong>, suite à une <strong>reconversion professionnelle</strong>. En effet, je suis de base diplômé en aménagement paysager. Un monde totalement différent me direz vous ! Et vous avez bien raison ! Cependant, mon attrait pour la nature et l'environnement n'a pour autant jamais perturbé la passion que j'ai depuis tout petit pour le monde du numérique, du dessin, et de la création.`,
    paragraph2: `Tout au long de ma vie, j'ai travaillé dans différents domaines (paysagisme, maraîchage, vente, restauration, déménagement, social, formation en milieu pénitentiaire...) Jusqu'a ce que je décide qu'apres toutes ces expériences, il était grand temps de suivre enfin ma voie, celle de l'informatique ! <strong>Et puisqu'il n'y a pas d'âge pour se relancer</strong>... Me voici apprenti développeur Web !!`,
    imgProfile: "assets/img/avatar.png"
  };

  // --- 2. Données SERVICES (Ajoute bien cette partie ici, fermée par des accolades séparées) ---
  servicesData = [
    {
      title: "Conception numérique",
      description: "Réalisation de site web/web mobile.",
      iconPath: "M480-80q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-155.5t86-127Q252-817 325-848.5T480-880q83 0 155.5 31.5t127 86q54.5 54.5 86 127T880-480q0 82-31.5 155t-86 127.5q-54.5 54.5-127 86T480-80Zm0-82q26-36 45-75t31-83H404q12 44 31 83t45 75Zm-104-16q-18-33-31.5-68.5T322-320H204q29 50 72.5 87t99.5 55Zm208 0q56-18 99.5-55t72.5-87H638q-9 38-22.5 73.5T584-178ZM170-400h136q-3-20-4.5-39.5T300-480q0-21 1.5-40.5T306-560H170q-5 20-7.5 39.5T160-480q0 21 2.5 40.5T170-400Zm216 0h188q3-20 4.5-39.5T580-480q0-21-1.5-40.5T574-560H386q-3 20-4.5 39.5T380-480q0 21 1.5 40.5T386-400Zm268 0h136q5-20 7.5-39.5T800-480q0-21-2.5-40.5T790-560H654q3 20 4.5 39.5T660-480q0 21-1.5 40.5T654-400Zm-16-240h118q-29-50-72.5-87T584-782q18 33 31.5 68.5T638-640Zm-234 0h152q-12-44-31-83t-45-75q-26 36-45 75t-31 83Zm-200 0h118q9-38 22.5-73.5T376-782q-56 18-99.5 55T204-640Z"
    },
    {
      title: "Conception graphique",
      description: "Réalisation de dessins et d'images pour des présentations, arrières plans ou fond d'ecrans.",
      iconPath: "m499-287 335-335-52-52-335 335 52 52Zm-261 87q-100-5-149-42T40-349q0-65 53.5-105.5T242-503q39-3 58.5-12.5T320-542q0-26-29.5-39T193-600l7-80q103 8 151.5 41.5T400-542q0 53-38.5 83T248-423q-64 5-96 23.5T120-349q0 35 28 50.5t94 18.5l-4 80Zm280 7L353-358l382-382q20-20 47.5-20t47.5 20l70 70q20 20 20 47.5T900-575L518-193Zm-159 33q-17 4-30-9t-9-30l33-159 165 165-159 33Z"
    },
    {
      title: "Conception logo",
      description: "Réalisation de logos pour des enseignes ou des favicons.",
      iconPath: "M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"
    },
    {
      title: "Conception video",
      description: "Montage de vidéos courtes ou long formats.",
      iconPath: "m160-800 80 160h120l-80-160h80l80 160h120l-80-160h80l80 160h120l-80-160h120q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800Zm0 240v320h640v-320H160Zm0 0v320-320Z"
    }
  ];

  // src/app/services/data.service.ts

  // ... (après servicesData)

  skillsData = {
    // Partie Gauche : Liste des domaines
    domains: [
      { title: "Développement", text: "Développement web/web mobile" },
      { title: "Graphisme", text: "Créations artistiques sur papier ou logiciel" },
      { title: "Jeux vidéo", text: "Connaissances du milieu du jeux vidéo et son actualité, ainsi que du rétro gaming" },
      { title: "Environnement", text: "Connaissances en paysagisme, horticulture et reconnaissance végétale" },
      { title: "Sport", text: "Pratique de différents sports tels que la boxe thai, le rugby, l'athlétisme" }
    ],
    // Partie Droite : Jauges de compétences
    techs: [
      { name: "HTML", percent: 80 },       // J'ai augmenté un peu tes stats ;)
      { name: "CSS / SCSS", percent: 70 },
      { name: "ANGULAR", percent: 40 },    // Tu es en train d'apprendre !
      { name: "JAVASCRIPT", percent: 50 },
      { name: "PHOTOSHOP", percent: 75 },
      { name: "FILMORA", percent: 90 }
    ]
  };

  // ... (après skillsData)

projects = [
  {
    id: 1,
    title: "Portfolio",
    category: "web", // sert pour le filtre
    categoryDisplay: "Portfolio", // sert pour l'affichage texte
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
    image: "https://picsum.photos/600/400?random=5", // Image aléatoire temporaire
    description: "Projet à venir",
    year: "2025",
    techs: ["Angular", "Node.js"],
    fullDescription: "Un futur projet incroyable arrive bientôt."
  }
];

}