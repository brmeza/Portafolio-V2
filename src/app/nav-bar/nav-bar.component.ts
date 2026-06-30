import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

import { LanguageService } from '../services/language.service';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  currentLanguage = this.languageService.getCurrentLanguage();
  isDarkMode = this.themeService.isDarkMode();

  constructor(
    private readonly languageService: LanguageService,
    private readonly themeService: ThemeService
  ) {}

  toggleLanguage(): void {
    this.currentLanguage = this.languageService.toggleLanguage();
  }

  toggleTheme(): void {
    this.isDarkMode = this.themeService.toggleTheme();
  }
}
