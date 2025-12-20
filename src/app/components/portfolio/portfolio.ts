import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour *ngFor et [class.active]
import { DataService } from '../../services/data.service';
import { Modal } from '../ui/modal/modal';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    CommonModule,
    Modal
  ],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio {
  private dataService = inject(DataService);
  
  // Toutes les données brutes
  allProjects = this.dataService.projects;
  
  // Le filtre actuel ('all' par défaut)
  currentFilter = 'all';

  // --- Gestion Modale ---
  isModalOpen = false;
  selectedProject: any = null;

  // Fonction appelée quand on clique sur un bouton de filtre
  setFilter(category: string) {
    this.currentFilter = category;
  }

  // Getter qui renvoie la liste filtrée dynamiquement
  get filteredProjects() {
      if (this.currentFilter === 'all') {
        return this.allProjects;
      }
      return this.allProjects.filter(projet => projet.category === this.currentFilter);
    }
    
    // Ouvre la modale avec le projet cliqué
    openModal(project: any) {
        this.selectedProject = project;
        this.isModalOpen = true;
        // Optionnel : Bloquer le scroll du body quand la modale est ouverte
        document.body.style.overflow = 'hidden';
    }

    // Ferme la modale
    closeModal() {
        this.isModalOpen = false;
        this.selectedProject = null;
        // Réactiver le scroll
        document.body.style.overflow = 'auto';
    }
}