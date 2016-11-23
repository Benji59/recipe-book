import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';
import { GAnalytics } from 'meteor/datariot:ganalytics';
import { Accounts } from 'meteor/accounts-base';

Accounts.onLogin(() => {
  FlowRouter.go('recipe-book');
});

Accounts.onLogout(() => {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([(context, redirect) => {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}]);

FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('recipe-book');
    }
    GAnalytics.pageview();
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/recipe-book', {
  name: 'recipe-book',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {
      main: 'Recipes'    // dynamic showing test templtes in main
    });
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {
      main: 'recipeDetail'    // dynamic showing test templtes in main
    });
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {
      main: 'Menu'    // dynamic showing test templtes in main
    });
  }
});

FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    GAnalytics.pageview();
    BlazeLayout.render('mainLayout', {
      main: 'ShoppingList'    // dynamic showing test templtes in main
    });
  }
});
