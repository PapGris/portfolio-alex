import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Pour *ngFor
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrls: ['./skills.scss']
})
export class Skills {
  private dataService = inject(DataService);
  
  // On récupère l'objet complet (domains + techs)
  data = this.dataService.skillsData;
}