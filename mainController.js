angular.module("quoteBookApp").controller("mainController", function($scope, quoteService) {
    $scope.getQuotes = function() {
        $scope.quotes = quoteService.getQuotes();
    }
    $scope.getQuotes();

    $scope.addQuote = function(quote, author) {
        quoteService.addQuote(quote, author);
    }
    $scope.removeQuote = function(quote) {
        quoteService.removeQuote(quote);
    }
});
