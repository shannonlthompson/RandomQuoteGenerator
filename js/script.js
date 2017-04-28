let indexChosen = [];

const quotes = [
    {
        quote: "There is only one happiness in this life, to love and be loved.",
        source: "George Sand",
        tag: ["Happiness", "Love"]
    },
    {
        quote: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live.",
        source: "Norman Cousins",
        tag: ["Time", "Meaning of Life"]
    },
    {
        quote: "We do not remember days, we remember moments.",
        source: "Cesare Pavese",
        tag: ["Time", "Meaning of Life"]
    },
    {
        quote: "Only connect.",
        source: "E.M. Foster",
        citation: "Howard's End",
        tag: ["Happiness", "Meaning of Life", "Connection"]
    },
    {
        quote: "And now that you don’t have to be perfect, you can be good.",
        source: "John Steinbeck",
        citation: "East of Eden",
        year: 1955,
        tag: ["Happiness", "Failure"],
        website: "https://www.goodreads.com/quotes"
    },
    {
        quote: "Silence is of different kinds, and breathes different meanings.",
        source: "Charlotte Bronte",
        citation: "Villette",
        year: 1853,
        tag: ["Meaning of Life"],
        website: "https://www.goodreads.com/quotes"
    }
];

const clearArray = () => {
    indexChosen.length = 0;
}

/*Selects a random quote object from the quotes array and returns the randomly selected quote object */
const getRandomQuote = () => {
    // Selects a random quote from the quote array
    let quoteNumber;
    /* If index has not been used already, return object in that index. Else, find another random number */
    do {
        quoteNumber = Math.floor(Math.random() * quotes.length);
    }
    //Gets a quote that hasn't yet been displayed
    while (indexChosen.indexOf(quoteNumber) !== -1);
    indexChosen.push(quoteNumber);
    //Once all quotes have been presented, make array empty again
    if(quotes.length === indexChosen.length){
        clearArray();
    }
    return quotes[quoteNumber];
}

const getColor = () => {
    return Math.floor(Math.random() * 255);
}

/*Constructs a string containing the different properties of the quote object and displays it to the page */
const printQuote = () => {
    let r_color = getColor();
    let g_color = getColor();
    let b_color = getColor();
    //Change background to random color
    document.body.style.backgroundColor = "rgb("+ r_color +","+ g_color +"," + b_color+")";
    let quoteObj = getRandomQuote();
    //prints the quote
    console.log(quoteObj.quote);
    let html = '<p class="quote">'+ quoteObj.quote+ '</p>';
    html += '<p class="source">' + quoteObj.source;
    //checks if optional properties exist
    if (quoteObj.hasOwnProperty('citation')) {
        html += '<span class="citation">'+ quoteObj.citation +'</span>';
    }
    if (quoteObj.hasOwnProperty('year')) {
        html += '<span class="year">' + quoteObj.year + '</span>';
    }
    if (quoteObj.hasOwnProperty('website')) {
        html += '<span class="website">' + quoteObj.website + '</span>';
    }
    if (quoteObj.hasOwnProperty('tag')) {
        html += '<p id="tags">';
        for(let i=0; i < quoteObj.tag.length; i++) {
            html += '<span class="tag">' + quoteObj.tag[i] + '</span>';
        }
        html += '</p>';
    }
    html += '</p>';
    document.getElementById('quote-box').innerHTML = html;
}
//Show a new quote every 10 seconds
setInterval(printQuote, 10000);

// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);