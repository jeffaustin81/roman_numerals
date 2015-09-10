function romanConvert(num) {


    var numeralList = [
        [1 , "I"],
        [4 , "IV"],
        [5 , "V"],
        [9 , "IX"],
        [10 , "X"],
        [40 , "XL"],
        [50 , "L"],
        [90 , "XC"],
        [100 , "C"],
        [400 , "CD"],
        [500 , "D"],
        [900 , "CM"],
        [1000 , "M"]
    ];

    var romanArray = [];

    for(var i = 12; i >= 0; i--){

        var flooredNum = Math.floor(num/numeralList[i][0]) * numeralList[i][0];
        console.log(flooredNum);

        if(num >= flooredNum)
        {

            if(numeralList[i][0] <= flooredNum)
            {

                while(flooredNum > 0)
                {
                    romanArray.push(numeralList[i][1]);
                    num = num - numeralList[i][0];
                    flooredNum = flooredNum - numeralList[i][0];
                }
            }
        }
    }
    var romanNumeral = romanArray.join('');
    return romanNumeral;
}
