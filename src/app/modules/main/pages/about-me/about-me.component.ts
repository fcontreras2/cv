import { Component, OnInit } from "@angular/core";
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: "app-about-me",
  templateUrl: "./about-me.component.html",
  styleUrls: ["./about-me.component.scss"]
})
export class AboutMeComponent implements OnInit {
  constructor() {}
  faDesktop = faDesktop
  ngOnInit(): void {}
}
