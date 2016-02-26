// Can't use some JSON API provider so
// i use my own object-ish thing

$(document).ready(function () {

    //$('#tweeterButton').attr('href', 'https://twitter.com/intent/tweet=bine ba');
    var quotesJSON = {
        1: {
            "author": "Edward V Berard",
            "quote": "Walking on water and developing software from a specification are easy if both are frozen."
        },
        2: {
            "author": "Seymour Cray",
            "quote": "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."
        },
        3: {
            "author": "George Carrette",
            "quote": "First learn computer science, theory and develop a programming style. Then forget all that and just hack."
        },
        4: {
            "author": "Jan L. A. van de Snepscheut",
            "quote": "In theory, theory and practice are the same. In practice, they’re not."
        },
        5: {
            "author": "Bill Gates",
            "quote": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight."
        },
        6: {
            "author": "Vidiu Platon",
            "quote": "I don't care if it works on your machine! We are not shipping your machine!"
        },
        7: {
            "author": "Keith Bostic",
            "quote": "Perl – The only language that looks the same before and after RSA encryption."
        },
        8: {
            "author": "Linus Torvalds",
            "quote": "Talk is cheap. Show me the code."
        },
        9: {
            "author": "Leon Bambrick",
            "quote": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors."
        }
    };

    //function to return a random object
    //    containing author and quote

    function extractRandomQuote() {
        var id = Math.floor(Math.random() * Object.keys(quotesJSON).length + 1);
        return quotesJSON[id];
    };

    //implementation of quote button
    $('#inspire').on('click', function (e) {
        e.preventDefault();

        //extract random quote
        var workingQuote = extractRandomQuote();
        var quoteBody = workingQuote["quote"];
        var quoteAuthor = workingQuote["author"];

        //text for tweet href
        //should limit to 140 chars but... tweeter removed the limitation AFAIK
        var staticPart = "https://twitter.com/intent/tweet?hashtags=quotes&text=";
        var textToTweet = staticPart + quoteBody + " -by " + quoteAuthor;

        //use animate opacity for smooth transition
        $('#quoteHolder').animate({
            'opacity': 0
        }, 700, function () {
            //            var workingQuote = extractRandomQuote();
            $('#quoteBody').text(quoteBody);
            $('#quoteAuthor').text(quoteAuthor);
        }).animate({
            'opacity': 1
        }, 700);

        // Actualization of tweeter button
        $('#tweeterButton').attr('href', textToTweet);
    });


});