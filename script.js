// Can't use some JSON API provider so
// i use my own object

$(document).ready(function () {
    var quotesJSON = {
        1: {
            "author": "C.A.R. Hoare",
            "quote": "There are two ways of constructing a software design. One way is to make it so simple that there are obviously no deficiencies. And the other way is to make it so complicated that there are no obvious deficiencies."
        },
        2: {
            "author": "Seymour Cray",
            "quote": "The trouble with programmers is that you can never tell what a programmer is doing until it’s too late."
        },
        3: {
            "author": "George Carrette",
            "quote": "First learn computer science and all the theory. Next develop a programming style. Then forget all that and just hack."
        },
        4: {
            "author": "Brian W. Kernighan",
            "quote": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
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
            "author": "Eric S. Raymond",
            "quote": "Computer science education cannot make anybody an expert programmer any more than studying brushes and pigment can make somebody an expert painter."
        }
    };

    //function to return a random object
    //    containing author and quote

    function extractRandomQuote() {
        var id = Math.floor(Math.random() * Object.keys(quotesJSON).length + 1);
        return quotesJSON[id];
    };

    $('#inspire').on('click', function (e) {
        e.preventDefault();
        //use animate opacity for smooth transition
        $('#quoteHolder').animate({
            'opacity': 0
        }, 700, function () {
            var workingQuote = extractRandomQuote();
            $('#quoteBody').text(workingQuote["quote"]);
            $('#quoteAuthor').text(workingQuote["author"]);
        }).animate({
            'opacity': 1
        }, 700);

    });
});
