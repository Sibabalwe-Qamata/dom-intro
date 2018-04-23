function SettingBillFactory()
{
       var callsTotalBill = 0;
       var smsTotalBill = 0;
        var totalCostbill = 0; 
    
        var warningVariable = 0;
        var criticalVariable = 0;
        var smsCostVariable =0;
        var callCostVariable =0;
        
    function setCallCost(itemCall)
    {
        
        
        return callCostVariable = itemCall ;
        
    }
    
    function setSmsCost(itemSmS)
    {
       
        
        return  smsCostVariable = itemSmS;
        
    }
    
    function setCriticalWarning(itemCritical)
    {
        criticalVariable = itemCritical;
        
        return criticalVariable;
    }
    
    function setWarning(warning)
    {
        warningVariable = warning;
        
        return warningVariable;
        
    }
    
    function addTotal(billItems)
    {
    // update the correct total
            if (billItems === "call"){
                callsTotalBill += callCostVariable;
                totalCostbill += callCostVariable;
                
//                 if(totalCostbill < criticalVariable){
//                     callsTotalBill = callsTotalBill + callCostVariable ;
//                     //totalCostbill = totalCostbill + callCostVariable;
//                    }
//                 if (totalCostbill > criticalVariable){
//                     callsTotalBill = callsTotalBill + 0 ;
//                     callsTotalBill = totalCostbill -  callsTotalBill;
                    // totalCostSettings.classList.add("danger");
                        // totalCostbill = totalCostbill + 0;
                //}

            }
             if (billItems === "sms"){

                //smsTotalBill = smsCostVariable + smsTotalBill;
                 if(totalCostbill < criticalVariable){
                     smsTotalBill = smsTotalBill + smsCostVariable ;
                     //totalCostbill =  totalCostbill + smsCostVariable;
                    }
                 if (totalCostbill > criticalVariable){  //Ended debbunging here
                     smsTotalBill = smsTotalBill + 0;
                    // totalCostSettings.classList.add("danger");
                         //totalCostbill = totalCostbill + 0;
                }
                  totalCostbill = callsTotalBill + smsTotalBill;

            }
        
   
    
        
    }
    function callTotal() {return callsTotalBill.toFixed(2);}
    function smsTotal () {return smsTotalBill.toFixed(2);}
    function total() {return totalCostbill.toFixed(2);}
    return{
            
            calls : setCallCost,
            sms: setSmsCost,
            critical: setCriticalWarning,
            warning: setWarning,
            sumCall: callTotal,
            sumSms: smsTotal,
            sumTotal: total,
            sumBill: addTotal

        }
}