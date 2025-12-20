import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Si besoin de ngIf plus tard
import { FormsModule } from '@angular/forms';   // Pour récupérer les valeurs (optionnel si juste visuel)

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  
  // Modèle simple pour le formulaire
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit(event: Event) {
    event.preventDefault(); // Empêche le rechargement de la page
    console.log("Formulaire envoyé !", this.formData);
    alert("Merci " + this.formData.name + " ! Message simulé (backend à venir).");
    
    // Reset du formulaire
    this.formData = { name: '', email: '', message: '' };
  }
}
