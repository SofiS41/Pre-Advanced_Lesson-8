// ------- TASK 1 ---------
var city;
city = 'Київ';
city = 'Львів';
var address = city;
console.log('-----TASK 1-----\n', address);
// ------- TASK 2 -------
// let num: number = Number(prompt('Введіть число'));
// let message: string = num%2 == 0 ? "Число парне" : num%2 > 0 ? "Число непарне" : "Число 0";
// console.log('\n-----TASK 2-----\n', message);
// ------- TASK 3 ------
function maxNum() {
    var arg = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arg[_i] = arguments[_i];
    }
    return Math.max.apply(Math, arg);
}
console.log('\n-----TASK 3-----\n', maxNum(1, 8, 14, 3, 0, -3, 22, 5));
// ------- TASK 4 ------
function getSqrt(number) {
    if (typeof number == 'number' && number > 0)
        return "\u041A\u0432\u0430\u0434\u0440\u0430\u0442\u043D\u0438\u0439 \u043A\u043E\u0440\u0456\u043D\u044C \u0437 ".concat(number, " \u0434\u043E\u0440\u0456\u0432\u043D\u044E\u0454 ").concat(Math.sqrt(number));
    else if (typeof number !== 'number' && typeof number !== 'undefined')
        return 'Повинно бути числове значення';
    else if (typeof number == 'number' && number <= 0)
        return 'Введіть додатнє число';
    else
        return 'Будь ласка, введіть число';
}
console.log('\n-----TASK 4-----\n 1 - стрічка - ', getSqrt('10'));
console.log('2 - відємне число - ', getSqrt(-10));
console.log('3 - нічого не ввели - ', getSqrt());
console.log('4 - ввели число - ', getSqrt(25));
// ------- TASK 5 -------
var form = document.forms['badWords__form'];
console.log('\n-----TASK 5-----\n', form);
