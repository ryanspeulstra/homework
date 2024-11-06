function displayRentalRate() {
    var inputDate = $('#startdate').val();
    var discount = $('input[name=options]:checked', '#discountCheck').val();
    var insurance = $("input[id=gridCheck]:checked").val();
    var numberOfDrivers = $("#numberdrivers").val();
    var numberOfDays= $("#numberdays").val();
    var driverRate = 0;


$('#model').change(function() {
    var modelChoice = $('#model :selected').val();
    switch (modelChoice) {
        case "SUV: Honda CR-V" :
        case "Luxury Car: Tesla 3":
            var rentalRate = 50;
            break;
        case "Minivan: Chrysler Pacifica":
            var rentalRate = 60;
            break;
        case "Compact car: Ford Escape":
            var rentalRate = 25;
            break;
        case "Full-size car: Chevy Impala":
            var rentalRate = 35;
            break;
        default:
            break;
    }
    $('#dailyrate').html("Daily Rate: " + rentalRate);
});



    $('#discount').html("Discount Rate: " + discount * 100);
    $('#totaldriversoutput').html("Drivers: " + numberOfDrivers);

    if (insurance == "on") {
       var insuranceRate = 10
       $('#insurance').html("Insurance: " + insuranceRate);
    }

    var currentDate = new Date();
    var startDate = new Date(inputDate);
    if (currentDate > startDate) {
        alert("Error: Date is prior to current date.");
        $('#rentalForm').on("submit", function(event) {
            event.preventDefault();
        });
    }

    console.log(startDate);
    console.log(currentDate);


    if (numberOfDrivers > 1) {
    var driverRate = numberOfDrivers * 15;
    }

    var costPerDay = (rentalRate - (rentalRate * discount) + insuranceRate + driverRate)
    $('#bydaycost').html("Cost per day: " + costPerDay);
 

    var totalCost = (costPerDay * numberOfDays);
    $('#totalcost').html("Total Cost: " + totalCost);

}

