import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'portfolio-language';
  private readonly defaultLanguage = 'es';
  private readonly supportedLanguages = ['es', 'en'];
  private currentLanguage = this.defaultLanguage;

  constructor(
    private readonly translateService: TranslateService,
    @Inject(DOCUMENT) private readonly document: Document
  ) {}

  async init(): Promise<void> {
    this.translateService.addLangs(this.supportedLanguages);
    this.translateService.setDefaultLang(this.defaultLanguage);
    await this.loadLanguage(this.getInitialLanguage());
  }

  getCurrentLanguage(): string {
    return this.currentLanguage;
  }

  toggleLanguage(): string {
    const nextLanguage = this.currentLanguage === 'es' ? 'en' : 'es';
    void this.loadLanguage(nextLanguage);
    return nextLanguage;
  }

  private async loadLanguage(language: string): Promise<void> {
    const selectedLanguage = this.supportedLanguages.includes(language)
      ? language
      : this.defaultLanguage;

    this.currentLanguage = selectedLanguage;

    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, selectedLanguage);
    }

    this.document.documentElement.lang = selectedLanguage;
    await firstValueFrom(this.translateService.use(selectedLanguage));
  }

  private getInitialLanguage(): string {
    if (typeof localStorage !== 'undefined') {
      const storedLanguage = localStorage.getItem(this.storageKey);

      if (storedLanguage && this.supportedLanguages.includes(storedLanguage)) {
        return storedLanguage;
      }
    }

    const browserLanguage = navigator.language.toLowerCase();
    return browserLanguage.startsWith('en') ? 'en' : this.defaultLanguage;
  }
}