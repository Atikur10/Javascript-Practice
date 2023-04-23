//  Problem-01
function mindGame(num) {
    return (num * 3 + 10) / 2 - 5;
  }
  /* Multiply the input number by 3
  Add 10
  Divide the result by 2
  Subtract 5 from the result */
  let mindGameResult1 = mindGame(5);
  let mindGameResult2 = mindGame(50);
  let mindGameResult3 = mindGame(33)
  console.log(mindGameResult1, mindGameResult2, mindGameResult2);
  
  // Problem-02
  function evenOdd(str) {
    if (str.length % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  /* 
  This code takes an input of a string    and checks if the length of the string is an even number. If it is, it returns the value of 'even'. If it is an odd number, it returns the value of 'odd'.
   */
  let evenOddResult1 = evenOdd('phero');
  let evenOddResult2 = evenOdd('Batch7');
  let evenOddResult3 = evenOdd('chatgpt');
  console.log(evenOddResult1, evenOddResult2, evenOddResult3)
  
  // Problem-03
  function isLGSeven(number) {
    const difference = number - 7;
    if (difference < 7) {
      return difference;
    } else {
      return number * 2;
    }
  }
  /* This code checks if a given number is lower than 7 (LG stands for “lower than”). If the number is lower than 7, it returns the difference between the given number and 7. If not, it returns the number multiplied by 2. */
  let isLGSevenOutput1 = isLGSeven(6);
  let isLGSevenOutput2 = isLGSeven(-15);
  let isLGSevenOutput3 = isLGSeven(15);
  console.log(isLGSevenOutput1, isLGSevenOutput2, isLGSevenOutput3)
  
  // Problem-04
  function findingBadData(arr) {
      let badDataCount = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] < 0) {
              badDataCount++;
          }
      }
      return badDataCount;
  }
  /* This code iterates over all elements of the array arr. For each element, it checks if the element is less than 0. If it is, the variable badDataCount is incremented by 1. Finally, the variable badDataCount is returned which contains the total count of elements in the array that are less than 0. */
  let data1 = [ 1, 2, 5];
  let data2 = [2, -5, -7, -13 ];
  let data3 = [-4, -9, -5, -33, -55];
  
  let findingBadDataResult1 = findingBadData(data1);
  let findingBadDataResult2 = findingBadData(data2);
  let findingBadDataResult3 = findingBadData(data3);

  console.log(findingBadDataResult1);
  console.log(findingBadDataResult2);
  console.log(findingBadDataResult3);
  
  
  // Problem-05
  function gemsToDiamond(g1, g2, g3) {
    let totalDiamond = (g1 * 21) + (g2 * 32) + (g3 * 43); 
    
    if (totalDiamond > 1000) 
      return totalDiamond - 2000; 
    else
      return totalDiamond;  
  }

  /* This code takes in three arguments (g1, g2, and g3) which represent the number of gems in a player's possession. It multiplies each of them together to calculate a total amount of diamonds the player has earned from their gems. */
  
  let gemsToDiamondResult1 = gemsToDiamond(1, 1, 1);
  let gemsToDiamondResult2 = gemsToDiamond(20, 200, 50);
  let gemsToDiamondResult3 = gemsToDiamond(100, 5, 1);
  console.log(gemsToDiamondResult1, gemsToDiamondResult2, gemsToDiamondResult3);
  