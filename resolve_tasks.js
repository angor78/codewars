function nbYear(p0, percent, aug, p) {
  let totalYears = 0;
  let totalPopul = p0;
  for (let i = 1; p > totalPopul; i++) {
    let populGrowth = Math.trunc((totalPopul / 100) * percent + aug);
    totalPopul = populGrowth + totalPopul;
    totalYears = i;
  }

  return totalYears;
}
