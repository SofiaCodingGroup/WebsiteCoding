define(["knockout", "text!./html-css.html"], function(ko, homeTemplate) {

  function HomeViewModel(route) {
    this.message = ko.observable('Welcome to HTML&CSS section!');
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };



  return { viewModel: HomeViewModel, template: homeTemplate };

});


