import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

// Angular Material Imports - Import the desired modules (Example: https://material.angular.io/components/button/api)
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';


// Dark Mode Service
import { DarkModeService } from './dark-mode.service';

// Language Service
import { LanguageService } from './language.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Angular Material Modules - If you want to use a new Angular Material Component - you need to add the corresponding module
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [DarkModeService, LanguageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
