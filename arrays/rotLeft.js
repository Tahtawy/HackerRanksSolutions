function rotLeft(a, d) {
  const aLength = a.length;
  const _a = new Array(aLength);
  
  for (let i = 0; i <aLength; i++) {
    let newIndex;
    const currentIndexMinusD = i - d;
    
    if (currentIndexMinusD < 0)
      newIndex = currentIndexMinusD + aLength;
    else newIndex = currentIndexMinusD;
    
    _a[newIndex] = a[i];
  }
  
  return _a;
}