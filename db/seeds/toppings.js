'use strict';

const toppings = require('./toppings.json');



exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  let toppingsPromises = toppings.map(({name}) => {
    return knex('toppings').insert({name});
  });
  return knex('toppings').del()
    .then( () => {
      // Inserts seed entries
      return Promise.all(toppingsPromises);
  });
};
