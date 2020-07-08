'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.get(`/:id`, (req, res) => {
  res.render(`./tickets/ticket`);
});

mainRouter.get(`/add`, (req, res) => {
  res.render(`./tickets/new-ticket`);
});

mainRouter.get(`/edit/:id`, (req, res) => {
  res.render(`./tickets/ticket-edit`);
});

mainRouter.get(`/category/:id`, (req, res) => {
  res.render(`./category`);
});

module.exports = mainRouter;
