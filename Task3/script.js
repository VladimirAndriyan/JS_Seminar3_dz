// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let userNum1 = Number(prompt('Введите 1 число'));
let userNum2 = Number(prompt('Введите 2 число'));
let userNum3 = Number(prompt('Введите 3 число'));

const findMax = (num1, num2, num3) => {
    let max = num1;
    if (num2 > max) {
        max = num2;
    }
    if (num3 > max) {
        max = num3;
    }
    return max;
}
console.log(`Максимальное число ${findMax(userNum1,userNum2,userNum3)}`);