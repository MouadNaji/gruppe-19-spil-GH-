window.addEventListener("load", sidenVises);
let timeLeft = 20;
let oldRando = 800;
let randoArr = [1, 2, 3, 4, 5, 6, 7];
let points = 0;
let gameEnded = false;

let showSettingsEffektSound = true;
let showSettingsMusic = true;

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
    document.querySelector("#settingsknapstart").addEventListener("click", showSettings);

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
document.querySelector("#start").addEventListener("animationend", mission);

function mission() {
    console.log("mission");
    document.querySelector("#mission").classList.remove("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#mission").addEventListener("click", startGame);
    document.querySelector("#tjekknap").classList.add("pulse2");

    document.querySelector("#melding").play();
}

function startGame() {
    console.log("startGame");

    //start baggrundsmusik
    document.querySelector("#background_music").play();

    //    document.querySelector("#gameOver1").classList.add("hide");
    //    document.querySelector("#gameOver2").classList.add("hide");
    document.querySelector("#mission").classList.add("hide");
    document.querySelector("#start").classList.add("hide");
    document.querySelector("#billede1").addEventListener("click", pointsTjek);
    document.querySelector("#billede1").addEventListener("animationend", gameOver2);
    document.querySelector("#billede2").addEventListener("click", pointsTjek);
    document.querySelector("#billede2").addEventListener("animationend", gameOver2);
    document.querySelector("#billede3").addEventListener("click", pointsTjek);
    document.querySelector("#billede3").addEventListener("animationend", gameOver2);
    document.querySelector("#billede4").addEventListener("click", pointsTjek);
    document.querySelector("#billede4").addEventListener("animationend", gameOver2);
    document.querySelector("#billede5").addEventListener("click", gameOver1);
    document.querySelector("#billede5").addEventListener("animationend", tjek);
    document.querySelector("#billede6").addEventListener("click", gameOver1);
    document.querySelector("#billede6").addEventListener("animationend", tjek);
    document.querySelector("#billede7").addEventListener("click", gameOver1);
    document.querySelector("#billede7").addEventListener("animationend", tjek);
    startTime();
    tjek();


}
//  fjerner animation og synlighed

function pointsTjek() {
    points++;
    document.querySelector("#points").innerHTML = points;
    console.log("points " + points);
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
    random();

}

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
    random();
}

function random() {
    if (oldRando == 800) {
        var randoNUM = Math.ceil(Math.random() * 6);


    } else {


        randoArr.splice(oldRando - 1, 1);

        var randoNUM = Math.floor(Math.random() * 5);



    }
    console.log("=====================================");
    console.log("randoArr: " + randoArr);

    let rando = randoArr[randoNUM];



    console.log("olando: " + oldRando);

    oldRando = rando;
    console.log("det vi vil ha rando: " + rando);
    document.querySelector("#billede" + rando).classList.add("swoop");
    document.querySelector("#billede" + rando).classList.remove("hide");
    randoArr = [1, 2, 3, 4, 5, 6, 7];

}

function replay() {
    console.log("click replay");
    window.location.reload(false);
}

// --------------laver et nyt billede
//function billedeAnimation() {
//    console.log("billedeAnimation")
//    billedeNr = Math.floor((Math.random() * 2) + 1);
//    console.log(billedeNr);
//
//
//    function nytNr() {
//        console.log("Marias funktion")
//        billedeNrOld = billedeNr;
//        billedeNr = Math.floor((Math.random() * 2) + 1);
//        console.log(billedeNrOld);
//    }
//    if (billedeNr == billedeNrOld) {
//        nytNr();
//    } else {
//        document.querySelector("#billede" + billedeNr).classList.remove("hide");
//        document.querySelector("#billede" + billedeNr).classList.add("swoop");
//        document.querySelector("#billede" + billedeNr).addEventListener("animationend", nytNr);
//
//
//    }

//{
//        billedNrOld = billedNr;
//        console.log(billedeNr);
//    }
//    if (billedeNr == billedeNrOld) {
//        nytNr();
//
//    }
//
//
//
//    function nytNr() {
//        console.log("lort");
//        billedeNr = Math.floor((Math.random() * 7) + 1);
//        console.log("old" + billedeNrOld);
//
//
//
//    }



//-- -- -- - Timer-- -- -- -

function startTime() {
    timeLeft--;
    console.log(timeLeft);

    if (timeLeft > 0) {

        gameTimeOut = setTimeout(startTime, 1000);


    } else {
        levelComplete();
    }

    document.querySelector("#tid").textContent = timeLeft;
}

function hitBottom() {

}

