// src/app/components/about/about.ts
import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service'; // Ajuste le chemin si besoin

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class About {
  // Nouvelle syntaxe d'injection (Angular 14+)
  private dataService = inject(DataService);
  
  // On récupère les données
  info = this.dataService.aboutData;
}