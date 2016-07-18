$(document).ready(function () {
/********************** Buttons ******************************/
/*** Factorial ***/
    $("#myBtn").click(function () {
        $("#myModal").modal();
    });

/*** FizzBuzz ***/
    $("#fizzBuzz").click(function () {
        $("#fizzModal").modal();
    });

/*** Palindrome ***/
    $("#palindrome").click(function () {
        $("#palinModal").modal();
    });

/********************** Functions ******************************/
/*** Factorial ***/
    $('#calculate').click(function (e) {
        e.preventDefault();
        var value = $('#factorial').val();

        if (value > 0) {
            var output = 1;

            for (var i = 1; i <= value; i++) {
                output *= i;
            }

            $('#result').text("Result: " + output);
            $('#factorial').val("");
        }
    });

/*** FizzBuzz ***/
    $('#calcFizzBuzz').click(function (e) {
        e.preventDefault();
        var calc1 = $('#fizz').val();
        var calc2 = $('#buzz').val();
        $('#fizzResult').text(' ');

        fizzBuzz(calc1, calc2);

        $('#fizz').val(' ');
        $('#buzz').val(' ');
    });

    function checkInt(input) {
        //console.log("Check Int");
        input = Math.ceil(input);
        //console.log(input);
        input = parseInt(input);
        //console.log(input);
        if (isNaN(input)) {
            //console.log("NaN");
            alert("Not a Valid Integer");
        }
        else { return input; }
    }

    function fizzBuzz(input1, input2) {
        var denom1 = checkInt(input1);
        var denom2 = checkInt(input2);

        $('#fizzValue').text('Fizz:  ' + denom1);
        $('#buzzValue').text('Buzz:  ' + denom2);
        for (var count = 1; count <= 100; count++) {
            var output;
            if (count % denom1 === 0 && count % denom2 === 0) { output = "FizzBuzz"; }
            else if (count % denom1 === 0) { output = "Fizz"; }
            else if (count % denom2 === 0) { output = "Buzz"; }
            else { output = count; }

            $('#fizzResult').append('<br/>' + output);
        }
    }

    /*** Palindrome ***/

    $('#calcPalindrome').click(function (e) {
        e.preventDefault();
        $('#palinResult').text('Result: ');
        var evalString = $('#palinIn').val();
        evalString = evalString.toUpperCase();

        for (var i = 1; i <= evalString.length; i++) {
            if (evalString.substring(i - 1, i) != evalString.substring(evalString.length - i, evalString.length - i + 1)) {
                $('#palinResult')
                    .append("Not a Palindrome")
                    .attr('class', 'label label-warning');
                break;
            }

            if (i === evalString.length) {
                $('#palinResult')
                    .append("It's a Palindrome!!!")
                    .attr('class', 'label label-success');
            }
        }
        $('#palinIn').val('');
    });

});