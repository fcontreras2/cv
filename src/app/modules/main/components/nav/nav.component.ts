import { Component, OnInit } from "@angular/core";
import { faUser, faFileAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { ScrollAnimate, ScrollAnimateI } from '../../Animate';

interface RouteI {
  link: string;
  title: string;
  icon: IconDefinition;
}
@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  routes: RouteI[] = [
    {
      title: "Sobre mí",
      link: '/',
      icon: faUser
    },
    {
      title: "Resumen",
      link: '/summary',
      icon: faFileAlt
    }
  ];

  animate: ScrollAnimateI = new ScrollAnimate('text-animate');

  constructor() {}

  ngOnInit(): void {
    this.animate.checkElements();
  }
}
