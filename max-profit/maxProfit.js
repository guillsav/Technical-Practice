/*
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to buy one and sell one share of the stock, design an algorithm to find the maximum profit.

Example 1:
Input: [7,1,5, 3,6,4]
          ^        ^

diff var
calculate i+1 - i
Output: 5


Example 2:
Input: [7,6,4,3,1]
Output: 0

Example 3 (for optimized solution):
Input: [7,2,5,3,6,1,4]
Output: 4

Example 4 (for optimized solution):
Input: [7,2,5,3,6,1,4,6]
Output: 5

*/

// Input: [7,1,5, 3,6,4]
//           ^ ^

// const maxProfit = function(prices) {
//   let day = 0;
//   let nextDay = day + 1;
//   let maxP = 0;

//   const length = prices.length;

//   while (day <= length - 1 && nextDay <= length - 1){
//     let diff = prices[nextDay] - prices[day]; //-6
//     if(diff > maxP){
//       maxP = diff;
//       nextDay++;
//   } else if (diff > maxP) {
//       nextDay++;
//   }

//    day++;
//    // nextDay = day + 1
// }
//   return maxP;
// }

// const prices1 = [7,1,5,3,6,4]
// console.log(maxProfit(prices1));

const maxProfit = function(prices) {
  const len = prices.length
  let minP = prices[0]
  let maxP = prices[1] - prices[0]

  for (let i = 1; i < len; i++) {
    if (prices[i] - minP > maxP) {
      maxP = prices[i] - minP
    }

    if (prices[i] < minP && i !== len - 1) {
      minP = prices[i]
    }
  }

  return maxP
}

const prices1 = [7, 1, 5, 3, 6, 4]
console.log(maxProfit(prices1))
