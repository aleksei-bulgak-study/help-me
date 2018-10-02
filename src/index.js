module.exports = function count(s, pairs) {
  // your implementation
  var N = 1;
  pairs.forEach(pair => {
    N *= pair[0] ** pair[1];
  });

  if(!Number.isFinite(N) || N > 10000000){
    return 0;
  }

  console.log(N)

  let count = 0;
  for (let k = 0; k <= N; k++) {
    let countForK = 0;
    s.split('').forEach((element, index) => {
      let sum = k + index;
      if (sum > 0) {
        let result = moreThanOneGCF(sum);
        if (!result && element == 1) {
          countForK++;
        } else if (result && element == 0) {
          countForK++;
        }
      }
    });
    if(countForK === s.length){
      count++;
    }
  }

  function moreThanOneGCF(number) {
    let isMoreThan1GCF = false;
    if (number == 0 || number == 1) {
      return isMoreThan1GCF;
    }
    pairs.forEach(pair => {
      isMoreThan1GCF = isMoreThan1GCF || number % pair[0] === 0;
    })
    return isMoreThan1GCF;
  }

  return count % 1000000007;
}