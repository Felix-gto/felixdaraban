import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Components
import { HomeComponent } from "./home/home.component";
import { PortfolioComponent } from "./portfolio/portfolio.component";
import { CvComponent } from "./cv/cv.component";
import { ContactComponent } from "./contact/contact.component";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

// ROUTES - Declare the routes variable and set up the routes
const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'cv', component: CvComponent },
    { path: 'contact', component: ContactComponent },  

    // PAGE NOT FOUND - Redirecting to page-not-found
    {path: 'page-not-found', component: PageNotFoundComponent},
    {path: '**', redirectTo: 'page-not-found'}  // ** = wildcard route - catches unknown paths -> needs to be the last one in the array of routes
];

@NgModule({

    // Import the RouterModule and pass your appRoutes constant as an argument -> registers the routes + Export the configured RouterModule. Added scrollPositionRestoration to scroll to top on route change...
    imports: [RouterModule.forRoot(appRoutes, {scrollPositionRestoration: 'enabled'})],   
    exports: [RouterModule]

})

export class AppRoutingModule {

}