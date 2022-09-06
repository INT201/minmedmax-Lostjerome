const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  let min = n1 < n2 && n1 < n3 ? n1 : n2 < n3 ? n2 : n3;
  let max = n1 > n2 && n1 > n3 ? n1 : n2 > n3 ? n2 : n3;
  let params = [n1, n2, n3];
  params.splice(params.indexOf(min), 1);
  params.splice(params.indexOf(max), 1);
  let med = params[0];

  return {
    min: min,
    mid: med,
    max: max,
  };
}
module.exports = minMedMax;
