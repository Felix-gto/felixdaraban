// Scroll to Top -> Chat GPT: To make an Angular app scroll to the top of the page when loading a component: Import the ViewChild and ElementRef modules from @angular/core.
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// Dark Mode Service
import { DarkModeService } from '../dark-mode.service';

// Language Service
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {

  // Scroll to Top -> Chat GPT: you need to make sure that you have correctly defined the cvTop property in your component class using the @ViewChild decorator.
  @ViewChild('cvTop', {static: true}) cvTop: ElementRef;

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

    // Scroll to Top -> Chat GPT: In the ngOnInit() method, call window.scrollTo() method with the x and y positions of the component's root element.
    window.scrollTo({
      top: this.cvTop.nativeElement.offsetTop,
      behavior: 'smooth'
    });

  }

}
