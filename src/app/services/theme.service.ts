import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly storageKey = 'portfolio-theme';
  private isDark = false;

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  init(): void {
    const stored = this.getStoredTheme();
    this.isDark = stored === 'dark';
    this.applyTheme();
  }

  isDarkMode(): boolean {
    return this.isDark;
  }

  toggleTheme(): boolean {
    this.isDark = !this.isDark;
    this.applyTheme();
    this.saveTheme();
    return this.isDark;
  }

  private applyTheme(): void {
    if (this.isDark) {
      this.document.body.classList.add('dark-theme');
    } else {
      this.document.body.classList.remove('dark-theme');
    }
  }

  private saveTheme(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(this.storageKey, this.isDark ? 'dark' : 'light');
    }
  }

  private getStoredTheme(): string | null {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(this.storageKey);
    }
    return null;
  }
}
