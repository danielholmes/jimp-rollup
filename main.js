import Jimp from "jimp";

const blankImage = Jimp.create(100, 100, 0x00000000);
console.log(`Created image ${blankImage.bitmap.width}x${blankImage.bitmap.height}`);