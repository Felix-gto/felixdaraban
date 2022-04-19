import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class DarkModeService {

  // Dark Mode Status (on/off i.e true/false) - set to false by default
  darkModeOn: boolean = true;

  // Emit an Observable (Subject) that informs that the DarkMode has been changed - can subscribe to it where desired...
  darkModeStatusEmitter = new Subject<boolean>();

  // Toggle Dark Mode triggered in the Navbar
  onDarkModeClick() {
    this.darkModeOn = !this.darkModeOn;
  }

}