function minBribe(q) {
  let bribesCount = 0;
  let qLength = q.length;

  for (let i = 0; i < qLength - 1; i++) {
    const idialIndex = i + 1;
    const actualIndexMinusIdialIndex = q[i] - idialIndex;

    if (actualIndexMinusIdialIndex > 2) {
      console.log('Too chaotic');
      return;
    }

    if (actualIndexMinusIdialIndex > 0 && actualIndexMinusIdialIndex <= 2) {
      bribesCount += actualIndexMinusIdialIndex;
    } else {    
      const cachedBribesCount = bribesCount; 
      innerLoop: for (let j = idialIndex; j < qLength; j++) {
        if (q[j] < q[i]) {
          bribesCount++;
          if (bribesCount - cachedBribesCount <= 2) break innerLoop; 
        }
      }
    }
  }

  console.log(bribesCount);
}