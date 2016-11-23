import { Template } from 'meteor/templating';

import { Recipes } from '../../collections/recipes.js';

import './menu.html';

// subscribe to he Template level
Template.Menu.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.Menu.helpers({
  recipes() {
    return Recipes.find({inMenu: true});
  }
});
