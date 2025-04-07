// Умение работать с массивами - это важный навык
// при разработке React-приложений. Часто нужно отрисовать
// список элементов, сделать сортировку или фильтрацию.
// С помощью этих уражнений вы сможете научиться работать
// с массивами на JavaScript, а также привыкнуть к синтаксису
// нового языка программирования.

// Вы можете выполнять упражнения как в песочнице codesandbox,
// так и у себя на компьютере. Чтобы начать работать в codesandbox:
// 1. нажмите Sign In в правом верхнем углу,
// 2. зарегистрируйтесь по гугл-почте или гитхабу,
// 3. затем нажмите Fork также в правом верхнем углу.
// У вас появится своя копия проекта для работы.

// Для работы на своем комьпьютере 
// склонируйте репозиторий https://github.com/ivannetreba/foundation-of-frontend.git

// 1. Клонирование массива

// Напишите функцию на JavaScript для клонирования массива.

function array_Clone(arr) {
    const new_arr = [...arr];
    return new_arr
}

// Тестовые данные:
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

// Ожидаемый вывод:
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

// 2. Первые элементы массива

// Напишите функцию на JavaScript для получения первого элемента массива.
// Передавая параметр 'n', можно получить первые 'n' элементов массива.

function first(arr, n) {
    if (n !== undefined) {  
        return arr.slice(0, n);  
    }
    return arr[0];  
}
// Тестовые данные:
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));

// Ожидаемый вывод:
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

// 3. Последние элементы массива

// Напишите функцию на JavaScript для получения последнего элемента массива.
// Передавая параметр 'n', можно получить последние 'n' элементов массива.

function last(arr, n) {
    if (n !== undefined) {
        return arr.slice(-n);
    }
    return arr[arr.length - 1];  // Правильный способ получить последний элемент
}

// Тестовые данные:
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));

// Ожидаемый вывод:
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

// 4. Соединение элементов массива

// Напишите простую программу на JavaScript для объединения
// всех элементов следующего массива в строку.

function concat(arr, synmbol){
    if (synmbol !== undefined){
        return arr.join(synmbol)
    }
    return arr.join(', ')
}

// Пример массива: `myColor = ["Red", "Green", "White", "Black"];`
const myColor = ["Red", "Green", "White", "Black"];
// console.log(concat(myColor));
// console.log(concat(myColor));
// console.log(concat(myColor, '+'));
// Ожидаемый вывод:
// "Red,Green,White,Black"
// "Red,Green,White,Black"
// "Red+Green+White+Black"

// 5. Вставка дефисов между четными числами

// Напишите программу на JavaScript, которая принимает число
// в качестве ввода и вставляет дефисы (-) между каждым чётным числом.
// Например, если ввести 025468, вывод должен быть 0-254-6-8.

function insertHyphensBetweenEvens(num) {
    // Преобразуем число в строку для работы с отдельными цифрами
    const str = num.toString();
    let result = [];
    
    for (let i = 0; i < str.length; i++) {
      // Добавляем текущую цифру в результат
      result.push(str[i]);
      
      // Проверяем, нужно ли вставить дефис
      if (i < str.length - 1) {
        const current = parseInt(str[i], 10);
        const next = parseInt(str[i + 1], 10);
        
        // Если обе цифры четные, добавляем дефис
        if (current % 2 === 0 && next % 2 === 0) {
          result.push('-');
        }
      }
    }
    
    // Собираем результат в строку
    return result.join('');
  }
  
  // Пример использования
  console.log(insertHyphensBetweenEvens('025468')); // Выведет "0-254-6-8"
  console.log(insertHyphensBetweenEvens(246824)); // Выведет "2-4-6-8-2-4"
  console.log(insertHyphensBetweenEvens(13579));  // Выведет "13579" (без изменений)
  console.log(insertHyphensBetweenEvens(224466)); // Выведет "2-2-4-4-6-6"

// 6. Сортировка массива

// Напишите программу на JavaScript для сортировки элементов массива.

function sortDescWithMathMax(arr) {
    const result = [];
    const temp = [...arr];
    
    while (temp.length) {
      const min = Math.min(...temp);
      const index = temp.indexOf(min);
      temp.splice(index, 1);
      result.push(min);
    }
    
    return result;
  }

// Пример массива:
const arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// console.log(sortDescWithMathMax(arr1))

// Ожидаемый вывод:
// -4,-3,1,2,3,5,6,7,8

// 7. Самый частый элемент массива

// Напишите программу на JavaScript для нахождения самого частого элемента в массиве.
function mostFreq(arr){
    const count = {};
    let maxCount = 0;
    let mostFrequent;

    arr.forEach(item => {
        count[item] = (count[item] || 0) + 1;
        if (count[item] > maxCount) {
        maxCount = count[item];
        mostFrequent = item;
        }
    });

    return mostFrequent;
}

// Пример массива:
// const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Ожидаемый вывод:
// a ( 5 раз )

// 8. Переключение регистра в строке

// Напишите программу на JavaScript, которая принимает строку и
// меняет регистр каждого символа.
// Например, если ввести 'The Quick Brown Fox',
// вывод должен быть 'tHE qUICK bROWN fOX'.

function swapCase(str) {
    return str.split('').map(c => 
      c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()
    ).join('');
  }

// 9. Сумма квадратов элементов массива

// Напишите программу на JavaScript для нахождения
// суммы квадратов чисел в массиве.

function squareSum(arr){
  return arr.reduce((accumulator, currentValue) => accumulator + currentValue*currentValue, 0)
}

console.log(squareSum([2, 7, 14]))

// 10. Сумма и произведение элементов массива

// Напишите программу на JavaScript для вычисления суммы и
// произведения элементов массива целых чисел.

function sumAndComposition(arr){
  let summa = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let composition = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
  return ['sum: ',summa, 'composition: ', composition]
}

// console.log(sumAndComposition([4,2,3]))

// 11. Удаление дубликатов

// Напишите программу на JavaScript для удаления дублирующихся
// элементов из массива (игнорируя чувствительность к регистру).

function removeDuplicates(arr){
  let map = []
  for (let element of arr){
    if (map.indexOf(element.toLowerCase()) === -1){
      map.push(element.toLowerCase())
    }
  }
  return map
}

// console.log(removeDuplicates(['cat', 'Cat', 'dog']))

// 12. Вывод цветов с порядковыми номерами

// У нас есть следующие массивы:
// color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// o = ["th", "st", "nd", "rd"]
// Напишите программу на JavaScript для отображения цветов в следующем формате:
// "1st choice is Blue."
// "2nd choice is Green."
// "3rd choice is Red."
// Примечание: Используйте порядковые числительные для указания их позиции.

function colorFunc(color, p){
  for (let i = 0; i < 3; i++){
    console.log(`"${i + 1}${p[i + 1]} choice is ${color[i]}"`)
  }
}

let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let o = ["th", "st", "nd", "rd"]
colorFunc(color, o)