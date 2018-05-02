describe("The Radio Button function", function(){

          it("It should return the total cost (i.e : 5.50) for two calls made.", function(){
			 
			 var radioTest = radioBillFactoryF();
			 radioTest.radioCalculate("call");
			  radioTest.radioCalculate("call");
			
			  
			     assert.equal(radioTest.callTotal(), 5.50);
      		  	assert.equal(radioTest.smsTotal(), 0.00);
      			assert.equal(radioTest.totalBill(), 5.50);


          });

         it("It should return the total cost (i.e : 1.50) for two sms made.", function(){

			  	var radioTest = radioBillFactoryF();
			 	radioTest.radioCalculate("sms");
			  	radioTest.radioCalculate("sms");
			
			  
			     assert.equal(radioTest.callTotal(), 0.00);
      		  	assert.equal(radioTest.smsTotal(), 1.50);
      			assert.equal(radioTest.totalBill(), 1.50);


          });

          it("It should return the total cost for the sum of the  two sms and two calls (i.e 7.00)", function(){
			  
	var radioTest = radioBillFactoryF();
			 	radioTest.radioCalculate("sms");
			  	radioTest.radioCalculate("sms");
			    radioTest.radioCalculate("call");
			    radioTest.radioCalculate("call");
			  
			     assert.equal(radioTest.callTotal(), 5.50);
      		  	assert.equal(radioTest.smsTotal(), 1.50);
      			assert.equal(radioTest.totalBill(), 7.00);

          });

});