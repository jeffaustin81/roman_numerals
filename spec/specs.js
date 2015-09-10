describe('romanConvert', function() {
  it("if user input is higher then 3999 send error", function(){
    expect(romanConvert(4000)).to.equal("Roman numerals can not go higher then 3,999 :(");
  });

  it("Convert number to an array of strings", function(){
    expect(romanConvert(8)).to.equal('VIII');
  });
});
