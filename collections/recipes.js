import { Mongo } from 'meteor/mongo';

export const Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert(userId, doc) {
    return !!userId;
  }
});

Ingredient = new SimpleSchema({
  name: {
    type: String
  },
  amount: { // string to deal with units
    type: String,
  }
});

Recipes.schema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  desc: {
    type: String,
    label: "Description"
  },
  ingredients: {        // put a sub-schema in schema
    type: [Ingredient]  // [] make it possbile to have several Ingredient
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      type: "hidden"
    }
  },
  author: {
    type: String,
    label: "Description",
    autoValue() {
      return this.userId;
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type:Date,
    label: "Created At",
    autoValue() {
      return new Date();
    },
    autoform: {
      type: "hidden"
    }
  }
});

Recipes.attachSchema( Recipes.schema );
