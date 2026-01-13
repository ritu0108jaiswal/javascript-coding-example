const intervalValues = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];

function mergeInterval(intervals) {
  const merged = [intervals[0]];

  for (let i = 1; i <= intervals.length; i++) {
    const [currentStart, currentEnd] = intervals[i];
    const lastMerged = merged[merged.length - 1];

    for (let i = 1; i <= intervals.length; i++) {
      if (currentStart <= lastMerged[1]) {
        lastMerged[1] = Math.max(lastMerged[1], currentEnd);
      } else {
        merged.push(intervals[i]);
      }
    }
    return merged;
  }
}

console.log("Interval", mergeInterval(intervalValues));

const name = "madam";

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

console.log("Check Palindrome:", isPalindrome(name));

const arr = [1, 3, 7, 3, 4];
function findMaxMin(arr) {
  return {
    max: Math.max(...arr),
    min: Math.min(...arr),
  };
}

console.log("Check max, min:", findMaxMin(arr));

const arrName = "generation";

function countChar(arr) {
  return arr.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
}

console.log("Count char:", countChar(arrName));

const numValues = [1, 2, 4, 5];

function findMissing(arr) {
  const n = arr.length + 1;
  const total = (n * (n + 1)) / 2;
  const arraySum = arr.reduce((a, b) => a + b, 0);

  return total - arraySum;
}

console.log("Missing Num:", findMissing(numValues));

let arrNums = [1, [2, [3, 4], 5], 6];

function flattenArray(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log("Flatten Array:", flattenArray(arrNums));

const sentence = "My name is bob";

function reverseArr(arr) {
  return arr
    .split(" ")
    .map((word) => word.split("").reverse().join(""))
    .join(" ");
}
console.log("Reverse Array:", reverseArr(sentence));

function capitalizeArr(arr) {
  return arr
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}
console.log("capitalize Array:", capitalizeArr(sentence));
