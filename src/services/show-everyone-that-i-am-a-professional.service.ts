/**
 * Show the world that you a professional with a dialogue window,
 */
import { generateRandomNumberBetween } from "../utils";

export class ShowEveryoneThatIAmAProfessionalService {
  constructor(private window: Window) {}

  showNotification () {
    this.window.document.querySelector('body')
      .addEventListener('click',() => {
        const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        const notificationElement = window.document.querySelector('.notification');
        notificationElement
          .setAttribute('style', `top: ${generateRandomNumberBetween(viewportHeight)}px`);
    });
  }



}
