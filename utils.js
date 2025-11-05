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