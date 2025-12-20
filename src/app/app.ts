import { Component } from '@angular/core';
import { Header } from './components/layout/header/header'; // Import du fichier header.ts
import { Footer } from './components/layout/footer/footer'; // Import du fichier footer.ts
import { Main } from './components/layout/main/main';             // Import du fichier main.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Main, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  title = 'portfolio-alex';
}