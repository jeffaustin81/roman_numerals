describe('romanConvert', function() {
  it("if user input is higher then 3999 send error", function(){
    expect(romanConvert(4000)).to.equal("Roman numerals can not go higher then 3,999 or lower then 1");
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(3)).to.equal('III');
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(8)).to.equal('VIII');
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(53)).to.equal('LIII');
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(68)).to.equal('LXVIII');
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(550)).to.equal('DL');
  });

  it("Convert number to a roman numeral", function(){
    expect(romanConvert(3450)).to.equal('MMMCDL');
  });
});
