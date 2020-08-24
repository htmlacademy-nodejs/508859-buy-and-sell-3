'use strict';

const {Router} = require(`express`);
const {HttpCode} = require(`../../constants`);
const offerValidator = require(`../middlewares/offer-validator`);
const commentValidator = require(`../middlewares/comment-validator`);
const offerExist = require(`../middlewares/offer-exist`);

const route = new Router();

module.exports = (app, offerService, commentService) => {
  app.use(`/offers`, route);

  route.get(`/`, (request, response) => {
    const offers = offerService.findAll();

    if (!offers) {
      return response.status(HttpCode.NOT_FOUND)
        .send(`Not found offers`);
    }

    return response.status(HttpCode.OK)
      .json(offers);
  });

  route.get(`/:offerId`, (request, response) => {
    const {offerId} = request.params;
    const offer = offerService.findOne(offerId);

    if (!offer) {
      return response.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${offerId}`);
    }

    return response.status(HttpCode.OK)
        .json(offer);
  });

  route.post(`/`, offerValidator, (request, response) => {
    const offer = offerService.create(request.body);

    return response.status(HttpCode.CREATED)
      .json(offer);
  });

  route.put(`/:offerId`, offerValidator, (request, response) => {
    const {offerId} = request.params;
    const offer = offerService.findOne(offerId);

    if (!offer) {
      return response.status(HttpCode.NOT_FOUND)
        .send(`Not found with ${offerId}`);
    }

    const updatedOffer = offerService.update(offerId, request.body);

    return response.status(HttpCode.OK)
      .json(updatedOffer);
  });

  route.delete(`/:offerId`, (request, response) => {
    const {offerId} = request.params;
    const offer = offerService.drop(offerId);

    if (!offer) {
      return response.status(HttpCode.NOT_FOUND)
        .send(`Not found`);
    }

    return response.status(HttpCode.OK)
      .json(offer);
  });

  route.get(`/:offerId/comments`, offerExist(offerService), (request, response) => {
    const {offer} = response.locals;
    const comments = commentService.findAll(offer);

    response.status(HttpCode.OK)
      .json(comments);
  });

  route.delete(`/:offerId/comments/:commentId`, offerExist(offerService), (request, response) => {
    const {offer} = response.locals;
    const {commentId} = request.params;

    const deletedComment = commentService.drop(offer, commentId);

    if (!deletedComment) {
      return response.status(HttpCode.NOT_FOUND)
      .send(`Not found with ${commentId}`);
    }

    return response.status(HttpCode.OK)
      .json(deletedComment);
  });

  route.post(`/:offerId/comments`, [offerExist(offerService), commentValidator], (request, response) => {
    const {offer} = response.locals;
    const comment = commentService.create(offer, request.body);

    return response.status(HttpCode.CREATED)
      .json(comment);
  });

};

