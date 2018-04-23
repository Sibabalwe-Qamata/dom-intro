describe("The text-Bill function", function(){

  it("It should return the total cost for the sum of the calls", function(){
    var textBill1 = Text_billFactoryF();
    textBill1.textBillTotal();
    assert.equal(2.75, textBill1.textBillTotal("call"));

  });
    
 it("It should return the total cost for the sum of the sms", function(){
    var textBill1 = Text_billFactoryF();
    textBill1.textBillTotal();
    assert.equal(0.75, textBill1.textBillTotal("sms"));

  });
    
  it("It should return the total cost for the sum of the sms", function(){
    var textBill1 = Text_billFactoryF();
    textBill1.textBillTotal();
    assert.equal(0.75, textBill1.textBillTotal("sms"));

  });


});