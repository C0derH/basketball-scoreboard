const homeScoreEl = document.getElementById("home-score")
const guestScoreEl = document.getElementById("guest-score")
let homeScore = 0
let guestScore = 0

homeScoreEl.textContent = homeScore
guestScoreEl.textContent = guestScore

function add1ToHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function add2ToHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function add3ToHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}


function add1ToGuest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function add2ToGuest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function add3ToGuest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}