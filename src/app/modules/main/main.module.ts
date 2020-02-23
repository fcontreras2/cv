import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MainRoutingModule } from "./main-routing.module";
import { MainComponent } from "./main.component";
import { NavComponent } from "./components/nav/nav.component";
import {
  FontAwesomeModule,
  FaIconLibrary
} from "@fortawesome/angular-fontawesome";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { SummaryComponent } from "./pages/summary/summary.component";
import { faSquare, faDesktop } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faAngular,
  faJs,
  faHtml5,
  faCss3
} from "@fortawesome/free-brands-svg-icons";

@NgModule({
  declarations: [
    MainComponent,
    NavComponent,
    AboutMeComponent,
    SummaryComponent
  ],
  imports: [CommonModule, FontAwesomeModule, MainRoutingModule]
})
export class MainModule {
  constructor(private library: FaIconLibrary) {
    this.library.addIcons(
      faSquare,
      faDesktop,
      faReact,
      faAngular,
      faJs,
      faHtml5,
      faCss3
    );
  }
}
