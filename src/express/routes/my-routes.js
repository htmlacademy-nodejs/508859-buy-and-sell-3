'use strict';

const {Router} = require(`express`);
const {pageContentComments, pageContentMyTickets} = require(`../mock`);

const myRouter = new Router();

myRouter.get(`/`, (request, response) => {
  response.render(`tickets/my-tickets`, pageContentMyTickets);
});

myRouter.get(`/comments`, (request, response) => {
  response.render(`comments`, pageContentComments);
});

module.exports = myRouter;
