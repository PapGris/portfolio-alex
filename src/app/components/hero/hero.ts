import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {
  title = "Salut ! C'est moi, Alexandre Blaizot.";
  subtitle = "Apprenti développeur Web";
  description = "Je suis un apprenti développeur, en reconversion professionnelle. Et oui ! Il n'y a pas d'âge ou de moment précis pour décider de vivre de sa passion.";
  
  // Attention : Assure-toi que ton image est bien dans ce dossier
  avatarUrl = "assets/img/avatar.png"; 
}