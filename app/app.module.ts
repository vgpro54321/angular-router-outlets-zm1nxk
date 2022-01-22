import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { BlueComponent } from './components/blue.component';
import { RedComponent } from './components/red.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRouting,
  ],
  declarations: [
    AppComponent,
    BlueComponent,
    RedComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
