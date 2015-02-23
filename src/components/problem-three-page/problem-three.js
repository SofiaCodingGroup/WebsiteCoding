define(['knockout', 'text!./problem-three.html'], function(ko, templateMarkup) {

  function ProblemThree(params) {
    this.message = ko.observable('Hello from the problem-three component!');
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  ProblemThree.prototype.dispose = function() { };
  
  return { viewModel: ProblemThree, template: templateMarkup };

});
