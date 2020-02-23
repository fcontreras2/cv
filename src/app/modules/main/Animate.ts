import * as $ from "jquery";
import Timeout from "await-timeout";

export abstract class ScrollAnimateI {
  abstract initialTimeout: any;
  class_: string;

  constructor(class_: string) {
    this.class_ = class_;
  }
  abstract isOnScreen(elem): boolean;
  abstract async checkElements();
}

export class ScrollAnimate extends ScrollAnimateI {
  initialTimeout: any = [];

  isOnScreen(elem): boolean {
    // if the element doesn't exist, abort
    if (elem.length == 0) {
      return;
    }
    var $window = $(window);
    var viewport_top = $window.scrollTop();
    var viewport_height = $window.height();
    var viewport_bottom = viewport_top + viewport_height;
    var $elem = $(elem);
    var top = $elem.offset().top;
    var height = $elem.height();
    var bottom = top + height;

    return (
      (top >= viewport_top && top < viewport_bottom) ||
      (bottom > viewport_top && bottom <= viewport_bottom) ||
      (height > viewport_height &&
        top <= viewport_top &&
        bottom >= viewport_bottom)
    );
  }

  async checkElements() {
    if (this.initialTimeout) clearTimeout(this.initialTimeout);

    this.initialTimeout = setTimeout(async () => {
      for (let el of $(`.${this.class_}:not(.animated)`)) {
        if (this.isOnScreen(el)) {
          var jqEl = $(el);
          if (el) {
            await new Promise(resolve => setTimeout(resolve, 300));
            jqEl.addClass("fadeInUp");
            jqEl.addClass("animated");
          }
        }
      }
    }, 10);
  }
}
