// Lesson 1
// Bài 1:
export function productInfo(name, price) {
  return `Sản phẩm: ${name}, Giá: ${price.toLocaleString('vi-VN')} VNĐ`;
}

// Bài 2:
export function greet(name) {
  return `Xin chào, ${name}!`;
}

// Bài 3: 
export function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Bài 4:
export function square(n) {
  return n * n;
}

// Bài 5:
export function isEven(n) {
  return n % 2 === 0;
}

// Bài 6: 
export function firstElement(arr) {
  return arr[0];
}

// Bài 7: 
export function sum(...nums) {
  return nums.reduce((total, value) => total + value, 0);
}

// Bài 8: 
export function formatUser(user) {
  const { name, age } = user;
  return `Name: ${name}, Age: ${age}`;
}

// Bài 9:
export function namesList(people) {
  return people.map((p) => p.name).join(', ');
}

// Bài 10:
export function stringLength(str) {
  return str.length;
}

// Bài 11:
export function toUpperCaseStr(str) {
  return str.toUpperCase();
}

// Bài 12:
export function formatCurrency(amount) {
  return `${amount.toLocaleString('vi-VN')} VNĐ`;
}

// Bài 13:
export function max(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Bài 14:
export function isPrime(n) {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;

  const limit = Math.sqrt(n);
  for (let i = 3; i <= limit; i += 2) {
    if (n % i === 0) return false;
  }
  return true;
}

// Bài 15:
export function repeatString(str, times) {
  return Array(times).fill(str).join(' ');
}

// Bài 16:
export function sumOdd(arr) {
  return arr
    .filter((n) => n % 2 !== 0)
    .reduce((total, n) => total + n, 0);
}

// Bài 17:
export function sumGreaterThan(arr, n) {
  return arr
    .filter((value) => value > n)
    .reduce((total, value) => total + value, 0);
}

// Bài 18:
export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

// Bài 19:
export function firstThree(arr) {
  return arr.slice(0, 3);
}

// Bài 20:
export function containsChar(str, ch) {
  return str.includes(ch);
}

// Bài 21:
export function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Bài 22:
export function countOccurrences(arr, target) {
  return arr.filter((value) => value === target).length;
}

// Bài 23:
export function filterOdd(arr) {
  return arr.filter((value) => value % 2 !== 0);
}

// Bài 24:
export function greaterThan(arr, n) {
  return arr.filter((value) => value > n);
}

// Bài 25:
export function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Bài 26:
export function separateEvenOdd(arr) {
  const even = arr.filter((v) => v % 2 === 0);
  const odd = arr.filter((v) => v % 2 !== 0);
  return { even, odd };
}

// Bài 27:
export function sortAsc(arr) {
  return [...arr].sort((a, b) => a - b);
}

// Bài 28:
export function sumEvenIndex(arr) {
  let total = 0;
  arr.forEach((value, index) => {
    if (index % 2 === 0) {
      total += value;
    }
  });
  return total;
}

// Bài 29:
export function multiplyByTwo(arr) {
  return arr.map((value) => value * 2);
}

// Bài 30:
export function arrayToString(arr) {
  return arr.join('');
}


// LESSON 2
// Bài 1
export function sumArray(arr) {
  return arr.reduce((sum, value) => sum + value, 0);
}

// Bài 2: giong bai 21 lesson 1

// Bài 3
export function removeDuplicates(arr) {
  return [...new Set(arr)];
}

// Bài 4
export function flattenArray(arr) {
  return arr.reduce((flat, subArr) => flat.concat(subArr), []);
}

// Bài 5
export function isSymmetric(arr) {
  const len = arr.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (arr[i] !== arr[len - 1 - i]) {
      return false;
    }
  }
  return true;
}

// Bài 6
export function findSecondLargest(arr) {
  const uniqueSortedDesc = [...new Set(arr)].sort((a, b) => b - a);
  return uniqueSortedDesc.length >= 2 ? uniqueSortedDesc[1] : undefined;
}

// Bài 7
export function sortProductsByPrice(products) {
  return [...products].sort((a, b) => a.price - b.price);
}

