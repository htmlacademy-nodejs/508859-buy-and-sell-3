'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {getRandomInt, shuffle, getPictureFileName} = require(`../../utils`);
const {ExitCode} = require(`../../constants`);

const DEFAULT_COUNT = 1;
const FILE_NAME = `mocks.json`;
const FILE_SENTENCES_PATH = `./src/data/sentences.txt`;
const FILE_TITLES_PATH = `./src/data/titles.txt`;
const FILE_CATEGORIES_PATH = `./src/data/categories.txt`;

const OfferType = {
  OFFER: `offer`,
  SALE: `sale`,
};


const SumRestrict = {
  MIN: 1000,
  MAX: 100000,
};

const PictureRestrict = {
  MIN: 1,
  MAX: 16
};

const DescriptionCount = {
  MIN: 1,
  MAX: 5
};

const MAX_COUNT_OFFERS = 1000;

const generateOffers = (count, titles, categories, sentences) => (
  Array(count).fill({}).map(() => ({
    category: shuffle(categories).slice(0, getRandomInt(1, categories.length - 1)),
    description: shuffle(sentences).slice(DescriptionCount.MIN, DescriptionCount.MAX).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    title: titles[getRandomInt(0, titles.length - 1)],
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`).filter((elem) => elem !== ``);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const [count] = args;

    if (count > MAX_COUNT_OFFERS) {
      console.error(chalk.red(`Не больше 1000 объявлений.`));
      process.exit(ExitCode.FAILURE);
    }

    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (err) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
