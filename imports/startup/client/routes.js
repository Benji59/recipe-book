import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// import to load templtes
import '../../ui/layouts/layouts.js';


FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('homeLayout');
  }
});

FlowRouter.route('/test', {
  name: 'test',
  action() {
    BlazeLayout.render('mainLayout', {
      main: 'test'    // dynamic showing test templtes in main
    });
  }
});
