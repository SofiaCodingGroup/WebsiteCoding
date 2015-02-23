define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function($, ko, router) {

  // Components can be packaged as AMD modules, such as the following:
  ko.components.register('nav-bar', { require: 'components/nav-bar/nav-bar' });
  ko.components.register('html-css-page', { require: 'components/html-css-page/html-css' });

  // ... or for template-only components, you can just point to a .html file directly:
  ko.components.register('javascript-page', {
    template: { require: 'text!components/javascript-page/javascript.html' }
  });

  ko.components.register('problem-one-page', {
    template: { require: 'text!components/problem-one-page/problem-one.html' }
  });

  ko.components.register('problem-two-page', {
    template: { require: 'text!components/problem-two-page/problem-two.html' }
  });

  ko.components.register('problem-three-page', {
    template: { require: 'text!components/problem-three-page/problem-three.html' }
  });



  




  
  // [Scaffolded component registrations will be inserted here. To retain this feature, don't remove this comment.]
    ko.components.register('angularjs-page', {
    template: { require: 'text!components/angularjs-page/angularjs.html' }
  });

  // Start the application
  ko.applyBindings({ route: router.currentRoute });
});
