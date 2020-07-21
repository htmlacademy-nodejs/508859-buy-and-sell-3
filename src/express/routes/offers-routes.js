'use strict';

const {Router} = require(`express`);
const {pageContentCategory, pageContentTicket, pageContentTicketEdit} = require(`../mock`);

const mainRouter = new Router();

mainRouter.get(`/add`, (req, res) => {
  res.render(`tickets/new-ticket`);
});

mainRouter.get(`/edit/:id`, (req, res) => {
  res.render(`tickets/ticket-edit`, pageContentTicketEdit);
});

mainRouter.get(`/category/:id`, (req, res) => {
  res.render(`category`, pageContentCategory);
});

mainRouter.get(`/:id`, (req, res) => {
  res.render(`tickets/ticket`, pageContentTicket);
});

module.exports = mainRouter;
