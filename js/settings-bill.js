var callsTotalBill = 0.00;
var smsTotalBill = 0.00;
 var totalCostbill = 0;


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
    }





   function addTotal()
   {
    var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    var billItem = checkedRadioBtn.value;
   
    // update the correct total
    if (billItem === "call"){
         
         if(totalCostbill < criticalVariable){
             callsTotalBill = callsTotalBill + callCostVariable ;
             //totalCostbill = totalCostbill + callCostVariable;
            }
         if (totalCostbill > criticalVariable){
             callsTotalBill = callsTotalBill + 0 ;
             callsTotalBill = totalCostbill -  callsTotalBill;
             totalCostSettings.classList.add("danger");
                // totalCostbill = totalCostbill + 0;
        }
        
    }
     if (billItem === "sms"){
         
        //smsTotalBill = smsCostVariable + smsTotalBill;
         if(totalCostbill < criticalVariable){
             smsTotalBill = smsTotalBill + smsCostVariable ;
             //totalCostbill =  totalCostbill + smsCostVariable;
            }
         if (totalCostbill > criticalVariable){  //Ended debbunging here
             alert('over!'); 
             smsTotalBill = smsTotalBill + 0;
             totalCostSettings.classList.add("danger");
                 //totalCostbill = totalCostbill + 0;
        }
    }
    totalCostbill = callsTotalBill + smsTotalBill;
    //update the totals that is displayed on the screen.
    callsTotalSettings.innerHTML = callsTotalBill.toFixed(2);
 
    smsTotalSettings.innerHTML = smsTotalBill.toFixed(2);
    
    colorSettingsUpdate() ;
   
       if (totalCostbill > criticalVariable ) 
       {
        var totalOver = totalCostbill - criticalVariable;
        totalCostbill = totalCostbill - totalOver;
       }
       totalCostSettings.innerHTML = totalCostbill.toFixed(2);
    
       
}




function colorSettingsUpdate() 
{
         
    if (totalCostbill >= warningVariable){
        totalCostSettings.classList.remove("danger");
        totalCostSettings.classList.add("warning");
    }
       
    if (totalCostbill >= criticalVariable){
        // adding the danger class will make the text red
        totalCostSettings.classList.remove("warning");
        totalCostSettings.classList.add("danger");
        
    }
   // totalCostSettings.innerHTML = totalCostbill.toFixed(2);
}

//add an event listener for when the add button is pressed
BillTotalAddBtn.addEventListener('click',addTotal);

settingsBtn.addEventListener('click',updateSettings);
