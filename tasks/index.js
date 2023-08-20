//Task 1
// Find the Smallest and Biggest Numbers
// function minMax(arr) {
//     let min = arr[0];
//     let max = arr[0];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }   return { min, max };

// }
// console.log(minMax([1, 2, 3, 4, 5])); //[1,5]
// console.log(minMax([1])); //[1,1]

// Task 2
// Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// function getOnlyEvens(nums) {
//   const newArr = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0 && i % 2 == 0) {
//       newArr.push(nums[i]);
//     }
//   }
//   return newArr
// }
  
// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //[2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4])); // [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5])); // [];

// Task 3
// Reverse Words in a String
// function reverseWords(string) {
// arr=string.split(' ')
// newArr=[]
// for (let i = 0; i < arr.length; i++) {
//     newArr.push(arr[arr.length-i])
    
// }
// return newArr
// }

// console.log(reverseWords(" the sky is blue"));   //"blue is sky the"
// console.log(reverseWords("hello   world!  "));   //"world! hello"

// Task 4
// Create a function that takes a string and returns a string ordered by the length of the words.
// From shortest to longest word. If there are words with the same amount of letters, order them alphabetically.

// function sortByLength(str) {
//     const words = str.split();
  
//     words.sort((a, b) => {
//       if (a.length !== b.length) {
//         return a.length - b.length;
//       } else {
//         return a.localeCompare(b);
//       }
//     });
    
//     return words.join(' ');
//   }
// console.log(sortByLength("Hello my friend"));  // "my Hello friend"
// console.log(sortByLength("Have a wonderful day"))  //"a day Have wonderful"
// console.log(sortByLength("To be or not to be, that is the question.")); //be is or To to be, not the that question.'

// Task 5
// Remove the Letters ABC
// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version.
// If the given string does not contain "a", "b", or "c", return null.

// function removeABC(str) {
//     return /[abc]/.test(str) ? str.replace(/[abc]/gi, '') : null
// }

// console.log(removeABC("This might be a bit hard"));  //"This might e  it hrd"
// console.log(removeABC("hello world!")); //null
// console.log(removeABC(""));  //null
