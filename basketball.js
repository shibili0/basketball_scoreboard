let homeScore = document.getElementById("homeScore");
homeScore.textContent = 0;
let awayScore = document.getElementById("awayScore");
awayScore.textContent = 0;
let homeSum = 0;
let awaySum = 0;
function plusOneH() {
  homeSum += 1;
  homeScore.textContent = homeSum;
  if (homeSum > awaySum) {
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "#D1FAE5";
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "black";
  } else if (awaySum > homeSum) {
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "#D1FAE5";
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "black";
  } else if ((awaySum = homeSum)) {
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "black";
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "black";
  }
}
function plusTwoH() {
  homeSum += 2;
  homeScore.textContent = homeSum;
  if (homeSum > awaySum) {
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "#D1FAE5";
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
      } else if (awaySum > homeSum) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "#D1FAE5";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      } else if ((awaySum = homeSum)) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      }
}
function plusThreeH() {
  homeSum += 3;
  homeScore.textContent = homeSum;
  if (homeSum > awaySum) {
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "#D1FAE5";
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
      } else if (awaySum > homeSum) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "#D1FAE5";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      } else if ((awaySum = homeSum)) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      }
}

function plusOneA() {
  awaySum += 1;
  awayScore.textContent = awaySum;
  if (homeSum > awaySum) {
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "#D1FAE5";
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "black";
  } else if (awaySum > homeSum) {
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "#D1FAE5";
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "black";
  } else if ((awaySum = homeSum)) {
    let awayBack = document.getElementById("awayDisplay");
    awayBack.style.background = "black";
    let homeBack = document.getElementById("homeDisplay");
    homeBack.style.background = "black";
  }
}
function plusTwoA() {
  awaySum += 2;
  awayScore.textContent = awaySum;
  if (homeSum > awaySum) {
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "#D1FAE5";
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
      } else if (awaySum > homeSum) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "#D1FAE5";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      } else if ((awaySum = homeSum)) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      }
}
function plusThreeA() {
  awaySum += 3;
  awayScore.textContent = awaySum;
  if (homeSum > awaySum) {
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "#D1FAE5";
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
      } else if (awaySum > homeSum) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "#D1FAE5";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      } else if ((awaySum = homeSum)) {
        let awayBack = document.getElementById("awayDisplay");
        awayBack.style.background = "black";
        let homeBack = document.getElementById("homeDisplay");
        homeBack.style.background = "black";
      }
}
