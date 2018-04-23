

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

		  
		    //update the totals that is displayed on the screen.
		    //callsTotalElementText.innerHTML = callsTotaltext.toFixed(2);
		    //smsTotalElementText.innerHTML = smsTotaltext.toFixed(2);
		    var totalCosttext = callsTotaltext + smsTotaltext;
		    //totalCostElementText.innerHTML = totalCosttext.toFixed(2);

		    return totalCosttext.toFixed(2);
	}


	function callCostTotal () {
		return callsTotaltext.toFixed(2);
		// body...
	}

	function smsCostTotal () {
		return  smsTotaltext.toFixed(2);
		// body...
	}

/**function colorWarningText() 
	{
      if(totalCosttext < 30.00){
            totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.remove("danger");
         }
    
       if (totalCosttext > 30.00 && 50.00 > totalCosttext ){
    
             totalCostElementText.classList.remove("danger");
             totalCostElementText.classList.add("warning");
         }
         
         if(totalCosttext >50.00){
             totalCostElementText.classList.remove("warning");
             totalCostElementText.classList.add("danger");
        }
       return totalCosttext;
	}  **/


	return {
			textBillTotal,
			callCostTotal,
			smsCostTotal
	}

}