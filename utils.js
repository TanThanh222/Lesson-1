// utils.js
// TẤT CẢ đều là named export

// Bài 1: Template literal + format tiền
export function productInfo(name, price) {
  return `Sản phẩm: ${name}, Giá: ${price.toLocaleString('vi-VN')} VNĐ`;
}

// Bài 2: Chào người dùng
export function greet(name) {
  return `Xin chào, ${name}!`;
}

// Bài 3: Tính tổng 1..n
export function sumUpTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Bài 4: Bình phương
export function square(n) {
  return n * n;
}

// Bài 5: Kiểm tra chẵn
export function isEven(n) {
  return n % 2 === 0;
}

// Bài 6: Phần tử đầu tiên mảng
export function firstElement(arr) {
  return arr[0];
}

// Bài 7: Rest Operator để tính tổng
// ...nums gom tất cả tham số thành 1 mảng
export function sum(...nums) {
  return nums.reduce((total, value) => total + value, 0);
}

// Bài 8: Tách value từ object
export function formatUser(user) {
  const { name, age } = user; // destructuring
  return `Name: ${name}, Age: ${age}`;
}

// Bài 9: In ra danh sách tên từ mảng object
export function namesList(people) {
  return people.map((p) => p.name).join(', ');
}

// Bài 10: Độ dài chuỗi
export function stringLength(str) {
  return str.length;
}

// Bài 11: Chuỗi thành chữ hoa
export function toUpperCaseStr(str) {
  return str.toUpperCase();
}

// Bài 12: Định dạng tiền tệ
export function formatCurrency(amount) {
  return `${amount.toLocaleString('vi-VN')} VNĐ`;
}

// Bài 13: Max trong mảng
export function max(arr) {
  if (arr.length === 0) return undefined;
  return Math.max(...arr);
}

// Bài 14: Kiểm tra số nguyên tố
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

// Bài 15: In chuỗi n lần, cách nhau 1 khoảng trắng
export function repeatString(str, times) {
  return Array(times).fill(str).join(' ');
}

// Bài 16: Tổng số lẻ trong mảng
export function sumOdd(arr) {
  return arr
    .filter((n) => n % 2 !== 0)
    .reduce((total, n) => total + n, 0);
}

// Bài 17: Tổng các số lớn hơn n
export function sumGreaterThan(arr, n) {
  return arr
    .filter((value) => value > n)
    .reduce((total, value) => total + value, 0);
}

// Bài 18: Format ngày YYYY-MM-DD -> DD/MM/YYYY
export function formatDate(dateStr) {
  const [year, month, day] = dateStr.split('-');
  return `${day}/${month}/${year}`;
}

// Bài 19: Lấy 3 phần tử đầu
export function firstThree(arr) {
  return arr.slice(0, 3);
}

// Bài 20: Chuỗi có chứa ký tự cụ thể không
export function containsChar(str, ch) {
  return str.includes(ch);
}

// Bài 21: Gộp 2 mảng
export function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2];
}

// Bài 22: Đếm số lần xuất hiện
export function countOccurrences(arr, target) {
  return arr.filter((value) => value === target).length;
}

// Bài 23: Lọc số lẻ
export function filterOdd(arr) {
  return arr.filter((value) => value % 2 !== 0);
}

// Bài 24: Lọc số lớn hơn n
export function greaterThan(arr, n) {
  return arr.filter((value) => value > n);
}

// Bài 25: Giai thừa
export function factorial(n) {
  if (n < 0) return undefined;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// Bài 26: Tách chẵn / lẻ
export function separateEvenOdd(arr) {
  const even = arr.filter((v) => v % 2 === 0);
  const odd = arr.filter((v) => v % 2 !== 0);
  return { even, odd };
}

// Bài 27: Sắp xếp tăng dần
export function sortAsc(arr) {
  return [...arr].sort((a, b) => a - b); // copy mảng trước khi sort
}

// Bài 28: Tổng các số ở vị trí index chẵn (0,2,4,…)
export function sumEvenIndex(arr) {
  let total = 0;
  arr.forEach((value, index) => {
    if (index % 2 === 0) {
      total += value;
    }
  });
  return total;
}

// Bài 29: Nhân mỗi phần tử với 2
export function multiplyByTwo(arr) {
  return arr.map((value) => value * 2);
}

// Bài 30: Tạo chuỗi từ mảng string
export function arrayToString(arr) {
  return arr.join('');
}