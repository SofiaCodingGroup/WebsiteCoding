define(['knockout', 'text!./problem-two.html'], function(ko, templateMarkup) {

  function ProblemTwo(params) {
    this.message = ko.observable('Hello from the problem-two component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ProblemTwo.prototype.dispose = function() { };
  
  return { viewModel: ProblemTwo, template: templateMarkup };

});
