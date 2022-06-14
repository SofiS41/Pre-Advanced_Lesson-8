// ------- TASK 1 ---------
let city: string;
city = 'Київ';
city = 'Львів';
let address: string = city;
console.log('-----TASK 1-----\n', address);


// ------- TASK 2 -------
let num: number = Number(prompt('Введіть число'));
let message: string = num%2 == 0 ? "Число парне" : num%2 > 0 ? "Число непарне" : "Число 0";
console.log('\n-----TASK 2-----\n', message);


// ------- TASK 3 ------
function maxNum(...arg: Array<number>): number{
     return Math.max(...arg);
}
console.log('\n-----TASK 3-----\n', maxNum(1, 8, 14, 3, 0, -3, 22, 5));


// ------- TASK 4 ------
function getSqrt(number?: unknown): string{
    if(typeof number == 'number' && number > 0) return `Квадратний корінь з ${number} дорівнює ${Math.sqrt(number)}`;
    else if(typeof number !== 'number' && typeof number !== 'undefined') return 'Повинно бути числове значення';
    else if(typeof number == 'number' && number <= 0) return 'Введіть додатнє число';
    else return 'Будь ласка, введіть число';
}
console.log('\n-----TASK 4-----\n 1 - стрічка - ', getSqrt('10'));
console.log('2 - відємне число - ', getSqrt(-10));
console.log('3 - нічого не ввели - ', getSqrt());
console.log('4 - ввели число - ', getSqrt(25));


// ------- TASK 5 -------
