'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.get(`/`, (req, res) => {
  res.render(`index`);
});

mainRouter.get(`/register`, (req, res) => {
  res.render(`auth/sign-up`);
});

mainRouter.get(`/login`, (req, res) => {
  res.render(`auth/login`);
});

mainRouter.get(`/search`, (req, res) => {
  res.send(`/search`);
  res.render(`auth/search-result`);
});

module.exports = mainRouter;
