import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-specializations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './specializations.html',
  styleUrls: ['./specializations.scss']
})
export class Specializations implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // On récupère uniquement la partie domains du skillsData
    this.data = this.dataService.skillsData.domains;
  }
}