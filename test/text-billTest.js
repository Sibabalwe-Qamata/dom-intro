describe("The text-Bill function", function(){

  it("It should return the total cost that is equal to '2.75' for one call made", function(){
    var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal("call");
    assert.equal(textBill1.callCostTotal(), 2.75);
	 assert.equal(textBill1.smsCostTotal(), 0.00);
	   assert.equal(textBill1.textBillTotal(), 2.75);
	
  });
    
 it("It should return the total cost that is equal to '0.75' for one sms made", function(){
    var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal("sms");
    assert.equal(textBill1.smsCostTotal(),0.75);
	  assert.equal(textBill1.callCostTotal(),0.00);
	  assert.equal(textBill1.textBillTotal(),0.75);

  });
    
  it("It should return the total cost that is equal to '0.00' for empty strings", function(){
     var textBill1 = Text_billFactoryF();
	textBill1.textBillTotal(" ");
	 textBill1.textBillTotal(" ");
      assert.equal(textBill1.smsCostTotal(),0.00);
	  assert.equal(textBill1.callCostTotal(),0.00);
	  assert.equal(textBill1.textBillTotal(),0.00);

  });


});