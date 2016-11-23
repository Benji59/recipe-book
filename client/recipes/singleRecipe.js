import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import { Recipes } from '../../collections/recipes.js';

import './singleRecipe.html';

Template.singleRecipe.onCreated(function() {
  this.editMode = new ReactiveVar(false);
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
  },
  editMode() {
    return Template.instance().editMode.get();
  }
});

Template.singleRecipe.events({
  'click .toggle-menu'() {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  },
  'click .fa-trash'() {
    Meteor.call('deleteRecipe', this._id);
  },
  'click .fa-pencil'(event, template) {
    template.editMode.set(!template.editMode.get());
  }

});
