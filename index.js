module.exports = function (num1 , num2) {
  result = []
  num1 = processNumber(num1)
  num2 = processNumber(num2)
  isNeg = (num1[0] < 0 && num2[0] >=0) ||
          (num2[0] < 0 && num1[0] >=0)

  for ( var i =0; i < num1.length + num2.length; i++) 
    result[i] = 0
    
  for (var i  = 0; i < num1.length; i++) {
    for (var j = 0; j < num2.length; j++) {
      result[i+j] += num1[i] * num2[j]
      result[i+j+1] += parseInt(result[i+j] / 10)
      result [i+j] %= 10
    }
  }

  while (result.length !== 0 && result[result.length-1] === 0) {
    result.splice(result.length-1, 1)
  }

  result = result.reverse()
  if (isNeg) result[0] *= -1
  
  return result
    .join('')
}


function processNumber(num) {
  return num
    .split('')
    .reverse()
    .map(function(n) {
      return parseInt(n)
    })
}
