function calculatebillFactoryF(billValue) 
{

    
   var billTotal = 0;
   
       console.log('billValue : '+billValue);
       
        var calculateItems = billValue.split(',');

                console.log('items :'+calculateItems);

        for (var i =0; i<calculateItems.length;i++) {
            //var billItem = billType[i];
            //console.log(billItem);
            if (calculateItems[i] === "call"){

                billTotal += 2.75;
            }
            else if (calculateItems[i] === "sms"){
                billTotal += 0.75;
            }
        }
        return billTotal;
   
    

    /**function getTotal(){
        return billTotal.toFixed(2);
         
    }**/

	// return {
 //            calc :calculate,
            
	//        }


}

//calculatebillFactoryF().calc("call, sms");
console.log("The total is "+ calculatebillFactoryF("call"));