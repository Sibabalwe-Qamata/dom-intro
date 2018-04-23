function radioBillFactoryF(){
    var callsTotalradio = 0;
    var smsTotalradio = 0;
    var totalCostradio = 0;
    
    function radioCalculate(billItem)
    {
        
        if (billItem === "call")
        {
            callsTotalradio += 2.75;
            
        }
        else if (billItem === "sms")
        {
            smsTotalradio += 0.75;
        }
        totalCostradio = callsTotalradio + smsTotalradio;
    }
        function totalBill () { return totalCostradio.toFixed(2);}
        function callTotal (){ return callsTotalradio.toFixed(2);;}
        function smsTotal () {return smsTotalradio.toFixed(2);;}
    
        return{
            radioCalculate,
            totalBill,
            callTotal,
            smsTotal
        }
    
    
}