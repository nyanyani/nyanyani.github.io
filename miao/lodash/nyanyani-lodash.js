// var nyanyani = {
//   concat: function () {
//     let result = []
//     return result
//   },
// }
var nyanyani = function () {
  function compact(ary) {
    let length = ary.length
    if (!length)
      return []
    let result = []
    for (let i = 0; i < length; i++) {
      if (ary[i])
        result.push(ary[i])
    }
    return result
  };

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
  };

  return {
    compact,
    concat,
  }
}();
