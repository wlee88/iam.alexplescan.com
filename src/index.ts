import { ShowEveryoneThatIAmAProfessionalService, TellPeopleOffForNotUsingAnAppleDeviceService } from "./services";
import { generateImagePaths } from "./utils";
const TOTAL_COUNT_OF_PHOTOS_OF_ME_LOOKING_PROFESSIONAL = 16;
const IMAGE_QUERY_SELECTOR = '.alex-image';
const BODY_QUERY_SELECTOR = 'body';

new TellPeopleOffForNotUsingAnAppleDeviceService(window, BODY_QUERY_SELECTOR).prependWarningInBody();
new ShowEveryoneThatIAmAProfessionalService(window).showNotification();

const professionalHeadshotImagePaths = generateImagePaths(TOTAL_COUNT_OF_PHOTOS_OF_ME_LOOKING_PROFESSIONAL, 'img/');
let imageCounter = 1;

const imageOfProfessionalism = window.document.querySelector(IMAGE_QUERY_SELECTOR);
const documentBody = window.document.querySelector(BODY_QUERY_SELECTOR);
documentBody.addEventListener('click', () => {
  imageCounter++;
  if (imageCounter >= TOTAL_COUNT_OF_PHOTOS_OF_ME_LOOKING_PROFESSIONAL) {
    imageCounter = 1;
  }
  const audioElement = window.document.getElementsByTagName('audio')[0];
  audioElement.play();

  const pathToImageOfProfessional = professionalHeadshotImagePaths[imageCounter];
  imageOfProfessionalism.setAttribute('src', pathToImageOfProfessional);
});
