import { Component, OnInit } from '@angular/core';

import { Subscription } from 'rxjs';

// Dark Mode Service
import { DarkModeService } from '../dark-mode.service';

// Language Service
import { LanguageService } from '../language.service';

// HostListener for listening to scroll event to load progress bar
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService,
    private languageService: LanguageService
  ) {}

  // darkModeSet property = darkModeOn property from the DarkModeService (true or false)
  darkModeSet = this.darkModeService.darkModeOn;

  // romanianSet property = romanianOn property from the Language Service (true or false)
  romanianSet = this.languageService.romanianOn;

  // Store the DarkModeService subscription
  private darkModeSubscription: Subscription;

  // Store the Language Service subscription
  private languageSubscription: Subscription;

  ngOnInit() {

    // Subscribe to the DarkModeService Subject (darkModeStatusEmitter - observable) and listen to changes in the darkModeOn status... (changes on click emitted in the Navbar)
    this.darkModeSubscription = this.darkModeService.darkModeStatusEmitter.subscribe(darkModeStatus => {
      this.darkModeSet = darkModeStatus;
    })

    // Subscribe to the LanguageService Subject (languageEmitter - observable) and listen to changes in the language (Romanian or English)... (changes on click emitted in the Navbar)
    this.languageSubscription = this.languageService.languageEmitter.subscribe(romanianOnStatus => {
      this.romanianSet = romanianOnStatus;
    })

  }

  /***** PROGRESS BARS *****/ 

  // Counters
  counter1 = 0;
  counter2 = 0;
  counter3 = 0;
  counter4 = 0; 
  
  
  onScrollIntoView() {
    setInterval(() => {

      // First counter
      if(this.counter1 == 70){
          clearInterval();
      }else{
          this.counter1 +=1;
      }

    }, 15);

    setInterval(() => {

      // Second counter
      if(this.counter2 == 50){
        clearInterval();
      }else{
          this.counter2 +=1;
      }

    }, 19);

    setInterval(() => {

      // Third counter
      if(this.counter3 == 100){
        clearInterval();
      }else{
          this.counter3 +=1;
      }

    }, 10);

    setInterval(() => {

      // Fourth counter
      if(this.counter4 == 30){
        clearInterval();
      }else{
          this.counter4 +=1;
      }

    }, 32.5);

  }

  onReset() {
    this.counter1 = 0;
    this.counter2 = 0;
    this.counter3 = 0;
    this.counter4 = 0;
  }  
}
