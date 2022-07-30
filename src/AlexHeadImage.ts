import { Size } from './Size'
import { Point } from './Point'
import { randomNumberBetween } from './randomNumberBetween'

const IMAGES = ['./alex.png', './alex2.png', './alex3.png','./alex4.png', './alex5.png']

export class AlexHeadImage {
  readonly size: Size = new Size(120, 183)
  readonly offset: Point = new Point(0, 0)

  private lastImageIndex = 0

  get imageElement (): HTMLImageElement {
    return this.createImageElement(IMAGES[randomNumberBetween(0, IMAGES.length - 1)])
  }

  nextImage (): void {
    this.lastImageIndex = this.lastImageIndex < IMAGES.length - 1 ? ++this.lastImageIndex : 0
  }

  private createImageElement (imagePath: string): HTMLImageElement {
    const image = document.createElement('img')
    image.src = imagePath
    return image
  }
}
