// function to pront odd number with using odd number and even number condition 

function generateOddNum(a) {
  const oddNumer  = [];
  let limit = a % 2 === 0 ? a - 1 : a;

  for (let i = 1; i <= limit; i += 2) {
    result.push(i);
  }
  return result;
}

console.log(generateOddNum(8));  
