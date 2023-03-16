function distanceFromHqInBlocks(pickuplocation) {
  let hqlocation = 42;
  return Math.abs(pickuplocation - hqlocation);
}

function distanceFromHqInFeet(pickuplocation){
  const feetperBlock = 264
  const blocks = distanceFromHqInBlocks(pickuplocation);
  return (blocks * feetperBlock);
}
function distanceTravelledInFeet(start, stop) {
const feetPerBlock = 264;
const distanceTravelled = Math.abs(stop - start);
return distanceTravelled * feetPerBlock;
}    function calculatesFarePrice(startB, stopB) {
const distanceInFeet = distanceTravelledInFeet(startB, stopB)
if (distanceInFeet <= 400) {
    return 0;
}
else if (distanceInFeet >= 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02;
}
else if (distanceInFeet >= 2000 && distanceInFeet <= 2500) {
    return 25;
}
else {
    return `cannot travel that far`;
}
}
