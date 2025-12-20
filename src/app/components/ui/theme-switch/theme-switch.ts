import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-switch.html',
  styleUrls: ['./theme-switch.scss']
})
export class ThemeSwitch implements OnInit {
  isDarkMode = false;

  // On ajoute l'émetteur pour prévenir le Header
  @Output() themeChanged = new EventEmitter<boolean>();

  ngOnInit() {
    // 1. On récupère la préférence
    const savedTheme = localStorage.getItem('theme');
    
    // 2. Si c'est dark, on applique ton attribut data-theme
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.body.setAttribute('data-theme', 'dark');
    }

    // 3. IMPORTANT : On informe le header de l'état initial au chargement
    this.themeChanged.emit(this.isDarkMode);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    
    if (this.isDarkMode) {
      // Mode SOMBRE : On met l'attribut
      document.body.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
    } else {
      // Mode CLAIR : On enlève l'attribut
      document.body.removeAttribute('data-theme');
      localStorage.setItem('theme', 'light');
    }

    // 4. À chaque clic, on envoie le signal au Header
    this.themeChanged.emit(this.isDarkMode);
  }
}