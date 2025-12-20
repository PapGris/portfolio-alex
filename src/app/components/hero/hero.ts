// src/app/components/hero/hero.ts
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service'; // Vérifie bien le chemin

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  private dataService = inject(DataService);
  
  // On lie les propriétés du composant aux données du service
  hero = this.dataService.heroData;
}