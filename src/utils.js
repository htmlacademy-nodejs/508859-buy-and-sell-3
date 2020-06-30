'use strict';

const IMG_ID = 9;

module.exports.getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports.shuffleElements = (array) => {
  const copyArray = [...array];
  for (let i = copyArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * i);
    [copyArray[i], copyArray[randomPosition]] = [copyArray[randomPosition], copyArray[i]];
  }

  return copyArray;
};

module.exports.getPictureFileName = (pictureId) => `item${pictureId > IMG_ID ? pictureId : `0` + pictureId}.jpg`;


