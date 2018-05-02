describe("The Calculate Bill function", function(){

          it("It should return the total cost that is equal to '2.75' for one call made", function()
		  {
			   var calculate = calculatebillFactoryF();
			   calculate.calc("call");
			   assert.equal(calculate.calc(),2.75);


          });

         it("It should return the total cost that is equal to '0.75' for one sms made", function(){
 			   var calculate = calculatebillFactoryF();
 			   calculate.calc("sms");
			   assert.equal(calculate.calc(),0.75);

           });
	      it("It should return the total cost that is equal to '3.50' for one sms and one call made", function(){
 			   var calculate = calculatebillFactoryF();
 			   calculate.calc("call,sms");
			   assert.equal(calculate.calc(), 3.50);

           });
    
});



