import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

// Angular Material Components
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

// Form
// import {FormGroup, FormControl, Validators} from '@angular/forms';   // Not used as I opted for Template Driven Form (Not Reactive Form)
import { NgForm } from '@angular/forms';


// Dark Mode Service
import { DarkModeService } from '../dark-mode.service';

// Language Service
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

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

  	// USER OBJECT which stores the submitted data
    user = {
	    userName: '',
	    userEmail: '',
	    userMessage: '',
	  }
	
  // Submitted Property - set to true after submitting Form (ex. for showing the "message-sent" paragraph etc.)
  submitted = false;

  // Form - On Submit
  onSubmit(form:NgForm) {
    // console.log(form.value);
    
    this.user.userName = form.value.fullName;
    this.user.userEmail = form.value.email;
    this.user.userMessage = form.value.message;

    console.log(this.user);

    this.submitted = true;

  }

}
