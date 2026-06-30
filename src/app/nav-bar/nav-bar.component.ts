import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  currentLanguage = this.languageService.getCurrentLanguage();

  constructor(private readonly languageService: LanguageService) {}

  toggleLanguage(): void {
    this.currentLanguage = this.languageService.toggleLanguage();
  }

}
