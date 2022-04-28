import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Dark Mode Service
import { DarkModeService } from './dark-mode.service';

// Language Service
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

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

  // Current year - for the Footer Copyright section
  currentYear: number = new Date().getFullYear();

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

  // DARK MODE TOGGLE -> Listens for Clicks and changes the darkModeOn property value (true/false) in the DarkModeService and make this darkModeSet's property value = darkModeOn (get it's value from the service)
  toggleDarkMode() {

    // onDarkModeClick() toggles the darkModeOn value from the DarkModeService (true/false)
    this.darkModeService.onDarkModeClick();

    // Get the new value of the darkModeOn (true or false) from the DarkModeService and update it here as well (darkModeSet)
    this.darkModeSet = this.darkModeService.darkModeOn;

    // Emit an event (Subject instead of EventEmitter) from the DarkModeService passing the current value of the darkModeSet property (=darkModeOn)
    // We can use the DarkModeService to subscribe to our Observable (Subject) from other components to get the updated value of the darkModeOn property
    this.darkModeService.darkModeStatusEmitter.next(this.darkModeSet);

  }

  // LANGUAGE toggle (RO/EN) -> Switch from Romanian to English using the Language Service
  languageClicked() {

    // onLanguageClicked() toggles the romanianOn value from the LanguageService(true/false)
    this.languageService.onLanguageClicked();

    // Get the new value of the romanianOn (true or false) from the LanguageService and update it here as well (romanianSet)
    this.romanianSet = this.languageService.romanianOn;

    // Emit an event (Subject instead of EventEmitter) from the LanguageService passing the current value of the romanianSet property (= romanianOn)
    // We can use the LanguageService to subscribe to our Observable (Subject) from other components to get the updated value of the romanianOn property
    this.languageService.languageEmitter.next(this.romanianSet);
    
  }
  
}
