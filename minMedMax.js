const { template } = require("@babel/core");

function minMedMax(n1, n2, n3) {
  return {
    min: Math.min(n1, n2, n3),
    mid: Math.median(n1, n2, n3),
    max: Math.max(n1, n2, n3),
  };
}
module.exports = minMedMax;
