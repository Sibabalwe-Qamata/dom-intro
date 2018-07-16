
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen




// get a reference to the textbox where the bill type is to be entered

"use strict";

document.addEventListener('DOMContentLoaded', function() 
{

var billText = document.querySelector(".billTypeText");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill


// Variables that will track the total of calls and sms
var callsTotalElementText = document.querySelector(".callTotalOne");
var smsTotalElementText = document.querySelector(".smsTotalOne");

//add an event listener for when the add button is pressed 

//Handlebars references
let show = document.querySelector('.showOne');
let templateBill = document.querySelector('.TemplateBill').innerHTML;
let compileTemplate = Handlebars.compile(templateBill);


let totalCostElementText = document.querySelector(".totalOne");
//Get the object to show the Data
let billInfo = {
    call : 0.00.toFixed(2),
    sms : 0.00.toFixed(2),
    total : 0.00.toFixed(2)
 };
 let compileInfo = compileTemplate(billInfo);
 show.innerHTML = compileInfo;

 var text_Bill = Text_billFactoryF();
textTotalAddBtn.addEventListener('click',
        function()                 
        {
           
            var billTypeEntered = billText.value.trim();
            //console.log(billTypeEntered);
            let sum = text_Bill.textBillTotal(billTypeEntered);
          

            let billInfo = {
                call : text_Bill.callCostTotal(),
                sms : text_Bill.smsCostTotal(),
                total : sum
             };

            let compileBillInfo = compileTemplate(billInfo);
            show.innerHTML = compileBillInfo;
           
            
       if(sum < 30.00){
           // totalCostElementText.classList.remove("warning");
             //totalCostElementText.classList.remove("danger");
         }
    
       if (sum> 30.00 && 50.00 > sum){
    
             //totalCostElementText.classList.remove("danger");
             totalCostElementText.classList.add("warning");
         }
         
         if(sum >50.00){
             //totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.add("danger");
         }
    
        }
                          
    );
});

