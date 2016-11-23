import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Recipes } from '../../collections/recipes.js';

import './recipeDetail.html';


Template.recipeDetail.onCreated(function() {
  this.autorun(() => {
    let id = FlowRouter.getParam('id');
    this.subscribe('singleRecipes', id);
  });
});


Template.recipeDetail.helpers({
  recipe() {
    let id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
