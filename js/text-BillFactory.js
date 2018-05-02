
function Text_billFactoryF () 
{

	var callsTotaltext = 0;
    var smsTotaltext = 0;


    function textBillTotal(billType)
	{
		    // get the value entered in the billType textfield
		   
		    // update the correct total
		    if (billType === "call"){
		        callsTotaltext += 2.75;
		        callsTotaltext.toFixed(2);
		    }
		    else if (billType === "sms"){
		        smsTotaltext += 0.75;
		        smsTotaltext.toFixed(2);
		    }

		    var totalCosttext = callsTotaltext + smsTotaltext;
		 
		    return totalCosttext.toFixed(2);
	}


	function callCostTotal () {
		return callsTotaltext.toFixed(2);
		
	}

	function smsCostTotal () {
		return  smsTotaltext.toFixed(2);
		
	}



	return {
			textBillTotal,
			callCostTotal,
			smsCostTotal
	}

}