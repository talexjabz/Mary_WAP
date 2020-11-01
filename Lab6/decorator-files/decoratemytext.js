function button_handler() {
    let elem = document.getElementById("textarea");
    let currentSize = getComputedStyle(elem, null).fontSize
    let intCurrentSize = parseInt(currentSize);
    elem.style.fontSize = (intCurrentSize + 2) + "pt";
}

function button_click() {
    setInterval(button_handler, 500);
}

function box_checked() {
    let textareavar = document.getElementById("textarea");
    if (document.getElementById("bling").checked) {
        textareavar.style.fontWeight = "bold";
        textareavar.style.color = "green";
        textareavar.style.textDecoration = "underline";
        document.body.style.backgroundImage = "url('https://www.pixelstalk.net/wp-content/uploads/2016/07/4k-Images-Free-Download.jpg')";
    } else {
        textareavar.style.fontWeight = "normal";
        textareavar.style.color = "black";
        textareavar.style.textDecoration = "none";
        document.body.style.backgroundImage = "none";
    }
}

function malko() {
    let textareavar = document.getElementById("textarea");
    let data = textareavar.value;

    let array = data.toString().split(" ");
    textareavar.value = array.map(word => {
        if (word.length >= 5) return "Malkovich";
        else return word;
    }).toString()
        .replaceAll(",", " \n")
}