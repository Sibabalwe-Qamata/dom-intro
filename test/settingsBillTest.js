describe("The Settings Update function", function(){

  it("It should return the total for a call", function(){
   
      var settings = SettingBillFactory();
      settings.sms(2.50);
      
      settings.calls(5.00);
      settings.critical(10.00);
      settings.warning(5.00);
      
      settings.sumBill('call');
      
      assert.equal(settings.sumCall(), 5.00);
      assert.equal(settings.sumSms(), 0.00);
      assert.equal(settings.sumTotal(), 5.00);
      
  });
	
	it("It should return the total for an sms", function(){
  
      var settings = SettingBillFactory();
      settings.sms(2.50);
      
      settings.calls(5.00);
         settings.critical(12.00);
      settings.warning(6.00);
      
      settings.sumBill('sms');
      
      assert.equal(settings.sumCall(), 0.00);
     assert.equal(settings.sumSms(), 2.50);
     assert.equal(settings.sumTotal(), 2.50);
    
 });

    
 it("It should calculate the total for a call and sms", function(){
  
       var settings = SettingBillFactory();
      settings.sms(2.50);
      
      settings.calls(5.00);
      settings.critical(12.00);
      settings.warning(9.00);
      
      settings.sumBill('sms');
	  settings.sumBill('call');
      
    
      
      assert.equal(settings.sumCall(), 5.00);
      assert.equal(settings.sumSms(), 2.50);
       assert.equal(settings.sumTotal(), 7.50);
  });
   
 it("It should calculate total for multiple calls", function(){
  
   var settings = SettingBillFactory();
      settings.sms(2.50);
      
      settings.calls(5.00);
      settings.critical(15.00);
      settings.warning(7.00);
      
      settings.sumBill('call');
	  settings.sumBill('call');
	  settings.sumBill('call');
	  settings.sumBill('call');
     
     assert.equal(settings.sumCall(), 20.00);
      assert.equal(settings.sumSms(), 0.00);
       assert.equal(settings.sumTotal(), 20.00);
  
 });
   
 it("It should calculate total for multiple sms", function(){
  
   var settings = SettingBillFactory();
      settings.sms(2.50);
      
      settings.calls(5.00);
      settings.critical(20.00);
      settings.warning(18.00);
      
      settings.sumBill('sms');
	     settings.sumBill('sms');
	     settings.sumBill('sms');
	      settings.sumBill('sms');
     
     assert.equal(settings.sumCall(), 0.00);
      assert.equal(settings.sumSms(), 10.00);
       assert.equal(settings.sumTotal(), 10.00);
  
 });


});