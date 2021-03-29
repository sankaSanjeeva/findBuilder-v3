import { Component, Input, OnInit } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isTop: boolean;
  isSideMenuOpen = false;
  defaultLang: string;

  constructor(private translocoService: TranslocoService) {
    this.defaultLang = translocoService.getDefaultLang();
  }

  ngOnInit(): void {
  }

  onLanguageChange(lang) {
    this.translocoService.setActiveLang(lang);
    localStorage.setItem('lang', lang);
  }

  expandMenu() {
    this.isSideMenuOpen = !this.isSideMenuOpen;
  }

}
