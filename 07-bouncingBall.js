//Take height, bounce = bounciness between 0 and 1, window = clicker height;
//Return times that ball passes clicker viewed through window
function bouncingBall(height,  bounce,  window) {
  if (bounce <= 0 || bounce >= 1 || window > h || h <= 0) return -1;
  let passes = 0;
  while (height > window) {
    passes+=2;
    height*=bounce;
  }
  return passes - 1;
}