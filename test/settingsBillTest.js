describe("The Settings Update function", function(){

  it("It should calculate the total for a call", function(){
   
      var settings = SettingBillFactory();
      console.log(settings);
      settings.sms(2.50);
      
      settings.calls(5.00);
      
      settings.sumBill('call');
      
      assert.equal(settings.sumCall(), 5.00);
      assert.equal(settings.sumSms(), 0.00);
      assert.equal(settings.sumTotal(), 5.00);
      
  });
    
//  it("It should calculate the total for a call and sms", function(){
//   
//      var settingsBillFactory = SettingBillFactory();
//      //settingsBillFactory.setSmsCost(2.50);
//      //settingsBillFactory.setCallCost(5.00);
//      
//      settingsBillFactory.addTotal('call');
//      settingsBillFactory.addTotal('sms');
//      
//      assert.equal(settingsBillFactory.callTotal(), 5.00);
//      assert.equal(settingsBillFactory.smsTotal(), 2.50);
//      assert.equal(settingsBillFactory.total(), 7.50);
//      
//  });
//    
// it("It should calculate total for multiple calls", function(){
//    
//     var settingsBillFactory = SettingBillFactory();
//      //settingsBillFactory.setSmsCost(2.50);
//     // settingsBillFactory.setCallCost(5.00);
//      
//      settingsBillFactory.addTotal('call');
//      settingsBillFactory.addTotal('call');
//      settingsBillFactory.addTotal('call');
//      settingsBillFactory.addTotal('call');
//      
//      assert.equal(settingsBillFactory.callTotal(), 20.00);
//      assert.equal(settingsBillFactory.smsTotal(), 0.00);
//      assert.equal(settingsBillFactory.total(), 20.00);
//   
//
//  });
//    
//  it("It shou calculate the total for an sms", function(){
//    
//      var settingsBillFactory = SettingBillFactory();
//      //settingsBillFactory.setSmsCost(2.50);
//      //settingsBillFactory.setCallCost(5.00);
//      
//      settingsBillFactory.addTotal('sms');
//      
//      assert.equal(settingsBillFactory.callTotal(), 0.00);
//      assert.equal(settingsBillFactory.smsTotal(), 2.50);
//      assert.equal(settingsBillFactory.total(), 2.50);
//    
//  });


});