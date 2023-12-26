// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//             i
var arr1 = [1, 3, 3, 5, 8, 10]; //indexOne
//              j
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10]; //indexTwo
// [1, 3, 5, 8, 10]
var mergerd = [1];
var arrA = [1, 3, 4, 5];
var arrB = [1, 3, 3, 5, 8, 10];
// [1, 3, 4, 5, 8, 10]
//*              i
arrC = [2, 3, 3, 5, 8, 10, 12];
//!           j
arrD = [1, 3, 4, 6];
outArray = [1, 2, 3];
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
      //TODO if one is smaller, only check and potentially push one
    } else if (one < two) {
      if (merged[merged.length - 1] !== one) {
        merged.push(one);
      }
      indexOne++;

      //TODO if two is smaller, only check and potentially push two
    } else if (two < one) {
      if (merged[merged.length - 1] !== two) {
        merged.push(two);
      }
      indexTwo++;
    }

    //TODO if the arrays length is not equal X 2
  }
  while (indexOne < arr1.length) {
    let one = arr1[indexOne];
    if (merged[merged.length - 1] !== one) {
      merged.push(one);
    }
    indexOne++;
  }
  while (indexTwo < arr2.length) {
    let two = arr2[indexTwo];
    if (merged[merged.length - 1] !== two) {
      merged.push(two);
    }
    indexTwo++;
  }
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

// try out some other tests
const res1 = mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5]); // [ 1, 3, 4, 5, 8, 10 ]
const res2 = mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]); // [1, 2, 3, 4, 5, 6, 8, 10, 12]
console.log(res1);
console.log(res2);
