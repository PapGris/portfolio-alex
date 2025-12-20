import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class Modal {
  // On reçoit le projet à afficher depuis le parent (Portfolio)
  @Input() project: any = null;
  
  // On reçoit l'état d'ouverture (vrai/faux)
  @Input() isOpen = false;

  // On envoie un événement au parent pour dire "Ferme-moi !"
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  // Empêche la fermeture si on clique SUR le contenu (et pas à côté)
  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}