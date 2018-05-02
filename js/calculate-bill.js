

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



    
calculateBtn.addEventListener('click', 
        function()
        {
            // get the string entered in the textArea
            var billString = billStringField.value;
            //split the string
          
            
            // a variable for the total phone bill.
            //calculate_Bill.calculateBillTotal(billItems);

            calculate_Bill.calculatebillFactoryF(billItems);

            var displayTotal =  calculatebillFactoryF();
            

            billTotalElement.innerHTML = displayTotal;
          

    
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









