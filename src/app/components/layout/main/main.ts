import { Component } from '@angular/core';

import { Hero } from '../../hero/hero';
import { About } from '../../about/about';
import { Services } from '../../services/services';
import { Skills } from '../../skills/skills';
import { Portfolio } from '../../portfolio/portfolio';
import { Contact } from '../../contact/contact';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    Hero, 
    About, 
    Services, 
    Skills, 
    Portfolio, 
    Contact
  ],
  templateUrl: './main.html',
  styleUrls: ['./main.scss']
})
export class Main {}