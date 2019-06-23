/**
 * Messy AF romanian coding. They need to pay us more!!
 * @returns {number}
 */
export function generateRandomNumberBetween (maxBoundary: number) {
  return Math.floor(Math.random() * maxBoundary);
}
export function generateImagePaths(numberOfPhotos: number, folderPath?: string): string[] {
  const images = [];
  for (let index = 1; index <= numberOfPhotos; index++) {
    images.push(`${folderPath}image-${index}.jpg`);
  }
  return images;
}
