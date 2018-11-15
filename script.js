window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#playknap").classList.add("pulse");
    document.querySelector("#start").classList.remove("hide");

}
//klik på start knap
document.querySelector("#playknap").addEventListener("click", hideStart);

function hideStart() {
    console.log("hideStart");
    //fjern playknap animation.
    document.querySelector("#playknap").classList.remove("pulse");
    //forsvindings animation på start siden
    document.querySelector("#start").classlist.add("hide-start");
}
document.querySelector("#start").addEventListener("animationend", startGame);

function startGame() {
    console.log("startGame");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#game-background").classList.remove("hide");



}

function hitBottom() {

}
