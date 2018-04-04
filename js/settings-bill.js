var callsTotalBill = 0;
var smsTotalBill = 0;

var warningVariable = 0;
var criticalLevel = 0;
// get a reference to the sms or call radio buttons
var callsTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
var callCostStt = document.querySelector(".callCostSetting");
var smsCostStt = document.querySelector(".smsCostSetting");
var warningLevel = document.querySelector(".warningLevelSetting");
var criticalLevel = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
var BillTotalAddBtn = document.querySelector(".BillAddBtn");

//get a reference to the 'Update settings' button
var settingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
//var settings = document.querySelector();
// create a variables that will keep track of all three totals.
var totalCostSettings = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed
settingsBtn.addEventListener('click', 
    function()
    {
       
    }
);

//add an event listener for when the add button is pressed
BillTotalAddBtn.addEventListener('click',
    function()
   {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItem = checkedRadioBtn.value;
    console.log(billItem);
    // update the correct total
    if (billItem === "call"){
        callsTotalBill += 2.75
        
    }
    else if (billItem === "sms"){
        smsTotalBill += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callsTotalSettings.innerHTML = callsTotalBill.toFixed(2);
    console.log(callsTotalSettings);
    smsTotalSettings.innerHTML = smsTotalBill.toFixed(2);
    console.log(smsTotalSettings);
    var totalCostbill = callsTotalBill + smsTotalBill;
    totalCostSettings.innerHTML = totalCostbill.toFixed(2);
    //color the total based on the criteria
    
    console.log(totalCostbill);
    if (totalCostbill >= 50){
        // adding the danger class will make the text red
        totalCostSettings.classList.add("danger");
    }
    else if (totalCostbill >= 30){
        totalCostSettings.classList.add("warning");
    }
  }
);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
