// var nyanyani = {
//   concat: function () {
//     let result = []
//     return result
//   },

const {
  isArray
} = require("lodash");

// }
var nyanyani = function () {
  function chunk(ary, size) {
    if (!ary || !ary.length || size < 1)
      return []
    let length = ary.length
    if (length <= size)
      return ary

    let times = Math.ceil(length / size)
    let result = Array(times)
    let count = 0
    while (count < times) {
      result[count] = ary.slice(size * count, size * (count + 1))
      count++
    }

    return result
  }

  function compact(ary) {
    if (!ary || !ary.length)
      return []
    let length = ary.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (ary[i])
        result.push(ary[i])
    }
    return result
  }

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

  function difference(array, ...args) {
    if (!array || !array.length)
      return []
    let length = array.length
    let values = [].concat(...args)
    let result = []
    for (let i = 0; i < length; i++) {
      if (values.indexOf(array[i]) === -1)
        result.push(array[i])
    }
    return result
  }

  function differenceBy(array, values, fn) {
    if (!array || !array.length)
      return []
    let length = array.length
    let result = []
    let arrayMapped = array.map(fn)
    let valuesMapped = values.map(fn)

    for (let i = 0; i < length; i++) {
      if (valuesMapped.indexOf(arrayMapped[i]) === -1)
        result.push(array[i])
    }

    return result
  }

  function drop(array, n = 1) {
    if (!array || !array.length || array.length <= n)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (i > n - 1)
        result.push(array[i])
    }
    return result
  }

  function dropRight(array, n) {
    if (!array || !array.length || array.length < n)
      return []
    let length = array.length
    if (n === undefined)
      return array
    let result = []
    n = length - n
    for (let i = 0; i < length; i++) {
      if (i < n) {
        result.push(array[i])
      }
    }
    return result
  }

  function fill(array, value, start, end) {
    if (!array)
      return []
    let length = array.length
    if (start > end)
      return array
    if (start === undefined || start < 0)
      start = -start < length ? start + length : 0
    if (end === undefined || end > length)
      end = length
    if (end < 0)
      end += length

    end = end > start ? end : 0

    for (let i = start; i < end; i++) {
      array[i] = value
    }

    return array
  }

  function findIndex(array, predicate, fromIndex = 0) {
    if (!array || !array.length || !predicate)
      return -1
    let length = array.length
    for (let i = fromIndex; i < length; i++) {
      if (predicate(array[i], i, array))
        return i
    }
    return -1
  }

  function findLastIndex(array, predicate, fromIndex) {

  }

  function flatten(array) {
    if (!array)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (Array.isArray(array[i]))
        result = result.concat(flatten(array[i]))
      else
        result.push(array[i])
    }
    return result
  }

  function flattenDeep(array) {
    if (!array)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (Array.isArray(array[i]))
        result = result.concat(flattenDeep(array[i]))
      else
        result.push(array[i])
    }
    return result
  }

  function flattenDepth(array, depth = 1) {
    if (!array)
      return []
    if (depth < 1)
      return array
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (Array.isArray(array[i]) && depth)
        result = result.concat(flattenDepth(array[i], depth - 1))
      else
        result.push(array[i])
    }
    return result
  }

  function fromPairs(pairs) {
    if (!pairs || !pairs.length)
      return {}
    let length = pairs.length
    let result = {}
    for (let i = 0; i < length; i++) {
      let pair = pairs[i]
      result[pair[0]] = pair[1]
    }
    return result
  }

  function head(array) {
    if (!array || !array.length)
      return undefined
    return array[0]
  }

  function indexOf(array, value, fromIndex = 0) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    if (fromIndex < 0)
      fromIndex = fromIndex + length > 0 ? fromIndex + length : 0
    if (fromIndex > length)
      return undefined
    for (let i = fromIndex; i < length; i++) {
      if (array[i] === value)
        return i
    }
    return undefined
  }

  function initial(array) {
    if (!array || !array.length)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length - 1; i++) {
      result.push(array[i])
    }
    return result
  }

  function reverse(array) {
    if (!array || !array.length)
      return []
    if (array.length === 1)
      return array

    // array.reverse(), array自带reverse方法
    let length = array.length
    let result = []
    for (let i = array.length - 1; i >= 0; i--) {
      result.push(array[i])
    }
    return result
  }

  function sortedIndex(array, value) {
    // binary search
    // 利用二分法查找
    if (!array || !array.length)
      return -1
    let length = array.length
    let left = 0
    let right = length
    while (left < right) {
      let mid = left + ((right - left) >> 1)
      if (array[mid] === value)
        return mid
      else if (array[mid] < value) {
        left = mid + 1
      } else
        right = mid
    }
    return right
  }

  function every(array, predicate = it => it) {
    if (!array || !array.length)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      result.push(predicate(array[i]))
    }
    return result
  }

  function filter(array, predicate = () => true) {
    if (!array || array.length)
      return []
    let length = array.length
    let result = []
    for (let i = 0; i < length; i++) {
      if (predicate(array[i]))
        result.push(array[i])
    }
    return result
  }

  function find() {}

  function toArray(value) {
    if (!value)
      return []
    let result = []
    if (typeof value === 'string') {
      if (!value.length)
        return []
      let length = value.length
      for (let i = 0; i < length; i++) {
        result.push(value.charAt(i))
      }
    } else if (typeof value === 'object') {
      for (let prop in value) {
        result.push(value[prop])
      }
    }
    return result
  }

  function max(array) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    let max = array[0]
    for (let i = 1; i < length; i++) {
      max = max > array[i] ? max : array[i]
    }
    return max
  }

  function maxBy(array, iteratee) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    if (typeof iteratee === 'string') {
      var literal = iteratee
      iteratee = (o, literal) => o[literal]
      max = iteratee(array[0])
      for (let i = 1; i < length; i++) {
        let value = iteratee(array[i], literal)
        if (value === undefined)
          continue
        if (max[literal] < value)
          max = array[i]
      }
    } else if (typeof iteratee === 'function') {
      max = iteratee(array[0])
      for (let i = 1; i < length; i++) {
        let value = iteratee(array[i])
        if (value === undefined)
          continue
        else if (max !== undefined && iteratee(min) < value)
          max = array[i]
      }
    } else
      return undefined
    return max
  }

  function min(array) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    let min = array[0]
    for (let i = 1; i < length; i++) {
      min = min < array[i] ? min : array[i]
    }
    return min
  }

  function minBy(array, iteratee) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    if (typeof iteratee === 'string') {
      var literal = iteratee
      iteratee = (o, literal) => o[literal]
      min = iteratee(array[0])
      for (let i = 1; i < length; i++) {
        let value = iteratee(array[i], literal)
        if (value === undefined)
          continue
        else if (min !== undefined && min[literal] < value)
          min = array[i]
      }
    } else if (typeof iteratee === 'function') {
      for (let i = 1; i < length; i++) {
        min = iteratee(array[0])
        let value = iteratee(array[i])
        if (value === undefined)
          continue
        else if (min !== undefined && iteratee(min) < value)
          min = array[i]
      }
    } else
      return undefined
    return min
  }

  function sum(array) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    let sum = 0
    for (let i = 0; i < length; i++) {
      sum += array[i]
    }
    return sum
  }

  function sumBy(array, iteratee) {
    if (!array || !array.length)
      return undefined
    let length = array.length
    let sum
    if (typeof iteratee === 'string') {
      var literal = iteratee
      iteratee = (o, literal) => o[literal]
      sum = iteratee(array[0], literal)
      for (let i = 1; i < length; i++) {
        let value = iteratee(array[i], literal)
        if (value === undefined)
          continue
        else if (sum === undefined)
          sum = value
        else
          sum += value
      }
    } else if (typeof iteratee === 'function') {
      sum = iteratee(array[0])
      for (let i = 1; i < length; i++) {
        let value = iteratee(array[i])
        if (value === undefined)
          continue
        else if (sum === undefined)
          sum = value
        else
          sum += value
      }
    } else
      return undefined
    return sum
  }

  return {
    chunk,
    compact,
    concat,
    difference,
    drop,
    dropRight,
    fill,
    flatten,
    flattenDeep,
    flattenDepth,
    fromPairs,
    head,
    indexOf,
    initial,
    reverse,
    sortedIndex,
    toArray,
    max,
    maxBy,
    min,
    minBy,
    sum,
    sumBy,
  }
}();
