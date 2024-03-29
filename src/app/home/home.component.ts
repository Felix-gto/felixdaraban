import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

// Dark Mode Service
import { DarkModeService } from '../dark-mode.service';

// Language Service
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(
    private darkModeService: DarkModeService,
    private languageService: LanguageService,
    private router: Router,
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

  // About me button -> Navigate to the About me section
  navigateToAboutMe() {
    document.querySelector('#about-me')?.scrollIntoView({ behavior: "smooth" });
  }  

}
