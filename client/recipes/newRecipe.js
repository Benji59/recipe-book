import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Recipes } from '../../collections/recipes.js';

import './newRecipe.html';

Template.NewRecipe.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  });
});


Template.NewRecipe.helpers({
  Recipes() {
    return Recipes;
  }
});

Template.NewRecipe.events({
  'click .fa-close'() {
    Session.set('newRecipe', false);
  }
});
