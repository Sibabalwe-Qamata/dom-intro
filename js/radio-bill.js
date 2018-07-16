

"use strict";
document.addEventListener('DOMContentLoaded', function() 
{


// get a reference to the sms or call radio buttons

var callsTotalElem = document.querySelector(".callTotalTwo");
var smsTotalElem = document.querySelector(".smsTotalTwo");

//get a reference to the add button

var RadioTotalAddBtn = document.querySelector(".radioBillAddBtn");
//create a variable that will keep track of the total bill
var totalCostElem = document.querySelector(".totalOne");
var billTypeRadio = document.querySelector(".billItemTypeRadio");

//Reference Handlebars Session.....
let showTwo = document.querySelector('.showTwo');
let templateBillRadio = document.querySelector('.TemplateBill').innerHTML;
let compileTemplateRadio = Handlebars.compile(templateBillRadio);


//Get the object to show the Data
let billInfoRadio = {
    call : 0.00.toFixed(2),
    sms : 0.00.toFixed(2),
    total : 0.00.toFixed(2)
 };
 let compileInfoRadio = compileTemplateRadio(billInfoRadio);
 showTwo.innerHTML = compileInfoRadio;

 function colorChangeRadio(totalWarning)
 {
     if (totalWarning> 30.00 && 50.00 > totalWarning)
     {
         return 'warning';
     }
     
     else if(totalWarning >50.00){
        
         return 'danger';
     }
 }


var radioFactoryF = radioBillFactoryF();
//add an event listener for when the add button is pressed
RadioTotalAddBtn.addEventListener('click', 
function()
{
   
   var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
   var billItemType = checkedRadioBtn.value;
    // update the correct total

    
    //update the totals that is displayed on the screen.
            radioFactoryF.radioCalculate(billItemType);

            let sum = radioFactoryF.totalBill();
            let colorsRadio = colorChangeRadio(sum);

            let billInfoRadio = {
                call : radioFactoryF.callTotal(),
                sms : radioFactoryF.smsTotal(),
                total : radioFactoryF.totalBill(),
                color: colorsRadio
             };

            let compileBillInfoRadio = compileTemplateRadio(billInfoRadio);
            showTwo.innerHTML = compileBillInfoRadio;

    
    
    });

});
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen

