module.exports = matrix => {
  if (matrix && matrix.length > 1) { 
    matrix.map((el, index) => (index & 1) ? el.reverse() : el);
    matrix = matrix.flat();
  }
  return matrix || [];
}
