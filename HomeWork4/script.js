/*
Урок 8. Семинар. Циклы и массивы
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число

Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]

Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9,
и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3

*Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке,
только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

// Задание 1
const array1 = [];
for (let i = 0; i < 11; i++)
    array1.push(i);


array1.forEach(element => {
    if (element === 0)
        console.log(`${element} - это ноль`);
    else {
        str = (element % 2) ? 'не' : '';
        console.log(`${element} - ` + str + 'четное число');
    }
});

console.log('-----------------------------------------------');
// Задание 2
const array2 = [1, 2, 3, 4, 5, 6, 7];
console.log(array2);

array2.splice(3, 2);
console.log(array2);

console.log('-----------------------------------------------');
console.log('-----------------------------------------------');

// Задание 3
const array3 = [];
const maxCount = 5;
const maxNumber = 10;
for (let i = 0; i < maxCount; i++)
    array3.push(Math.floor(Math.random() * maxNumber));

console.log(array3);

// 3.1
let summa = array3.reduce((sum, item) => sum + item, 0);
console.log(`Сумма элементов = ${summa}`);

console.log('-----------------------------------------------');
// 3.2
let min = array3.reduce((min, item) => item < min ? item : min, array3[0]);
console.log(`Минимум = ${min}`);

console.log('-----------------------------------------------');

// 3.3
console.log(`В массиве есть число 3 : ` + (array3.some((value) => value === 3) ? 'да' : 'нет'));
console.log('-----------------------------------------------');

// Задание 4
for (let i = 0; i < 25; i++) {
    let tempArray = Array(i + 1);
    tempArray.fill('x', 0, i + 1);

    console.log(`${tempArray.join('')}`);
}
