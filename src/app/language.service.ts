import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class LanguageService {

  // Languages: Romanian & English (if romanian is on english is off and vice-versa)
  romanianOn: boolean = true;
  englishOn: boolean = !this.romanianOn;

  // Emit an Observable (Subject) that informs that the DarkMode has been changed - can subscribe to it where desired...
  languageEmitter = new Subject<boolean>();

  // Toggle Dark Mode triggered in the navbar-landing component
  onLanguageClicked() {
    this.romanianOn = !this.romanianOn;
  }

}