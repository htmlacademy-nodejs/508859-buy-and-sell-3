'use strict';

const chalk = require(`chalk`);
const express = require(`express`);
const fs = require(`fs`).promises;

const {FILE_NAME, HttpCode} = require(`../../constants`);

const DEFAULT_PORT = 3000;

const app = express();
app.use(express.json());

app.get(`/offers`, async (req, res) => {
  try {
    await fs.access(`./${FILE_NAME}`)
      .then(async () => {
        const fileContent = await fs.readFile(`./${FILE_NAME}`);
        const mocks = JSON.parse(fileContent);
        res.json(mocks);
      })
      .catch(async () => {
        const fileContent = JSON.stringify([]);
        await fs.writeFile(`./${FILE_NAME}`, fileContent);
      });
  } catch (err) {
    res.status(HttpCode.INTERNAL_SERVER_ERROR).send(err);
  }
});

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(`Not found`));


module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = Number.parseInt(customPort, 10) || DEFAULT_PORT;

    try {
      app.listen(port, (err) => {
        if (err) {
          return console.error(`Ошибка при создании сервера`, err);
        }

        return console.info(chalk.green(`Ожидаю соединений на ${port}`));
      });
    } catch (err) {
      console.error(`Произошла ошибка: ${err.message}`);
      process.exit(1);
    }
  }
};
