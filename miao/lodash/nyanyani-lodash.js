// var nyanyani = {
//   concat: function (origin, target) {
//     let result = []
//     for (let i = 0; i < ary.length; i++) {
//       result.push(ary[i])
//     }
//     return result
//   },
// }
var nyanyani = function () {
  function concat() {
    let length = arguments.length
    if (!length)
      return []
    let ary = []
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < arguments[i].length; j++) {
        ary.push(arguments[i][j])
      }
    }
    return ary
  }
  return {
    concat,
  }
}();