// Bài 8
export function findMostExpensiveProduct(products) {
  if (products.length === 0) return undefined;
  return products.reduce((maxProduct, current) =>
    current.price > maxProduct.price ? current : maxProduct
  );
}

// Bài 9
export function groupByType(arr) {
  return arr.reduce((result, item) => {
    const { type, name } = item;
    if (!result[type]) {
      result[type] = [];
    }
    result[type].push(name);
    return result;
  }, {});
}

// Bài 10
export function isSubset(arr1, arr2) {
  const set1 = new Set(arr1);
  return arr2.every(item => set1.has(item));
}

// Bài 11
export function findMaxKey(obj) {
  let maxKey = null;
  let maxValue = -Infinity;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  }
  return maxKey;
}

// Bài 12
export function mergeObjectsSumValues(obj1, obj2) {
  const result = { ...obj1 };
  for (const [key, value] of Object.entries(obj2)) {
    if (typeof value !== 'number') {
      result[key] = value;
      continue;
    }
    if (typeof result[key] === 'number') {
      result[key] += value;
    } else if (result[key] === undefined) {
      result[key] = value;
    } else {
      result[key] = value;
    }
  }
  return result;
}

// Bài 13
export function countElements(arr) {
  return arr.reduce((counter, value) => {
    counter[value] = (counter[value] || 0) + 1;
    return counter;
  }, {});
}

// Bài 14
export function cleanObject(obj) {
  const result = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      result[key] = value;
    }
  }
  return result;
}

// Bài 15
export function hasDuplicate(arr) {
  return new Set(arr).size !== arr.length;
}

// Bài 16
export function sumByGroup(arr, groupKey, valueKey = 'price') {
  return arr.reduce((result, item) => {
    const group = item[groupKey];
    const value = item[valueKey];

    if (typeof value !== 'number') return result;

    if (!result[group]) {
      result[group] = 0;
    }
    result[group] += value;
    return result;
  }, {});
}

// Bài 17
export function uniqueValues(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

// Bài 18
export function isPermutation(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const sorted1 = [...arr1].sort();
  const sorted2 = [...arr2].sort();
  return sorted1.every((value, index) => value === sorted2[index]);
}

// Bài 19
export function findLongestString(arr) {
  if (arr.length === 0) return '';
  return arr.reduce((longest, current) =>
    current.length > longest.length ? current : longest
  );
}

// Bài 20
export function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const resultSet = new Set();
  for (const item of arr1) {
    if (set2.has(item)) {
      resultSet.add(item);
    }
  }
  return [...resultSet];
}

// Bài 21
export function filterByMinValue(arr, minValue) {
  return arr.filter(value => value >= minValue);
}

// Bài 22
export function findLongestValue(obj) {
  let longest = '';
  for (const value of Object.values(obj)) {
    if (typeof value === 'string' && value.length > longest.length) {
      longest = value;
    }
  }
  return longest;
}

// Bài 23
export function groupByFirstLetter(arr) {
  return arr.reduce((result, str) => {
    if (typeof str !== 'string' || str.length === 0) return result;
    const first = str[0].toLowerCase();
    if (!result[first]) {
      result[first] = [];
    }
    result[first].push(str);
    return result;
  }, {});
}

// Bài 24
export function getAdults(people) {
  return people.filter(person => person.age >= 18);
}

// Bài 25
export function convertToArray(obj) {
  return Object.entries(obj);
}

// Bài 26
export function sortStringsByLength(arr) {
  return [...arr].sort((a, b) => a.length - b.length);
}

// Bài 27
export function sumByKey(arr, key) {
  return arr.reduce((sum, item) => {
    const value = item[key];
    if (typeof value === 'number') {
      return sum + value;
    }
    return sum;
  }, 0);
}

// Bài 28
export function countWords(str) {
  const trimmed = str.trim();
  if (trimmed === '') return 0;
  return trimmed.split(/\s+/).length;
}

// Bài 29
export function findMinKey(obj) {
  let minKey = null;
  let minValue = Infinity;

  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'number' && value < minValue) {
      minValue = value;
      minKey = key;
    }
  }
  return minKey;
}
