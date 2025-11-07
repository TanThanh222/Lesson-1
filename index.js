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
