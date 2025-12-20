import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitch } from '../../ui/theme-switch/theme-switch'; // Important pour *ngClass

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ThemeSwitch],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
}