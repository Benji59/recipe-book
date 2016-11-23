import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/recipes.js';

import './recipes.html';

Meteor.subscribe('recipes');

Template.Recipes.helpers({
  recipes() {
    return Recipes.find({});
  }
});
