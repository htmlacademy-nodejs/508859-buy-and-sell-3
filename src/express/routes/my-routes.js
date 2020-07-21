'use strict';

const {Router} = require(`express`);
const {pageContentComments, pageContentMyTickets} = require(`../mock`);

const myRouter = new Router();

myRouter.get(`/`, (req, res) => {
  res.render(`tickets/my-tickets`, pageContentMyTickets);
});

myRouter.get(`/comments`, (req, res) => {
  res.render(`comments`, pageContentComments);
});

module.exports = myRouter;
