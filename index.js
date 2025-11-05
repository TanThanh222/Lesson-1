// index.js
import {
  productInfo,
  greet,
  sumUpTo,
  square,
  isEven,
  firstElement,
  sum,
  formatUser,
  namesList,
  stringLength,
  toUpperCaseStr,
  formatCurrency,
  max,
  isPrime,
  repeatString,
  sumOdd,
  sumGreaterThan,
  formatDate,
  firstThree,
  containsChar,
  mergeArrays,
  countOccurrences,
  filterOdd,
  greaterThan,
  factorial,
  separateEvenOdd,
  sortAsc,
  sumEvenIndex,
  multiplyByTwo,
  arrayToString,
} from './utils.js';

console.log('Bài 1:', productInfo('Sách', 20000));                         // "Sản phẩm: Sách, Giá: 20,000 VNĐ"
console.log('Bài 2:', greet('An'));                                       // "Xin chào, An!"
console.log('Bài 3:', sumUpTo(5));                                        // 15
console.log('Bài 4:', square(6));                                         // 36
console.log('Bài 5:', isEven(7));                                         // false
console.log('Bài 6:', firstElement([1, 2, 3]));                            // 1
console.log('Bài 7:', sum(1, 2, 3, 4));                                   // 10
console.log('Bài 8:', formatUser({ name: 'Nam', age: 30 }));              // "Name: Nam, Age: 30"
console.log('Bài 9:', namesList([{ name: 'An' }, { name: 'Bình' }]));     // "An, Bình"
console.log('Bài 10:', stringLength('Hello World'));                      // 11
console.log('Bài 11:', toUpperCaseStr('javascript'));                     // "JAVASCRIPT"
console.log('Bài 12:', formatCurrency(1000000));                          // "1,000,000 VNĐ"
console.log('Bài 13:', max([10, 5, 20, 8]));                              // 20
console.log('Bài 14:', isPrime(7));                                       // true
console.log('Bài 15:', repeatString('Hello', 3));                         // "Hello Hello Hello"
console.log('Bài 16:', sumOdd([1, 2, 3, 4]));                             // 4
console.log('Bài 17:', sumGreaterThan([1, 2, 3, 4], 2));                  // 7
console.log('Bài 18:', formatDate('2024-11-28'));                         // "28/11/2024"
console.log('Bài 19:', firstThree([1, 2, 3, 4, 5]));                      // [1, 2, 3]
console.log('Bài 20:', containsChar('javascript', 'j'));                  // true
console.log('Bài 21:', mergeArrays([1, 2], [3, 4]));                      // [1, 2, 3, 4]
console.log('Bài 22:', countOccurrences([1, 2, 2, 3, 2], 2));             // 3
console.log('Bài 23:', filterOdd([1, 2, 3, 4]));                          // [1, 3]
console.log('Bài 24:', greaterThan([1, 2, 3, 4], 2));                     // [3, 4]
console.log('Bài 25:', factorial(5));                                     // 120
console.log('Bài 26:', separateEvenOdd([1, 2, 3, 4]));                    // { even: [2,4], odd:[1,3] }
console.log('Bài 27:', sortAsc([3, 1, 4, 2]));                            // [1, 2, 3, 4]
console.log('Bài 28:', sumEvenIndex([1, 2, 3, 4]));                       // 4
console.log('Bài 29:', multiplyByTwo([1, 2, 3]));                         // [2, 4, 6]
console.log('Bài 30:', arrayToString(['a', 'b', 'c']));                   // "abc"
