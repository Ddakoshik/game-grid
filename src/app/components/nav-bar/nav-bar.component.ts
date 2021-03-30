import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface Language { // TODO move to interface file
  code: string;
  label: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  @Input() set selectedLanguage(selectedLanguageCode: string) {
    this.siteLanguage = this.languageList.find(item => item.code === selectedLanguageCode).label;
  }
  @Output() changeLanguage: EventEmitter<string> = new EventEmitter<string>();

  siteLanguage: string = 'English';
  siteLocale: string;

  languageList: Language[] = [ // TODO move to constants
    { code: 'en', label: 'English' },
    { code: 'ru', label: 'Русский' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onChangeLanguage({label, code}: Language): void {
    this.siteLanguage = label;
    this.changeLanguage.emit(code);
  }

}
