function betterThanAverage(classPoints, yourPoints) {
  // Your code here
  classPoints.push(yourPoints);
  let sumScore = 0;
  for (i = 0; i < classPoints.length; i++) {
    sumScore += classPoints[i];
  }
  let avrScore = sumScore / classPoints.length;

  if (yourPoints > avrScore) {
    return true;
  } else {
    return false;
  }
}
