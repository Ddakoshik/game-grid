import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap, map, filter } from 'rxjs/operators';

export const defaulteLanguage = 'en'; // TODO move to constant

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  selectedLanguage = defaulteLanguage;
  subscription: Subscription;

  translation$ = this.translate.onLangChange.pipe( // TODO: refactor this part Has redirect bug
    switchMap(({ lang }) => {
      debugger
      this.router.navigate(['grid-of-games', lang]);
      return this.translate.getTranslation(lang);
    }
  ));

  constructor(
    public translate: TranslateService,
    private router: Router) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang(defaulteLanguage);

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : defaulteLanguage);
  }

  ngOnInit(): void {

    this.subscription = this.router.events.pipe(
      filter((e: ActivationEnd) => {
        return e instanceof ActivationEnd && e?.snapshot?.data?.hasOwnProperty('leng');
      }),
      map((e: ActivationEnd) => {
        const languageCode = e.snapshot.params.leng;
        this.setLanguage(languageCode);
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  setLanguage(languageCode: string): void {
    this.translate.use(languageCode);
    this.selectedLanguage = languageCode;
  }

  changeLanguage(languageCode: string): void {
    this.translate.use(languageCode);
    this.selectedLanguage = languageCode;
    this.router.navigate(['grid-of-games', languageCode]);
  }
}
