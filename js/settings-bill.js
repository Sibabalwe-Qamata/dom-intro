document.addEventListener('DOMContentLoaded', function() 
{
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

// create a variables that will keep track of all three totals.
var totalCostSettings = document.querySelector(".totalSettings");
//add an event listener for when the 'Update settings' button is pressed


var settingsUpdate = SettingBillFactory();



    

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
 
}

//add an event listener for when the add button is pressed
BillTotalAddBtn.addEventListener('click', function()
{
    
    
    
    
    
    
});

settingsBtn.addEventListener('click',function()
    {
        var call_billSettingEntered = parseFloat(callCostStt.value);
        var sms_billSettingEntered = parseFloat(smsCostStt.value);
        var warning_billSettingEntered = parseFloat(warningLevel.value);
        var critical_billSettingEntered = parseFloat(criticalLevel.value);
    
        var callCostSetting = settingsUpdate.setCallCost(call_billSettingEntered); 
        var smsCostVariable = settingsUpdate.setSmsCost(sms_billSettingEntered);
        var criticalVariable =  settingsUpdate.setCriticalWarning(call_billSettingEntered);
        var warningVariable = settingsUpdate.setWarning(call_billSettingEntered);
    
    });
    
});
