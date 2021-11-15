/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  // Your Code Here
  data = data.filter((element, index)=>{
    return data.indexOf(element)===index;
  });
  return data.sort(function(a,b){return a-b});
}

console.log(result(data));
