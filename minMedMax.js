const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let min = n1;
  let med = n1;
  let max = n1;
  n2 < min ? (min = n2) : n2 > max ? (max = n2) : (med = n2);
  n3 < min ? (min = n3) : n3 > max ? (max = n3) : (med = n3);
  return {
    min: min,
    mid: med,
    max: max,
  };
}
module.exports = minMedMax;
