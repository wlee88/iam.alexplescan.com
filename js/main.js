const isApple = (navigator.appVersion.indexOf("Mac")!== -1);

if (!isApple)  {
  $('body').prepend('<div class="non-mac-computer-what-a-loser blink-me">' +
    '<p >You are using a non Apple Computer. I am not impressed, neither is this best practice. </p>' +
    '<p>Please buy an <a href="http://apple.com/mac/" target="_blank">Apple Computer</a>.</p>' +
    '</div>');
}

$('html').not('img').click(() => {
  const vh = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  $('.notification').css('top', Math.random() * vh);
});


let lastImageIndex = 0;
const numPhotos = 16;
let images = [];
for (let i = 1 ; i <= numPhotos; i++) {
  images.push(`image-${i}.jpg`);
}

$('img').click(() => {
  $('audio')[0].play();
  let randomImageIndex = generate();
  if (randomImageIndex === lastImageIndex) {
    randomImageIndex = generate();
  }
  lastImageIndex = randomImageIndex;
  const image = 'img/' + images[randomImageIndex];
  $('img').attr("src", image);
});



/**
 * Messy AF romanian coding. They need to pay us more!!
 * @returns {number}
 */
function generate() {
  return Math.floor(Math.random() * images.length);
}
