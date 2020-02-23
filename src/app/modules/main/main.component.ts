import {
  Component,
  OnInit,
  AfterViewInit,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked
} from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query
  // ...
} from "@angular/animations";
import { RouterOutlet } from "@angular/router";
import { ScrollAnimate, ScrollAnimateI } from "./Animate";

export const slideInAnimation = trigger("fadeAnimation", [
  transition("* => *", [
    query(
      ":enter",
      [
        style({
          opacity: 0,
          display: "none",
          position: "absolute",
          top: "0",
          width: "100%",
          left: -100
        })
      ],
      {
        optional: true
      }
    ),
    query(
      ":leave",
      [
        style({
          opacity: 1,
          width: "100%",
          position: "absolute",
          top: "0",
          left: 0,
          zIndex: 0
        }),
        animate("0.2s", style({ opacity: 0, left: -100 }))
      ],
      { optional: true }
    ),
    query(
      ":enter",
      [
        style({
          opacity: 0,
          display: "block",
          position: "absolute",
          top: "0",
          left: -100
        }),
        animate("0.2s", style({ opacity: 1, left: 0 }))
      ],
      {
        optional: true
      }
    )
  ])
]);

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"],
  animations: [slideInAnimation]
})
export class MainComponent implements OnInit {
  constructor() {}
  activeRouter: boolean;

  animate: ScrollAnimateI = new ScrollAnimate('section');

  ngOnInit() {
    this.animate.checkElements();
  }
  
  change($event) {
    this.activeRouter = !this.activeRouter;
    console.log(this.activeRouter);
    // if (!this.activeRouter) {
      this.animate.checkElements();
    // }
  }

  scroll() {
    this.animate.checkElements();
  }

  checkChangePage(outlet: RouterOutlet) {
    if (outlet.isActivated) {
      // (async () => {
      //   console.log('AA')
      //   this.animate.checkElements();
      // })();
    }
    return outlet.isActivated ? outlet.activatedRoute : "";
  }
}
