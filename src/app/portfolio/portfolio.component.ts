import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    private languageService: LanguageService,
    private router: Router
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

  // COUNTERS
  counter1 = 70;
  counter2 = 50;
  counter3 = 100;
  counter4 = 30;
  
  // My Learning Section - Listen for scroll and run Progress Bars when section scrolled into view...
  @HostListener("window:scroll", [])
  onScrollIntoView() {

    // Page Scrolled distance
    const scrolled = Number(window.scrollY);  

    // Page height
    const totalPageHeight = Number(document.documentElement.scrollHeight - window.innerHeight);

    // My Learning Section Height
    const myLearningHeight = Number(document.querySelector(".my-learning")?.clientHeight);

    // Contact Section Height
    const contactHeight = Number(document.querySelector(".contact-section")?.clientHeight);

    // Distance from Top of Page to My Learning Section Top
    const myLearningTopDistance = Number(totalPageHeight - myLearningHeight - contactHeight);

    // RUN PROGRESS BARS after 1 second if the .my-learning div is scrolled into view
    if(scrolled > myLearningTopDistance) {      
      setTimeout(this.runProgressBars.bind(this), 500);
    }

  }  

  // FIXME:  RUN PROGRESS BARS 
  runProgressBars() {

    // setInterval(() => {
    //   // First counter
    //   if(this.counter1 == 70){
    //       clearInterval();
    //   }else{
    //       this.counter1 +=1;
    //   }
    // }, 30);

    // setInterval(() => {
    //   // Second counter
    //   if(this.counter2 == 50){
    //     clearInterval();
    //   }else{
    //       this.counter2 +=1;
    //   }
    // }, 40);

    // setInterval(() => {
    //   // Third counter
    //   if(this.counter3 == 100){
    //     clearInterval();
    //   }else{
    //       this.counter3 +=1;
    //   }
    // }, 20);

    // setInterval(() => {
    //   // Fourth counter
    //   if(this.counter4 == 30){
    //     clearInterval();
    //   }else{
    //       this.counter4 +=1;
    //   }
    // }, 65);
  }

  // FIXME: RESTART PROGRESS BARS
  onResetAll() {
    // this.counter1 = 0;
    // this.counter2 = 0;
    // this.counter3 = 0;
    // this.counter4 = 0;
  }
  
  onReset1() {
    // this.counter1 = 0;
  }

  onReset2() {
    // this.counter2 = 0;
  }

  onReset3() {
    // this.counter3 = 0;
  }

  onReset4() {
    // this.counter4 = 0;
  }
}
