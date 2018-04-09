
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var callsTotaltext = 0;
var smsTotaltext = 0;

// get a reference to the textbox where the bill type is to be entered
var billText = document.querySelector(".billTypeText");

//get a reference to the add button
var textTotalAddBtn = document.querySelector(".addToBillBtn");

//create a variable that will keep track of the total bill
var totalCostElementText = document.querySelector(".totalOne");

// Variables that will track the total of calls and sms
var callsTotalElementText = document.querySelector(".callTotalOne");
var smsTotalElementText = document.querySelector(".smsTotalOne");




//add an event listener for when the add button is pressed
function textBillTotal()
{
    // get the value entered in the billType textfield
    var billTypeEntered = billText.value.trim();
    // update the correct total
    if (billTypeEntered === "call"){
        callsTotaltext += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotaltext += 0.75;
    }

  
    //update the totals that is displayed on the screen.
    callsTotalElementText.innerHTML = callsTotaltext.toFixed(2);
    smsTotalElementText.innerHTML = smsTotaltext.toFixed(2);
    var totalCosttext = callsTotaltext + smsTotaltext;
    totalCostElementText.innerHTML = totalCosttext.toFixed(2);
}

function colorWarningText() {
      if(totalCostElementText.innerHTML < 30.00){
            totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.remove("danger");
         }
    
       if (totalCostElementText.innerHTML > 30.00 && 50.00 > totalCostElementText.innerHTML ){
    
             totalCostElementText.classList.remove("danger");
             totalCostElementText.classList.add("warning");
         }
         
         if(totalCostElementText.innerHTML >50.00){
             totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.add("danger");
        }
         totalCostElementText.innerHTML;
}


textTotalAddBtn.addEventListener('click',
        function()                 
        {
            textBillTotal();
            colorWarningText();
        }
);


