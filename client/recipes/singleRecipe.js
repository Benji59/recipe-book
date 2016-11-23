import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Session } from 'meteor/session';

import { Recipes } from '../../collections/recipes.js';

import './singleRecipe.html';

Template.singleRecipe.onCreated(function() {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.singleRecipe.helpers({
  Recipes() {
    return Recipes;
  },
  updateRecipeId() {  // concise function will not lose "this" keywords
    return this._id;
  }
});

Template.singleRecipe.events({
  'click .toggle-menu'() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash'() {
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil'() {
    Session.set('editMode', !Session.get('editMode'));
  }

});
