import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important pour *ngFor
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.html',
  styleUrls: ['./services.scss']
})
export class Services {
  private dataService = inject(DataService);
  
  // On récupère le tableau
  servicesList = this.dataService.servicesData;
}
