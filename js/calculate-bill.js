

document.addEventListener('DOMContentLoaded', function() 
{

//get a reference to the billString
var billStringField = document.querySelector(".billString");

//get a reference to the calculate button
var calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
var billTotalElement = document.querySelector(".billTotal");

var total = document.querySelector(".total");

	
	
	var calcBillPhone = billPhone();
		function displayBill()
	    {
			
			var stringBill = billStringField.value;
			
			var Billtotal = calcBillPhone.phone(stringBill);
			
		  billTotalElement.innerHTML  = Billtotal;
			
          if(billTotalElement.innerHTML < 20.00)
		     {
               total.classList.remove("danger");
               total.classList.remove("warning");
             }

           if (billTotalElement.innerHTML > 20.00 && 30.00 > billTotalElement.innerHTML )
		   {

               total.classList.add("warning");
			   total.classList.remove("danger");
           }

           if(billTotalElement.innerHTML >30.00)
		    {
                 total.classList.remove("warning");
                 total.classList.add("danger");
            }
			
		}
    
calculateBtn.addEventListener('click', displayBill);
});









