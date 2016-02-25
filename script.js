$(document).ready(function () {

    $('#inspire').on('click', function (e) {
        e.preventDefault();
        var request = $.ajax({
            method: "GET",
            crossDomain: true,
            url: 'http://quotes.stormconsultancy.co.uk/quotes/random.json',
            dataType: "jsonp",
            //        url: 'http://quotes.stormconsultancy.co.uk/quotes/1.json'
        })();
        request.done(function (data) {
            //            $('#quoteBody').html(data);
            alert('mda');
        });
        request.fail(function () {
            console.log('error retrieving data');
        });
    });
});
