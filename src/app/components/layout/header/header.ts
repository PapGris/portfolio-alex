import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitch } from '../../ui/theme-switch/theme-switch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeSwitch],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header implements OnInit {
  isMenuOpen = false;
  isDarkMode = false;

  ngOnInit() {
    this.checkTheme();
  }

  // On ajoute cette fonction pour être sûr de capter le thème au démarrage
  private checkTheme() {
    // 1. On vérifie d'abord si le thème est déjà dans le localStorage (méthode la plus fiable)
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.isDarkMode = true;
    } else if (savedTheme === 'light') {
      this.isDarkMode = false;
    } else {
      // 2. Si rien en mémoire, on regarde l'attribut sur le HTML
      const currentTheme = document.documentElement.getAttribute('data-theme');
      this.isDarkMode = currentTheme === 'dark';
    }
  }

  onThemeChanged(isDark: boolean) {
    this.isDarkMode = isDark;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}