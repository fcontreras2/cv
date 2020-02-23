import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainComponent } from "./main.component";
import { AboutMeComponent } from "./pages/about-me/about-me.component";
import { SummaryComponent } from "./pages/summary/summary.component";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      { path: "", component: AboutMeComponent },
      { path: "about-me", component: AboutMeComponent },
      {
        path: "summary",
        component: SummaryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {}
