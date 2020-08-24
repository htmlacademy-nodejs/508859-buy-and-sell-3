'use strict';

const fs = require(`fs`).promises;
const chalk = require(`chalk`);

const {getRandomInt, shuffleElements, getPictureFileName} = require(`../../utils`);
const {ExitCode, FILE_NAME, MAX_ID_LENGTH} = require(`../../constants`);
const {nanoid} = require(`nanoid`);

const DEFAULT_COUNT = 1;
const FILE_SENTENCES_PATH = `./src/data/sentences.txt`;
const FILE_TITLES_PATH = `./src/data/titles.txt`;
const FILE_CATEGORIES_PATH = `./src/data/categories.txt`;
const FILE_COMMENTS_PATH = `./src/data/comments.txt`;

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

const CommentCount = {
  MIN: 1,
  MAX: 10
};

const CommentTextCount = {
  MIN: 1,
  MAX: 5
};

const MAX_COUNT_OFFERS = 1000;

const generateOffers = (count, titles, categories, sentences, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    category: shuffleElements(categories).slice(0, getRandomInt(1, categories.length - 1)),
    description: shuffleElements(sentences).slice(DescriptionCount.MIN, DescriptionCount.MAX).join(` `),
    picture: getPictureFileName(getRandomInt(PictureRestrict.MIN, PictureRestrict.MAX)),
    title: titles[getRandomInt(0, titles.length - 1)],
    type: Object.keys(OfferType)[Math.floor(Math.random() * Object.keys(OfferType).length)],
    sum: getRandomInt(SumRestrict.MIN, SumRestrict.MAX),
    comments: generateComments(getRandomInt(CommentCount.MIN, CommentCount.MAX), comments)
  }))
);

const generateComments = (count, comments) => (
  Array(count).fill({}).map(() => ({
    id: nanoid(MAX_ID_LENGTH),
    text: shuffleElements(comments)
      .slice(CommentTextCount.MIN, CommentTextCount.MAX)
      .join(` `),
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.split(`\n`).filter((elem) => elem !== ``);
  } catch (error) {
    console.error(chalk.red(error));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const sentences = await readContent(FILE_SENTENCES_PATH);
    const titles = await readContent(FILE_TITLES_PATH);
    const categories = await readContent(FILE_CATEGORIES_PATH);
    const comments = await readContent(FILE_COMMENTS_PATH);
    const [count] = args;

    if (count > MAX_COUNT_OFFERS) {
      console.error(chalk.red(`Не больше 1000 объявлений.`));
      process.exit(ExitCode.FAILURE);
    }

    const countOffer = Number.parseInt(count, 10) || DEFAULT_COUNT;
    const content = JSON.stringify(generateOffers(countOffer, titles, categories, sentences, comments));

    try {
      await fs.writeFile(FILE_NAME, content);
      console.info(chalk.green(`Operation success. File created.`));
    } catch (error) {
      console.error(chalk.red(`Can't write data to file...`));
    }
  }
};
