// ------- TASK 1 ---------
let city;
city = 'Київ';
city = 'Львів';
let address = city;
console.log('-----TASK 1-----\n', address);
// ------- TASK 2 -------
let num = Number(prompt('Введіть число'));
let message = num % 2 == 0 ? "Число парне" : num % 2 > 0 ? "Число непарне" : "Число 0";
console.log('\n-----TASK 2-----\n', message);
// ------- TASK 3 ------
function maxNum(...arg) {
    return Math.max(...arg);
}
console.log('\n-----TASK 3-----\n', maxNum(1, 8, 14, 3, 0, -3, 22, 5));
// ------- TASK 4 ------
function getSqrt(number) {
    if (typeof number == 'number' && number > 0)
        return `Квадратний корінь з ${number} дорівнює ${Math.sqrt(number)}`;
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
const form = document.forms['badWords__form'], formCheck = document.forms['badWords__form-check'], wordsList = document.querySelector('.bad-words__list_list');
form.add.addEventListener('click', (e) => {
    e.preventDefault();
    let wordMas = wordsList.textContent.split(', ');
    let newWord = form.word.value;
    if (!wordMas.includes(newWord)) {
        wordsList.textContent += ', ' + newWord;
    }
    else {
        form.word.value = '';
        form.word.placeholder = 'Таке слово вже є в списку';
    }
});
form.resett.addEventListener('click', (e) => {
    e.preventDefault();
    wordsList.textContent = '';
});
formCheck.check.addEventListener('click', (e) => {
    e.preventDefault();
    let wordMas = wordsList.textContent.split(', ');
    let text = formCheck.text.value;
    console.log(wordMas);
    wordMas.forEach(el => {
        let substitute = '*';
        text = text.replace(el, substitute.repeat(el.length));
    });
    formCheck.text.value = text;
});
console.log('\n-----TASK 5-----\n', 'Watch result in textarea');
