function convertToRoman(num) {
  const obj = {
    0: ["M", 1000],
    1: ["D", 500],
    2: ["C", 100],
    3: ["L", 50],
    4: ["X", 10],
    5: ["V", 5],
    6: ["I", 1],
  };
  //your code here
  let result = "";

  // Handle special cases manually
  const specials = [
    ["CM", 900],
    ["CD", 400],
    ["XC", 90],
    ["XL", 40],
    ["IX", 9],
    ["IV", 4],
  ];

  const valuesFromObj = Object.values(obj); // [["M", 1000], ..., ["I", 1]]
  const fullSet = [...specials, ...valuesFromObj];

  // Sort fullSet in descending value order
  fullSet.sort((a, b) => b[1] - a[1]);

  for (let [sym, val] of fullSet) {
    while (num >= val) {
      result += sym;
      num -= val;
    }
  }

  return result;
}
// You can test your code by running the above
// function and printing it to console by pressing the run 
// button at the top. To run it with input 36,
// uncomment the following line

console.log(convertToRoman(36));


// do not edit below this line
module.exports = convertToRoman
