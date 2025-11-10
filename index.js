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
  sumArray,
  removeDuplicates,
  flattenArray,
  isSymmetric,
  findSecondLargest,
  sortProductsByPrice,
  findMostExpensiveProduct,
  groupByType,
  isSubset,
  findMaxKey,
  mergeObjectsSumValues,
  countElements,
  cleanObject,
  hasDuplicate,
  sumByGroup,
  uniqueValues,
  isPermutation,
  findLongestString,
  intersection,
  filterByMinValue,
  findLongestValue,
  groupByFirstLetter,
  getAdults,
  convertToArray,
  sortStringsByLength,
  sumByKey,
  countWords,
  findMinKey,
} from './utils.js';
//LESSON 1
console.log(productInfo('Sách', 20000));                         
console.log(greet('An'));                                      
console.log(sumUpTo(5));                                        
console.log(square(6));                                        
console.log(isEven(7));                                         
console.log(firstElement([1, 2, 3]));                           
console.log(sum(1, 2, 3, 4));                                  
console.log(formatUser({ name: 'Nam', age: 30 }));             
console.log(namesList([{ name: 'An' }, { name: 'Bình' }]));
console.log(stringLength('Hello World'));
console.log(toUpperCaseStr('javascript'));                   
console.log(formatCurrency(1000000));                         
console.log(max([10, 5, 20, 8]));                           
console.log(isPrime(7));                                 
console.log(repeatString('Hello', 3));                        
console.log(sumOdd([1, 2, 3, 4]));                            
console.log(sumGreaterThan([1, 2, 3, 4], 2));                 
console.log(formatDate('2024-11-28'));                        
console.log(firstThree([1, 2, 3, 4, 5]));                    
console.log(containsChar('javascript', 'j'));               
console.log(mergeArrays([1, 2], [3, 4]));                     
console.log(countOccurrences([1, 2, 2, 3, 2], 2));           
console.log(filterOdd([1, 2, 3, 4]));                       
console.log(greaterThan([1, 2, 3, 4], 2));                  
console.log(factorial(5));                                
console.log(separateEvenOdd([1, 2, 3, 4]));                  
console.log(sortAsc([3, 1, 4, 2]));                       
console.log(sumEvenIndex([1, 2, 3, 4]));                
console.log(multiplyByTwo([1, 2, 3]));                    
console.log(arrayToString(['a', 'b', 'c']));
//LESSON 2
console.log(sumArray([1, 2, 3, 4]));                             
console.log(removeDuplicates([1,2,2,3,4,4,6,2,3,6]));            
console.log(flattenArray([[1,2],[3,4]]));               
console.log(isSymmetric([1,2,3,2,1]));                    
console.log(findSecondLargest([3,1,4,2,4]));
const products = [
  { name: 'Product A', price: 30 },
  { name: 'Product B', price: 20 },
  { name: 'Product C', price: 50 }
];
console.log(sortProductsByPrice(products));
console.log(findMostExpensiveProduct(products));
const items = [
  { type: 'fruit', name: 'apple' },
  { type: 'vegetable', name: 'carrot' },
  { type: 'fruit', name: 'banana' }
];
console.log(groupByType(items));
console.log(isSubset([1, 2, 3, 4], [2, 4])); 
console.log(findMaxKey({ a: 10, b: 20, c: 15 }));
const obj1 = { a: 10, b: 20 };
const obj2 = { b: 30, c: 40 };
console.log(mergeObjectsSumValues(obj1, obj2));
console.log(countElements(['a', 'b', 'a', 'c', 'b', 'a']));
console.log(cleanObject({ a: 1, b: null, c: undefined, d: 4 }));
console.log(hasDuplicate([1, 2, 3, 4, 2]));
const arr16 = [
  { type: 'fruit', price: 10 },
  { type: 'vegetable', price: 20 },
  { type: 'fruit', price: 30 }
];
console.log(sumByGroup(arr16, 'type', 'price'));
console.log(uniqueValues([1, 2, 3], [3, 4, 5]));
console.log(isPermutation([1, 2, 3], [3, 2, 1]));
console.log(findLongestString(['abc', 'abcd', 'a']));
console.log(intersection([1, 2, 3], [2, 3, 4]));
console.log(filterByMinValue([5, 10, 15, 20], 12));
console.log(findLongestValue({ a: 'cat', b: 'elephant', c: 'dog' }));
console.log(groupByFirstLetter(['apple', 'banana', 'avocado', 'blueberry']));
const people = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 20 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 22 }
];
console.log(getAdults(people));
console.log(convertToArray({ a: 1, b: 2, c: 3 }));
console.log(sortStringsByLength(['a', 'ccc', 'bb']));
const arr27 = [
  { type: 'fruit', price: 10 },
  { type: 'vegetable', price: 20 },
  { type: 'fruit', price: 30 }
];
console.log(sumByKey(arr27, 'price'));
console.log(countWords('Hello world! Welcome to JavaScript'));
console.log(findMinKey({ a: 100, b: 20, c: 50 }));


