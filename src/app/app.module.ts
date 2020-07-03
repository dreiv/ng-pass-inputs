import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectComponent } from './select/select.component';
import { SelectConfigDirective } from './select-config.directive';
import { SelectConfig, setSelectConfig } from './select/select.config';

@NgModule({
  declarations: [
    AppComponent,
    SelectComponent,
    SelectConfigDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: SelectConfig,
      useValue: setSelectConfig({
        size: 'lg'
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
