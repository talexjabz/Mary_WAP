let intervalThread;
let index = 0;
let animeInProgress = false;

function elementStateHandler() {
    let start = document.getElementById("start");
    let stop = document.getElementById("stop");
    let animation = document.getElementById("animation");
    start.disabled = !start.disabled;
    stop.disabled = !stop.disabled;
    animation.disabled = !animation.disabled;
}

function getAnimation() {
    return ANIMATIONS[document.getElementById("animation").value];
}

function sizeHandler() {
    document.getElementById("text-area").style.fontSize = document.getElementById("fontsize").value;
}

function runAnimation(animation, length) {
    animeInProgress = true;
    let textArea = document.getElementById("text-area");
    let animationArray = animation.split("=====\n");
    intervalThread = setInterval(function () {
        textArea.value = animationArray[index];
        if (index === animationArray.length - 1) index = 0;
        else index++;
    }, length);
}

function startHandler() {
    elementStateHandler();
    runAnimation(getAnimation(), 250);
    sizeHandler();
}

function checkboxHandler() {
    clearInterval(intervalThread);
    let intervalDuration = (document.getElementById("turbo").checked ? 50 : 250);
    if (animeInProgress) runAnimation(getAnimation(), intervalDuration);

}

function stopHandler() {
    animeInProgress = false;
    elementStateHandler();
    clearInterval(intervalThread);
    document.getElementById("text-area").value = getAnimation();
}
