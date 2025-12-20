// src/app/models/data.models.ts

export interface Skill {
  name: string;
  level: number; // Pourcentage
  category: 'dev' | 'design' | 'other';
}

export interface Project {
  id: number;
  title: string;
  category: 'web' | 'design' | 'life';
  imageUrl: string;      // Image par défaut (light)
  imageUrlDark?: string; // Image optionnelle pour le mode sombre
  description: string;
  year: number;
  technologies: string[];
}

export interface ServiceItem {
  title: string;
  description: string;
  iconSvg: string; // On stockera le path SVG ici
}