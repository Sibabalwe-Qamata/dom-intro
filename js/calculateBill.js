function calculatebillFactoryF() 
{
    function calculateBillTotal(billType)
	{

		   var billTotal = 0;
            //loop over all the bill items
            for (var i=0;i<billType.length;i++)
            {
                var billItem = billType[i].trim();
                if (billItem === "call"){
                    billTotal += 2.75;
                }
                else if (billItem === "sms"){
                    billTotal += 0.75;
                }
            }
             var roundedBillTotal = billTotal.toFixed(2);

		    return roundedBillTotal;
	}


	return {
			calculateBillTotal,
	       }

}