function gameOver1() {
    gameEnded = true;
    console.log("gameOver1");
    document.querySelector("#gameover1").classList.remove("hide");
    document.querySelector("#game_background").classList.add("hide");
    document.querySelector("#gameover2").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#politihm").classList.add("animation");
    document.querySelector("#replayknap1").addEventListener("click", replay);
    removeAnimationEndOnGameOver2();
    document.querySelector("#gameover_audio").play();
    document.querySelector("#replayknap1").classList.add("pulse2");
}

function gameOver2() {
    gameEnded = true;
    console.log("gameOver2");
    document.querySelector("#gameover2").classList.remove("hide");
    document.querySelector("#game_background").classList.add("hide");
    document.querySelector("#gameover1").classList.add("hide");
    document.querySelector("#levelcomplete").classList.add("hide");
    document.querySelector("#replayknap2").addEventListener("click", replay);
    document.querySelector("#surpoliti").classList.add("animation");
    document.querySelector("#gameover_audio").play();
    document.querySelector("#replayknap2").classList.add("pulse2");

}

function levelComplete() {
    console.log("levelComplete");
    if (gameEnded == false) {
        document.querySelector("#levelcomplete").classList.remove("hide");
        document.querySelector("#politi_thumbsup").classList.add("animation")
        document.querySelector("#replayknap3").addEventListener("click", replay);
        removeAnimationEndOnGameOver2();
        document.querySelector("#levelcomplete_audio").play();
        document.querySelector("#replayknap3").classList.add("pulse2");
    }
}

function showSettings() {
    console.log("show settings");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#luksettings").addEventListener("click", hideSettings);

    document.querySelector("#setting_effect_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);

}

function hideSettings() {
    console.log("hide settings");
    document.querySelector("#settings").classList.add("hide");
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
function sprite1() {
    console.log("sprtieanimation")
    document.querySelector("#politi_thumbsup").classList.add("on_off");

}

function sprite2() {
    console.log("sprtieanimation2")
    document.querySelector("#surpoliti").classList.add("off_on");

}

function removeAnimationEndOnGameOver2() {

    document.querySelector("#billede1").removeEventListener("animationend", gameOver2);

    document.querySelector("#billede2").removeEventListener("animationend", gameOver2);
    document.querySelector("#billede3").removeEventListener("animationend", gameOver2);
    document.querySelector("#billede4").removeEventListener("animationend", gameOver2);
}



/*************musik og lyd****************/



function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == false) {
        //her klikker vi lyden på
        showSettingsEffektSound = true;
        document.querySelector("#lydeffekter_sprite").classList.add("off_on");
        document.querySelector("#lydeffekter_sprite").classList.remove("off");
        document.querySelector("#lydeffekter_sprite").addEventListener("animationend", soundsOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsEffektSound = false;
        document.querySelector("#lydeffekter_sprite").classList.add("on_off");
        document.querySelector("#lydeffekter_sprite").classList.remove("on");
        document.querySelector("#lydeffekter_sprite").addEventListener("animationend", soundsOff);
        //        soundsOn();
    }

}

function soundsOff() {
    console.log("soundsOff function værdi er " + showSettingsEffektSound);
    document.querySelector("#lydeffekter_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#lydeffekter_sprite").classList.remove("on_off");
    document.querySelector("#lydeffekter_sprite").classList.add("off");
    //    her slukkes for efx
    document.querySelector("#gameover_audio").muted = true;
    document.querySelector("#levelcomplete_audio").muted = true;
    document.querySelector("#sendtext_audio").muted = true;
    document.querySelector("#melding").muted = true;
}

function soundsOn() {
    console.log("soundsOn function værdi er " + showSettingsEffektSound);
    document.querySelector("#lydeffekter_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#lydeffekter_sprite").classList.remove("off_on");
    document.querySelector("#lydeffekter_sprite").classList.add("on");
    //    her tændes for efx
    document.querySelector("#gameover_audio").muted = false;
    document.querySelector("#levelcomplete_audio").muted = false;
    document.querySelector("#sendtext_audio").muted = false;
    document.querySelector("#melding").muted = false;
}


function toggleMusic() {
    console.log("togglemusic");

    if (showSettingsMusic == false) {
        //her klikker vi lyden på
        showSettingsMusic = true;
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);
        //        soundsOff();
    } else {
        //her kikker vi lyden af - slukker den
        showSettingsMusic = false;
        document.querySelector("#music_sprite").classList.add("on_off");
        document.querySelector("#music_sprite").classList.remove("on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);
        //        soundsOn();
    }

}

function musicOff() {
    console.log("musicOff function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");

    //    her slukkes for muisk
    document.querySelector("#background_music").pause();
    document.querySelector("#background_music").muted = true;

}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsMusic);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");

    //    her tændes for musik
    document.querySelector("#background_music").play();
    document.querySelector("#background_music").muted = false;

}
