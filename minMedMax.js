const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let params = [n1, n2, n3];
  let min = n1 < n2 && n1 < n3 ? n1 : n2 < n3 ? n2 : n3;
  let max = n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
  let med = params.forEach((n) => n !== min && n !== max && (med = n));

  return {
    min: min,
    mid: med,
    max: max,
  };
}
module.exports = minMedMax;
