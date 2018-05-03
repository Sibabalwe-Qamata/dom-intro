function billPhone(){
	
	 function PhoneBill(bill)
        {
         
          var billsArray = bill.split(",");
          var totalBill = 0;
            for(var i=0; i < billsArray.length; i++)
			{

      		if(billsArray[i].trim() === 'call'){totalBill += 2.75;}
		    else if(billsArray[i].trim() === 'sms'){totalBill += 0.75;}
   			}
			
			return totalBill.toFixed(2);
		}

		return{
			phone: PhoneBill
		}
}