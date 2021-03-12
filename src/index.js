
exports.min = function min (array) {  
    if (arguments.length === 0 || array.length === 0) return 0;
    return Math.min.apply(Math, array);
}

exports.max = function max (array) {
    if (arguments.length === 0 || array.length === 0) return 0;
    return Math.max.apply(Math, array);
}

exports.avg = function avg (array) {
  if (arguments.length === 0 || array.length === 0) return 0;
    return  array.reduce((all, one) => all + one, 0) / array.length;
}
