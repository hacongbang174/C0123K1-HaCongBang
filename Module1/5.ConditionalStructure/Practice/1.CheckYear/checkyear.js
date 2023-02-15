let year = parseInt(prompt("Enter a year"));
/*
if (year % 4 ==0) {
    if (year % 100 == 0) {
        if (year % 400 == 0) {
            alert(year + "is a leap year");
        }else {
            alert (year + "is NOT a leap year");}
    }else { alert(year + " is a leap year");}
}else { alert(year + "is NOT a leap year");}
*/
let isLeapYear = false;
/*
if (year % 4 ==0) {
    if (year % 100 ==0) {
        if (year % 400 ==0) {
            isLeapYear = true;
        }else isLeapYear = false;
    }
}
if (isLeapYear) { 
    alert(year + "is a leap year");
}else {
    alert(year + "is Not a leap year");
}
*/
let diviYear1 = year % 4 ==0;
if (diviYear1) {
    let diviYear2= year % 100 ==0;
    if (diviYear2) {
        let diviYear3= year % 400 ==0;
        if (diviYear3) {
            isLeapYear = true;
        }else isLeapYear = false;
    }
}
if (isLeapYear) { 
    alert(year + "is a leap year");
}else {
    alert(year + "is Not a leap year");
}

