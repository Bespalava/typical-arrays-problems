
exports.min = function min (array) {  
    if (arguments.length === 0 || array.length === 0) return 0;
    return array[0];
}

exports.max = function max (array) {
  return 0;
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
    return  array.reduce((all, one) => all + one, 0) / array.length;
}
