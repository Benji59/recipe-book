import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/recipes.js';

import './shoppingList.html';

// subscribe to he Template level
Template.ShoppingList.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.ShoppingList.helpers({
  shoppingList() {
    return Recipes.find({inMenu: true});
  }
});
