
console.log("in JS file");
var indexChosen = [];

var quotes = [
    {
        quote: "There is only one happiness in this life, to love and be loved.",
        source: "George Sand"
    },
    {
        quote: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
        source: "Norman Cousins"   
    },
    {
        quote: "We do not remember days, we remember moments.",
        source: "Cesare Pavese"   
    },
    {
        quote: "Only connect.",
        source: "E.M. Foster",
        citation: "Howard's End",
    },
    {
        quote: "And now that you don’t have to be perfect, you can be good.",
        source: "John Steinbeck",
        citation: "East of Eden",
        year: 1955
    },
    {
        quote: "Silence is of different kinds, and breathes different meanings.",
        source: "Charlotte Bronte",
        citation: "Villette",
        year: 1853
    }
];

var resetArray = () => {
    indexChosen = [];
}

var getRandomQuote = () => {
    // Select a random quote from the quote array
    var quoteNumber = Math.floor(Math.random() * quotes.length);
    /* If index has not been used already, return object in that index. Else, find another random number */
    console.log("quoteNumber is: "+ quoteNumber);
    if(indexChosen.length === 0 || indexChosen.indexOf(quoteNumber) === -1){
        console.log("No, this quote has not been used before: "+ quoteNumber);
        indexChosen.push(quoteNumber);
        //Once all quotes have been presented, make array empty again
        if(quotes.length === indexChosen.length){
            console.log("resetting Array");
            resetArray();
        }
        return quotes[quoteNumber];
    }
    else {
        console.log("Yes, this quote has been used before: "+ indexChosen);
        getRandomQuote();
    }
}

var printQuote = () => {
    console.log("calling printQuote");
    var quoteObj = getRandomQuote();
    //print the quote
    var html = '<p class="quote">'+ quoteObj.quote+ '</p>';
    html += '<p class="source">' + quoteObj.source;
    //check if optional properties exist
    if (quoteObj.hasOwnProperty('citation')) {
        html += '<span class="citation">'+ quoteObj.citation +'</span>';
    }
    if (quoteObj.hasOwnProperty('year')) {
        html += '<span class="year">' + quoteObj.year + '</span>';
    }
    html += '</p>';
    console.log(html);
    document.getElementById('quote-box').innerHTML = html;
}

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);