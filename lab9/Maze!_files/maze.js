$(document).ready(function () {
    let startElem = $("#start");
    let endElem = $("#end");
    let mazeElem = $("#maze");
    let boundaryElem = $(".boundary");
    let gameStart = false;

    mazeElem.mouseleave(function () {
        gameLost()
    });

    startElem.click(function () {
        $("#status").text('Move mouse to end in order to win the game');
        gameStart = true;
        if (boundaryElem.hasClass('you-lose')) {
            boundaryElem.removeClass('you-lose');
        }
        boundaryElem.mousemove(function () {
            gameLost();
        })
    });

    endElem.mousemove(function () {
        if (gameStart) gameWon();
        else if (gameStart && boundaryElem.hasClass('you-lose')) gameLost();

    });

    function gameWon() {
        gameStart = false;
        $("#status")
            .text("Game Won")
            .css('color', 'green')
            .animate({fontSize: '2em'})
    }

    function gameLost() {
        if (gameStart) {
            gameStart = false;
            boundaryElem.addClass('you-lose');
            $("#status").text('Game lost, Try next time');
        }
    }
})