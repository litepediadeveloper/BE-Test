/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  // Your Code Here
  numbers.sort(function(a,b){return a-b});
  var x = 0;
    for (var i = 0; i < numbers.length; i++) {
        x = x + 1;
        if (numbers[x] - numbers[i]>1) {
            return(x);
        }
    }
  return numbers = x;
}

console.log(result(numbers));
