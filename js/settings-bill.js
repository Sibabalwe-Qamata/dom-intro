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



	
	
	
function updateSetting()
{
	    var newCallCost = callCostStt.value;
		settingsUpdate.calls(newCallCost);
        var newSmsCost = smsCostStt.value;
		settingsUpdate.sms(newSmsCost);
        var newWarningSetting= warningLevel.value;
		settingsUpdate.warning(newWarningSetting);
        var newCriticalSetting = criticalLevel.value;
		settingsUpdate.critical(newCriticalSetting);
    
       /** var callCostSetting = settingsUpdate.setCallCost(call_billSettingEntered); 
        var smsCostVariable = settingsUpdate.setSmsCost(sms_billSettingEntered);
        var criticalVariable =  settingsUpdate.setCriticalWarning(call_billSettingEntered);
        var warningVariable = settingsUpdate.setWarning(call_billSettingEntered);**/ 
	
}

	
function addBill()
{
	 var settingRadioItem = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	
	if(settingRadioItem)
	   {
	   	 var Billtype = settingRadioItem.value.trim();
		 settingsUpdate.sumBill(Billtype);
		   
	   }
	
	 callsTotalSettings.innerHTML = settingsUpdate.sumCall();
	 smsTotalSettings.innerHTML = settingsUpdate.sumSms();
	 totalCostSettings.innerHTML = settingsUpdate.sumTotal();

	 //console.log(settingsUpdate.sumTotal);
		
}


function colorSettingsUpdate() 
{
	var colorWarningTotal = settingsUpdate.sumTotal();
	var colorWarningLevel = settingsUpdate.getWarning();
	
	var colorCriticalLevel = settingsUpdate.getCritical();
         
    if (colorWarningTotal  >= colorWarningLevel){
        totalCostSettings.classList.remove("danger");
        totalCostSettings.classList.add("warning");
    }
       
    if ( colorWarningTotal  >= colorCriticalLevel) {
        // adding the danger class will make the text red
        totalCostSettings.classList.remove("warning");
        totalCostSettings.classList.add("danger");   
    }
 
}

//add an event listener for when the add button is pressed
settingsBtn.addEventListener('click',updateSetting);
BillTotalAddBtn.addEventListener('click',
	function(){
		addBill();
		colorSettingsUpdate();
	});


});


