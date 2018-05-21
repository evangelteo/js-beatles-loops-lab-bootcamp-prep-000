function theBeatlesPlay(array1,array2) {
  var newarray = []
  for (let i = 0; i < array1.length;i++) {
    newarray.push(array1[i] + " plays " + array2[i])
  }
  return newarray
}

function johnLennonFacts(array) {
  var newarray = []
  while (array.length !== 0) {
    var x = array.pop()
    newarray.push(x + "!!!")
  }
  return newarray
}