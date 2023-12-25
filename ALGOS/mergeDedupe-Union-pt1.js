// given two sorted arrays that may have duplicate values, merge them and remove any duplicates

var arr1 = [1, 3, 3, 5, 8, 10]; //indexOne

var arr2 = [1, 3, 3, 5, 8, 10, 10, 10]; //indexTwo
// [1, 3, 5, 8, 10]

var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];
// [1, 3, 4, 5, 8, 10]
//*               i
arrC = [2, 3, 3, 5, 8, 10, 12];
//!             j
arrD = [1, 3, 4, 6];
outArray = [1, 2, 3, 4, 5, 6, 8, 10, 12];
// [1, 2, 3, 4, 5, 6, 8, 10, 12]

// arr5 = []
// arr6 = [1,2,2]
//* [1,2]

// create a function that takes 2 sorted arrays
function mergeDedupe(arr1, arr2) {
  //! write the pseudocode first!
  // part 1
  let merged = [];
  let indexOne = 0;
  let indexTwo = 0;
  while (indexOne < arr1.length && indexTwo < arr2.length) {
    let one = arr1[indexOne];
    let two = arr2[indexTwo];
    if (one === two) {
      if (merged[merged.length - 1] !== one) {
        merged.push(one);
      }
      indexOne++;
      indexTwo++;
    }
    //TODO if one is smaller, only check and potentially push one
    //TODO if two is smaller, only check and potentially push two
  }

  //TODO if the arrays length is not equal X 2

  //! do not use Set()
  return merged;
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

// ============================
// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//                              a
var arr1 = [1, 3, 3, 5, 8, 10];
//                              b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10];
// [1, 3, 5, 8, 10]

//                   i
var arrA = [1, 3, 4, 5];
//                   j
var arrB = [1, 3, 3, 5, 8, 10];
// [1, 3, 4]

// 1. DRIVER 🚗
// 2. PRESENTER 🧑‍🏫
// 3. NAVIGATOR 🧭
function mergeDedupe(arr1, arr2) {
  // pseudocode
}

// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]
