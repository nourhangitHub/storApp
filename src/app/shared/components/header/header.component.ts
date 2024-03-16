import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentLang!: string; 
  constructor(public translate: TranslateService){
    this.currentLang = localStorage.getItem("lang") || this.translate.defaultLang ;
  }

  ngOnInit(): void {
    
  }

  changePageDirection(langParam: string) {
    const htmlTag = document.getElementsByTagName('html')[0];
    if (langParam === 'ar') {
      htmlTag.dir = 'rtl';
      htmlTag.lang = 'ar';
    } else {
      htmlTag.dir = 'ltr';
      htmlTag.lang = 'en';
    }
  }

  switchLanguage() {
    console.log(this.translate.currentLang)
    if (this.translate.currentLang === 'ar') {
      this.currentLang = "en"
      this.translate.use('en');
      localStorage.setItem('lang', 'en');
      this.changePageDirection('en');
    } else {
      this.currentLang = "ar"
      this.translate.use('ar');
      localStorage.setItem('lang', 'ar');
      this.changePageDirection('ar');
    }
  }
}
