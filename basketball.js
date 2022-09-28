let homeScoreBoard=document.getElementById("homeScore")
let countHome = 0
function homeplus1(){
        countHome += 1
        homeScoreBoard.textContent = countHome
}
function homeplus2(){
        countHome += 2
        homeScoreBoard.textContent = countHome
}
function homeplus3(){
        countHome += 3
        homeScoreBoard.textContent = countHome
}
let countGuest = 0
let guestScoreBoard=document.getElementById("guestScore")
function guestplus1(){
        countGuest += 1
        guestScoreBoard.textContent = countGuest
}
function guestplus2(){
        countGuest += 2
        guestScoreBoard.textContent = countGuest
}
function guestplus3(){
        countGuest += 3
        guestScoreBoard.textContent = countGuest
}