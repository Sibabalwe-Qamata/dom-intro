

document.addEventListener('DOMContentLoaded', function() 
{

//get a reference to the billString
var billStringField = document.querySelector(".billString");

//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");

var total = document.querySelector(".total");
var calculate_Bill =  calculatebillFactoryF();

//create the function that will be called when the calculate button is pressed
//  * this function should read the string value entered - split it on a comma.
//  * loop over all the entries in the the resulting list
//  * check if it is a call or an sms and add the right amount to the overall total
//  * once done looping over all the entries - display the total onto the screen in the billTotal element

    
calculateBtn.addEventListener('click', 
        function()
        {
            // get the string entered in the textArea
            var billString = billStringField.value;
            //split the string
            var billItems = billString.split(",");
            // a variable for the total phone bill.
            var calculateString = calculate_Bill.calculateBillTotal(billItems);
            
            billTotalElement.innerHTML = calculateString;

    
          if(billTotalElement.innerHTML < 20.00){
             total.classList.remove("danger");
             total.classList.remove("warning");
             }

           if (billTotalElement.innerHTML > 20.00 && 30.00 > billTotalElement.innerHTML ){

             total.classList.add("warning");

             total.classList.remove("danger");
             }

             if(billTotalElement.innerHTML >30.00){
                 total.classList.remove("warning");
                 total.classList.add("danger");
            }
    
        });
});









