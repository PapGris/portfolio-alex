import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Modal } from '../ui/modal/modal';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, Modal],
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.scss']
})
export class Portfolio {
  private dataService = inject(DataService);
  
  allProjects = this.dataService.projects;
  
  // On initialise sur 'web' puisque 'all' n'existe plus
  currentFilter = 'web';

  isModalOpen = false;
  selectedProject: any = null;

  setFilter(category: string) {
    this.currentFilter = category;
  }

  // Le getter simplifie la logique puisqu'on filtre toujours par catégorie
  get filteredProjects() {
    return this.allProjects.filter(projet => projet.category === this.currentFilter);
  }
    
  openModal(project: any) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    document.body.style.overflow = 'auto';
  }
}