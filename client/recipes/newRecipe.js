import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/recipes.js';

import './newRecipe.html';

Meteor.subscribe('recipes'); 

Template.NewRecipe.helpers({
  Recipes() {
    return Recipes;
  }
});
