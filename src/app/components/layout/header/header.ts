import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitch } from '../../ui/theme-switch/theme-switch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeSwitch],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isMenuOpen = false;
  isDarkMode = false; // Par défaut en mode clair

  // Cette fonction est appelée quand le ThemeSwitch émet un changement
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