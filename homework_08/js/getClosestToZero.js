function getClosestToZero() {
  let argArray = Array.from(arguments), result = Infinity;
  argArray.forEach(e => {
    result = Math.abs(e) < Math.abs(result) ? e : result;
  }); 
  return result;
} 
