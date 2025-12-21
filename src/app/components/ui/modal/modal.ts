import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.scss']
})
export class Modal {
  @ViewChild('modalContent') modalContent!: ElementRef;
  
  private _isOpen = false;

  @Input() project: any = null;

  @Input() 
  set isOpen(value: boolean) {
    this._isOpen = value;
    // Si on ouvre la modale, on remonte tout en haut
    if (value) {
      setTimeout(() => {
        if (this.modalContent) {
          this.modalContent.nativeElement.scrollTop = 0;
        }
      }, 0);
    }
  }

  get isOpen(): boolean {
    return this._isOpen;
  }

  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }

  stopPropagation(event: Event) {
    event.stopPropagation();
  }
}