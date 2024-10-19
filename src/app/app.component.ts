import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { BannerComponent } from "./banner/banner.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { EducationComponent } from "./education/education.component";
import { TechnologiesComponent } from "./technologies/technologies.component";
import { ProyectsComponent } from "./proyects/proyects.component";
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavBarComponent,
    BannerComponent, 
    AboutMeComponent, 
    EducationComponent, 
    TechnologiesComponent, 
    ProyectsComponent,
    ContactComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
