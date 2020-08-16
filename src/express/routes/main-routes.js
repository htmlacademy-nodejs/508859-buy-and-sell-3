'use strict';

const {Router} = require(`express`);
const {pageContentMain, pageContentSearch} = require(`../mock`);

const mainRouter = new Router();

mainRouter.get(`/`, (request, response) => {
  response.render(`main`, pageContentMain);
});

mainRouter.get(`/register`, (request, response) => {
  response.render(`auth/sign-up`);
});

mainRouter.get(`/login`, (request, response) => {
  response.render(`auth/login`);
});

mainRouter.get(`/search`, (request, response) => {
  response.render(`search-result`, pageContentSearch);
});

module.exports = mainRouter;
