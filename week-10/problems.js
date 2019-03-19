
/** Array Functions **/
/*
0. 
  Sa se scrie o functie care primeste array-ul de mai jos ca parametru
  si returneaza un array de numere unde toate numerele au fost adunate cu 2
*/

var strArr = ['13', '2', '34', '14', '5', '86', '3.46'];

function typeCastAndAdd(strArr) {
  var newArr = [];

  for (var i = 0; i < strArr.length; i++) {
    newArr.push(parseFloat(strArr[i]) + 2);
  }

  return newArr;
}
console.log('Typecast: ', typeCastAndAdd(strArr));

/* 
1. 
  Sa se implementeze o functie care primeste un array de obiecte si un nume de cheie
  si returneaza un array cu toate valorile corespunzatoare cheii din obiectele din array.
*/

const demoArr = [
  {id: 1, color: 'red', height: 15, width: 20, distance: 10},
  {id: 2, color: 'green', height: 5, width: 30, distance: 15},
  {id: 3, color: 'turqoize', height: 7, width: 9, distance: 8},
  {id: 4, color: 'blue', height: 2, width: 3, distance: 3},
  {id: 5, color: 'red', height: 10, width: 10, distance: 2},
  {id: 6, color: 'crimson', height: 7, width: 8, distance: 16},
];

const pluck = (arr, key) => {
  const pluckedArr = [];

  for (let obj of arr) {
    pluckedArr.push(obj[key]);
  }

  return pluckedArr;
}
console.log(pluck(demoArr, 'color'));  // => ['red', 'green', 'turqoize' .......];

/*
2. 
  Sa se implementeze o functie care returneaza ariile tuturor elementelor 
  din array-ul de mai sus, aria e inaltime * latime.
*/

const calculateArea = arr => {
  const heightArr = pluck(arr, 'height');
  const widthArr = pluck(arr, 'width');
  const areaArr = heightArr.map((height, index) => height * widthArr[index]);

  return areaArr;
}
console.log(calculateArea(demoArr));

/*
3. 
  Sa se scrie o functie care returneaza un subset din array-ul de mai sus 
  unde elementele au aria mai mica sau egala cu 100
*/

const filterArr = arr => {
  const areaArr = calculateArea(arr);

  return areaArr.filter(num => num <= 100);
}
console.log(filterArr(demoArr));


/*
4. 
  Sa se implementeze o functie numita reject, care primeste un array si o functie iterator.
  Functia iterator primeste cate un element din array ca si parametru si trebuie sa returneze true sau false. 
  Daca returneaza true, elementul in cauza nu va fi inclus de functia parinte in array-ul rezultat. 
  Daca returneaza false va fi inclus.
*/

const iterator = elem => elem < 10

const reject = (arr, iter) => {
  return arr.filter(obj => iter(obj.height));
}
console.log(reject(demoArr, iterator)); // sa returneze un array de obiecte cu height < 10

/*
5. Sa se scrie o functie care returneaza elementul cu culoarea crimson
*/

const findColor = (arr, color) => {
  for (let obj of arr) {
    if (obj.color === color) {
      return obj;
    }
  }
}
console.log(findColor(demoArr, 'crimson'));

/*
6. 
  Sa se scrie o functie care returneaza true 
  daca toate elementele din array au aria >= 10, false altfel.
*/

const areasAreBigger = (arr, number) => {
  const areaArr = calculateArea(arr);
  const filteredArr = areaArr.filter(num => num >= number);

  return filteredArr.length === areaArr.length;
}
console.log(areasAreBigger(demoArr, 10));

/*
7. 
  Sa se scrie o functie care returneaza true 
  daca cel putin unul din elementele array-ului are culoarea 'green';
*/

const atLeastOneIsOfColor = (arr, color) => {
  const colorArr = pluck(arr, 'color');

  return colorArr.includes(color); // color OR 'green' ???
}
console.log(atLeastOneIsOfColor(demoArr, 'balarie')); // 'balarie' OR 'green' ???

/*
8. Sa se scrie o functie care returneaza distanta totala (suma distantelor elementelor)
*/

const sumOfDistances = arr => {
  const distanceArr = pluck(arr, 'distance');

  return distanceArr.reduce((num1, num2) => num1 + num2);
}
console.log('Sum of distances: ', sumOfDistances(demoArr));

/*
9. 
  Sa se scrie o functie care returneaza un obiect in care se numara 
  de cate ori apare fiecare culoare in parte in array-ul de obiecte. 
  {red: 2, blue: 1, etc...}
*/

const noColors = arr => {
  const colorArr = pluck(arr, 'color');
  const colorCountsObj = {};

  for (let color of colorArr) {
    Object.keys(colorCountsObj).includes(color)
      ? colorCountsObj[color] += 1
      : colorCountsObj[color] = 1
  }

  return colorCountsObj;
}
console.log('Number of colors: ', noColors(demoArr));

/*
10. 
  Sa se scrie o functie care returneaza un array cu toate elementele care au o culoare unica.
  Oricare element dupa primul care are o culoare care s-ar repeta nu este inclus in array.
*/

const  uniqueColors = arr => {
  const filteredArr = [];

  for (let obj of arr) {
    const colorFilteredArr = pluck(filteredArr, 'color');

    if (!colorFilteredArr.includes(obj.color)) {
      filteredArr.push(obj);
    }
  }

  return filteredArr;
}
console.log('Unique Colors: ', uniqueColors(demoArr));

/*
11. Sa se scrie o functie care inverseaza doua numere.
*/

let a = 5, b = 8;
// (() => {
//   const holder = a;
//   a = b;
//   b = holder;
// })();
[a, b] = [b, a];
console.log('A:', a, 'B:', b);

/*
12. 
  Folosind array-ul de mai jos, vreau sa se obtina o variabila 
  care contine un array de obiecte strcturat astfel:
  [
    {subject: 'Chemistry', time: '9AM', teacher: 'Mr. Darnick'},
    ...
  ]
*/

const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];

const objClasses = [];

for (let arr of classes) {
  const headers = ['subject', 'time', 'teacher'];
  const objClass = {};

  for (let i = 0; i < arr.length; i++) {
    objClass[headers[i]] = arr[i];
  }
  
  objClasses.push(objClass);
}
console.log(objClasses);