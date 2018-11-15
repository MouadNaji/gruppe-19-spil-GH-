window.addEventListener("load", sidenVises);
let timeLeft = 20;
let billedeNrOld = NaN;
let billedNr = NaN;

function sidenVises() {
    console.log("sidenVises");
    //nulstil alting
    document.querySelector("#game_background").classList.remove("blur");
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
    document.querySelector("#start").classList.add("hide-start");
}
document.querySelector("#start").addEventListener("animationend", startGame);

function startGame() {
    console.log("startGame");
    //    document.querySelector("#gameOver1").classList.add("hide");
    //    document.querySelector("#gameOver2").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#billede1").addEventListener("click", tjek);
    document.querySelector("#billede1").addEventListener("animationend", gameOver2);
    document.querySelector("#billede2").addEventListener("click", tjek);
    document.querySelector("#billede2").addEventListener("animationend", gameOver2);
    document.querySelector("#billede3").addEventListener("click", tjek);
    document.querySelector("#billede3").addEventListener("animationend", gameOver2);
    document.querySelector("#billede4").addEventListener("click", tjek);
    document.querySelector("#billede4").addEventListener("animationend", gameOver2);
    document.querySelector("#billede5").addEventListener("click", gameOver1);
    document.querySelector("#billede5").addEventListener("animationend", tjek);
    document.querySelector("#billede6").addEventListener("click", gameOver1);
    document.querySelector("#billede6").addEventListener("animationend", tjek);
    document.querySelector("#billede7").addEventListener("click", gameOver1);
    document.querySelector("#billede7").addEventListener("animationend", tjek);
    //    startTime();
    tjek();

}
//  fjerner animation og synlighed
function tjek() {
    document.querySelector("#billede1").classList.remove("swoop");
    document.querySelector("#billede2").classList.remove("swoop");
    document.querySelector("#billede3").classList.remove("swoop");
    document.querySelector("#billede4").classList.remove("swoop");
    document.querySelector("#billede5").classList.remove("swoop");
    document.querySelector("#billede6").classList.remove("swoop");
    document.querySelector("#billede7").classList.remove("swoop");
    document.querySelector("#billede1").classList.add("hide");
    document.querySelector("#billede2").classList.add("hide");
    document.querySelector("#billede3").classList.add("hide");
    document.querySelector("#billede4").classList.add("hide");
    document.querySelector("#billede5").classList.add("hide");
    document.querySelector("#billede6").classList.add("hide");
    document.querySelector("#billede7").classList.add("hide");
    billedeAnimation();
}

// --------------laver et nyt billede
function billedeAnimation() {
    console.log("billedeAnimation")
    billedeNr = Math.floor((Math.random() * 7) + 1);
    console.log(billedeNr);
    document.querySelector("#billede" + billedeNr).classList.remove("hide");
    document.querySelector("#billede" + billedeNr).classList.add("swoop"); {
        billedNrOld = billedNr;
        console.log(billedeNr);
    }
    if (billedeNr == billedeNrOld) {
        nytNr();

    }



    function nytNr() {
        console.log("lort");
        billedeNr = Math.floor((Math.random() * 7) + 1);
        console.log("old" + billedeNrOld);



    }

}

//-------Timer-------

//function startTime() {
//    timeLeft--;
//    console.log(timeLeft);
//
//    if (timeLeft > 0) {
//
//        gameTimeOut = setTimeout(startTime, 1000);
//
//
//    } else {
//        levelComplete();
//    }
//
//    document.querySelector("#tid").textContent = timeLeft;
//}

function hitBottom() {




}

function gameOver1() {
    console.log("gameOver1");
    document.querySelector("#gameover1").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");
}

function gameOver2() {
    console.log("gameOver2");
    document.querySelector("#gameover2").classList.remove("hide");
    document.querySelector("#game_background").classList.add("blur");

}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#levelcomplete").classList.remove("hide");

}

//function nytBillede() {
//
//    console.log("nytBillede og billedenr er " + billedeNr);
//
//    document.querySelector("#billede1").classList = "hide";
//    document.querySelector("#billede2").classList = "hide";
//    document.querySelector("#billede3").classList = "hide";
//    document.querySelector("#billede4").classList = "hide";
//    document.querySelector("#billede5").classList = "hide";
//    document.querySelector("#billede6").classList = "hide";
//    document.querySelector("#billede7").classList = "hide";
//
//    billedeNr = Math.floor((Math.random() * 7) + 1);
//
//    function nytNr() {
//        billedeNr = Math.floor((Math.random() * 7) + 1);
//        console.log(billedeNrOld);
//        if (billedeNr == billedeNrOld) {
//            nytNr();
//        }
//        billedeNrOld = billedeNr;
//    }
//
//    if (timeLeft == 0) {
//        levelComplete();
//    } else {
//        nytNr();
//        document.querySelector("#billede" + elementNr).classList = "show";
//        document.querySelector("#billede" + elementNr).addEventListener("animationend", nytBillede);
//    }
//
//
//}
