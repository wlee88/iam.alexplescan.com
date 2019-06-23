/**
 * Tells people off if the browser detected is non apple.
 */
export class TellPeopleOffForNotUsingAnAppleDeviceService {
  constructor (private window: Window, private querySelectorToAttach: string) {

  }

  prependWarningInBody() {
    const isApple = navigator.appVersion.match(/Mac/);
    const mainDiv = document.createElement('div');
    mainDiv.innerHTML = '<div class="non-mac-computer-what-a-loser blink-me">' +
      '<p >You are using a non Apple Computer. I am not impressed, neither is this best practice. </p>' +
      '<p>Please buy an <a href="http://apple.com/mac/" target="_blank">Apple Computer</a>.</p>' +
      '</div>';

    if (!isApple)  {
      this.window.document
        .querySelector(this.querySelectorToAttach)
        .prepend(mainDiv);
    }
  }

}
