var callsTotalBill = 0.00;
var smsTotalBill = 0.00;


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
var warningVariable = 0;
var criticalVariable = 0;
var smsCostVariable =0;
var callCostVariable =0;
// create a variables that will keep track of all three totals.
var totalCostSettings = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed



 function updateSettings()
    {
       var call_billSettingEntered = callCostStt.value;
       var sms_billSettingEntered = smsCostStt.value;
       var warning_billSettingEntered = warningLevel.value;
       var critical_billSettingEntered = criticalLevel.value;
    
       callCostVariable = parseFloat(call_billSettingEntered); 
       smsCostVariable =  parseFloat(sms_billSettingEntered);
       criticalVariable =  parseFloat(critical_billSettingEntered);
       warningVariable = parseFloat(warning_billSettingEntered);
       //console.log("Call:",callCostVariable);
       //console.log("SMS:",smsCostVariable);
       //console.log("critical:",criticalVariable);
       //console.log("warning:", warningVariable);
    }
settingsBtn.addEventListener('click',updateSettings);

//add an event listener for when the add button is pressed
BillTotalAddBtn.addEventListener('click',
   function()
   {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItem = checkedRadioBtn.value;
   
    // update the correct total
    if (billItem === "call"){
         callsTotalBill = callCostVariable + callsTotalBill;
        
    }
    else if (billItem === "sms"){
        smsTotalBill =  smsCostVariable + smsTotalBill ;
    }
    console.log("calls",callsTotalBill);
    console.log("sms",smsTotalBill);
    //update the totals that is displayed on the screen.
    callsTotalSettings.innerHTML = callsTotalBill.toFixed(2);
 
    smsTotalSettings.innerHTML = smsTotalBill.toFixed(2);

    var totalCostbill = callsTotalBill + smsTotalBill;
    totalCostSettings.innerHTML = totalCostbill.toFixed(2);
    console.log("total",totalCostbill);
    //color the total based on the criteria
    
    if (totalCostbill >= criticalVariable){
        // adding the danger class will make the text red
        totalCostSettings.classList.add("danger");
    }
    else if (totalCostbill >= warningVariable){
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
