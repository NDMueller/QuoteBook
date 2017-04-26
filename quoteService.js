angular.module("quoteBookApp").service("quoteService", function () {
  var quotes = [
    { text: "Like an iguana, I’m going to adapt.", author: 'Zach Randolph'},
    { text: "I had a problem with my butt from sitting on the bench for so long.", author: 'Allen Iverson'},
    { text: "All heart, grit grind." ,author: 'Tony Allen'},
    { text: 'Hammer, nail, coffin, this baby is over', author: 'Pete Pranica'},
    { text: 'They’re not gonna rook us.', author: 'David Fizdale'},
    { text: 'Bust his butt, Marc.', author: 'Zach Randolph'},
    { text: 'We’re coming to a gunfight with spoons', author: 'Matt Barnes'}
  ];
  this.getQuotes = function() {
    return quotes;
}
this.addQuote = function(quote, author) {
    for(var i = 0; i < quotes.length; i++) {
        if(quotes[i].text === quote || quotes[i].author === author) {
            return;
        }
    }
    var newQuote = {
        text: quote,
        author: author
    }
    quotes.push(quote);
}
this.removeQuote = function(quoteToRemove) {
    for(var i = 0; i < quotes.length; i++) {
        if(quotes[i].text === quoteToRemove.text && quotes[i].author === quoteToRemove.author) {
            quotes.splice(i, 1);
        }
    }
}
});
