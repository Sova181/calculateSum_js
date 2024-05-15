function calculateSum(array) {
    // проверка на пустой массив
    if (array.length === 0) {
      return 0;
    }

    // создаем переменную sum значением 0, для накапления суммы элементов
    let sum = 0;
  
    // перебираем каждый элемент массива
    for (let i = 0; i < array.length; i++) {
      // Проверяем, делится ли текущий элемент на 3
      if (array[i] % 3 === 0) {
        // Если да, добавляем его к сумме
        sum += array[i];
      }
    }
 
    return sum;
  }

  const coll1 = [8, 9, 21, 19, 18, 22, 7];
  console.log(calculateSum(coll1)); // Выведет: 48
  
  const coll2 = [2, 0, 17, 3, 9, 15, 4];
  console.log(calculateSum(coll2)); // Выведет: 27
  
  const coll = [];
  console.log(calculateSum(coll)); // Выведет: 0