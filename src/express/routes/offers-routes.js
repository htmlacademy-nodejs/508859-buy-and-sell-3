'use strict';

const {Router} = require(`express`);
const {pageContentCategory, pageContentTicket, pageContentTicketEdit} = require(`../mock`);

const mainRouter = new Router();

mainRouter.get(`/add`, (request, response) => {
  response.render(`tickets/new-ticket`);
});

mainRouter.get(`/edit/:id`, (request, response) => {
  response.render(`tickets/ticket-edit`, pageContentTicketEdit);
});

mainRouter.get(`/category/:id`, (request, response) => {
  response.render(`category`, pageContentCategory);
});

mainRouter.get(`/:id`, (request, response) => {
  response.render(`tickets/ticket`, pageContentTicket);
});

module.exports = mainRouter;
