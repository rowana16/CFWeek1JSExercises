$(document).ready(function () {
    $("#myBtn").click(function () { $("#myModal").modal(); });

    $("#calculate").on("click", ".btn", function () {
        // initialize variables
        var max = 0;
        var min = 100;
        var count = 0;
        var sum = 0;
        var product = 1;

        //loop through each input
        for (var i = 1; i <11; i++){
            // get values
            var currValue = $("#input" + i).val()
            // ensure inputs are valid
            if (!isNaN(parseInt(currValue)) && parseInt(currValue)<=100 && parseInt(currValue) > 0) {
                value = parseInt(currValue);
                /*
                Debugging Tool: alert(i + ": value - " + value + "  Max: " + max + "  Min: " + min + "  Sum: " + sum + "  count: " + count + "  product: " + product); 
                */
               // Additional Error Handling 
                if (value != "") {
                    max = maxCompare(max, value);
                    min = minCompare(min, value);
                    count++;
                    sum = sum + value;
                    product = product * value;
                }
            }

        }

        $("#max").text(max);
        $("#min").text(min);
        $("#ave").text(sum / count);
        $('#sum').text(sum);
        $('#product').text(product);
    })

    //simple max and min functions
    function maxCompare(currentMax, newValue) {
        if (currentMax >= newValue) { return currentMax; }
        else if (currentMax < newValue) { return newValue; }     
    }

    function minCompare(currentMin, newValue) {
        if (currentMin <= newValue) { return currentMin; }
        else if (currentMin > newValue) { return newValue; }     
    }

    
}); //doc ready