import { Mongo } from 'meteor/mongo';

export const Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert(userId, doc) {
    return !!userId;
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
