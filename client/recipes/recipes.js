import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/recipes.js';

import './recipes.html';

// subscribe to he Template level
Template.Recipes.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.Recipes.helpers({
  recipes() {
    return Recipes.find({});
  }
});
