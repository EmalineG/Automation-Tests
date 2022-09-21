//Write a function in romanNumerals.js that converts an integer (<= 1,000) to its Roman numeral equivalent.

// I, II, III, IIII, V, X, L, C, D, M
// 1, 2, 3, 4, 5, 10, 50, 100, 500, 1000

// 267 = CCLXVII 
// CC = 200, l = 50, x =10, v = 5, i=1, i=1


const romanification = num => {
    let newArray = ["d",]
    let numbers = [1000, 500, 100, 50, 10, 5, 1]
    let romanNums = ["M", "D", "C", "L", "X", "V", "I"]
  
    for (i = 0; i < numbers.length;) {
      if ((num - numbers[i]) >= 0) {
        newArray.push(romanNums[i])
        num -= numbers[i]
      } else {
        i++
      }
  
      if (num === 0) {
        return newArray.join('')
      }
  
    }
  
  }
  
  console.log(romanification(657))
  
      // PSUEDOCODE
  
      // create array with number values of roman numbers in desc order
  
      // create array with roman numerals in desc order
  
      // create new empty array
  
      // iterate through numbers array
  
      // if num - value.[i] >= 0
  
      // let equivalentIndex = [i]
  
      // save new num value
  
      // newArray.push
  
      // else: return newArray or console.log(newArray)
  
  
  