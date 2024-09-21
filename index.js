let home = document.getElementById("homeVal");
let guest = document.getElementById("guestVal");
let val = 0;
let vals = 0;
let begin = false;

function oneH() {
    if (!begin) return;
    val += 1;
    home.textContent = val;
    animateScore(home);
}

function twoH() {
    if (!begin) return;
    val += 2;
    home.textContent = val;
    animateScore(home);
}

function thrH() {
    if (!begin) return;
    val += 3;
    home.textContent = val;
    animateScore(home);
}

function one() {
    if (!begin) return;
    vals += 1;
    guest.textContent = vals;
    animateScore(guest);
}

function two() {
    if (!begin) return;
    vals += 2;
    guest.textContent = vals;
    animateScore(guest);
}

function thr() {
    if (!begin) return;
    vals += 3;
    guest.textContent = vals;
    animateScore(guest);
}

function start() {
    begin = true;
}

function stop() {
    begin = false;
}

function end() {
    begin = false;
    val = 0;
    vals = 0;
    guest.textContent = vals;
    home.textContent = val;

}

function animateScore(element) {
    element.style.transform = "scale(1.2)";
    setTimeout(() => {
        element.style.transform = "scale(1)";
    }, 150);

}

function startGame() {
    document.querySelector('.hero').style.display = 'none';
    document.querySelector('.game-container').style.display = 'block';
}