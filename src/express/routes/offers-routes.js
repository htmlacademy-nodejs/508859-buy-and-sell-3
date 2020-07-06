'use strict';

const {Router} = require(`express`);
const mainRouter = new Router();

mainRouter.get(`/:id`, (req, res) => {
  res.send(`/offers/${req.params.id}`);
});

mainRouter.get(`/add`, (req, res) => {
  res.send(`/offers/add`);
});

mainRouter.get(`/edit/:id`, (req, res) => {
  res.send(`/offers/edit/${req.params.id}`);
});

mainRouter.get(`/category/:id`, (req, res) => {
  res.send(`/offers/category/${req.params.id}`);
});

module.exports = mainRouter;
