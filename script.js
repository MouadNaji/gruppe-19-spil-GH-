window.addEventListener("load", sidenVises);



function sidenVises() {
    console.log("sidenVises");
    //nulstil alting

    showStart();
}

function showStart() {
    console.log("showStart");
    document.querySelector("#playknap").classList.add("pulse");
    document.querySelector("#game_background").classList.remove("hide");

}
//klik på start knap
document.querySelector("#playknap").addEventListener("click", hideStart);

function hideStart() {
    console.log("hideStart");
    document.querySelector("#playknap").classList.remove("pulse")

}
