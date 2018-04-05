
//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen


var callsTotal = 0;
var smsTotal = 0;

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
        callsTotal += 2.75;
    }
    else if (billTypeEntered === "sms"){
        smsTotal += 0.75;
    }
    console.log("calls",callsTotal);
    console.log("sms",smsTotal);
    
  
    //update the totals that is displayed on the screen.
    callsTotalElementText.innerHTML = callsTotal.toFixed(2);
    smsTotalElementText.innerHTML = smsTotal.toFixed(2);
    var totalCost = callsTotal + smsTotal;
    totalCostElementText.innerHTML = totalCost.toFixed(2);
    
    
      //console.log("Total cost: ",totalCost);
    //color the total based on the criteria
    if (totalCost >= 50){
        // adding the danger class will make the text red
        //callsTotalElem.innerHTML = callsTotal.toFixed(2);
        //smsTotalElem.innerHTML = smsTotal.toFixed(2);
        totalCostElementText.classList.add("danger");
    }
    else if (totalCost >= 30){
        totalCostElementText.classList.add("warning");
        //callsTotalElem.innerHTML = callsTotal.toFixed(2);
        //smsTotalElem.innerHTML = smsTotal.toFixed(2);
    }
}

textTotalAddBtn.addEventListener('click', textBillTotal);


