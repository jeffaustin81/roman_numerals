

function romanConvert(num) {

    var romanArray =[];

    //if number is greater then 3999 roman numerals cant get that high bozo
    if(num > 3999) {
        return "Roman numerals can not go higher then 3,999 :(";
    }

    //take num convert to array
    var numArray = (""+num).split("");

    //flip array so we can track number place
    var flipArray = numArray.reverse();

    //set 0 to ones 1 to tens 3 to hundreds and 4 to thousands

    /*********** Ones Place ********************************/

    //Special conditions for 4, 5 and 9
    if(flipArray[0] === '4') {
        romanArray.unshift('IV');
    }

    if (flipArray[0] === '9') {
        romanArray.unshift('IX');
    }
    if (flipArray[0] === '5') {
        romanArray.unshift("V");
    }

    if((0 < parseInt(flipArray[0])) && (parseInt(flipArray[0]) < 4)) {
        var insertedNum = parseInt(flipArray[0]);

        while((5 < insertedNum) && (insertedNum < 9)) {
            romanArray.unshift("I");
            insertedNum--;

        }
    }

    if((5 < parseInt(flipArray[0])) && (parseInt(flipArray[0]) < 9)) {
        var insertedNum = parseInt(flipArray[0]);

        while((5 < insertedNum) && (insertedNum < 9)) {
            romanArray.unshift("I");
            insertedNum--;

        }
        romanArray.unshift('V');

    }
    //
    //
    // /********** Tens Place *********************************/
    // if(flipArray[1] === '4'){
    //     romanArray.unshift('XL');
    //
    // }
    // if (flipArray[1] === '9'){
    //     romanArray.unshift('XC');
    //
    // }
    // if (flipArray[1] === '5'){
    //     romanArray.unshift("L");
    // }
    //
    // /********** Hundreds Place *****************************/
    //
    // if(flipArray[2] === '4'){
    //     romanArray.unshift('CD');
    //
    // } else if (flipArray[2] === '9'){
    //     romanArray.unshift('CM');
    //
    // }
    //
    // /********* Thousand **********************************/

    var romanNumeral = romanArray.join('');
    return romanNumeral;
};
