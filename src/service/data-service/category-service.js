'use strict';

class CategoryService {
  constructor(offers) {
    this._offers = offers;
  }

  findAll() {
    const categories = this._offers.reduce((acc, offer) => {

      acc.push(...offer.category);
      return acc;
    }, []);

    return [...new Set(categories)];
  }
}

module.exports = CategoryService;
