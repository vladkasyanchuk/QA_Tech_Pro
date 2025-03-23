//Напишіть регулярний вираз, який знайде послідовність з шести або більше символів, 
// які не містять літери «А» (великої або малої)

var str = " Wonderful";
var str2 = "Joyful";
var str3 = "Happiness";
var str4 = "Time";
var str5 = "Task";
var str6 = "Apple";
var regex = /^[^aA]{6,}$/;
console.log(regex.test(str));
console.log(regex.test(str2));
console.log(regex.test(str3));
console.log(regex.test(str4));
console.log(regex.test(str5));
console.log(regex.test(str6));