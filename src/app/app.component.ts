import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'language-tranlator';
  textDir: string = 'ltr';
  constructor(private translateService:TranslateService) { 
    this.translateService.onLangChange.subscribe((event:LangChangeEvent)=>{
      if(event.lang == 'ur')
      {
        this.textDir = 'rtl';
      } 
      else
      {
        this.textDir = 'ltr';
      }
    })
  }
}
