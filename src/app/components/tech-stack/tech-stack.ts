import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service'; // Vérifie bien le chemin vers ton service

@Component({
  selector: 'app-tech-stack',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tech-stack.html',
  styleUrls: ['./tech-stack.scss']
})
export class TechStack implements OnInit {
  // C'est cette variable que le HTML va lire
  techs: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // On va chercher les données dans le service au démarrage
    this.techs = this.dataService.skillsData.techs;
  }
}