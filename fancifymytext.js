
// Alert "Hello, world!" when the "Bigger" button is clicked
function showAlert() {
    alert("Hello, world!");
}

// Change the text area's font size to 24pt
function makeTextBigger() {
    document.getElementById("textInput").style.fontSize = "24pt";
}

// Change style based on radio button selection
function changeStyle() {
    var textArea = document.getElementById("textInput");
    if (document.getElementById("fancyShmancy").checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else if (document.getElementById("boringBetty").checked) {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Uppercase the text and add "-Moo" to the end of each sentence
function moo() {
    var textArea = document.getElementById("textInput");
    var text = textArea.value.toUpperCase();
    var sentences = text.split(".");
    for (var i = 0; i < sentences.length; i++) {
        if (sentences[i].trim().length > 0) {
            sentences[i] = sentences[i].trim() + "_MOO";
        }
    }
    textArea.value = sentences.join(". ");
}

// Adding event listeners
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("biggerBtn").onclick = makeTextBigger;
    document.getElementById("mooBtn").onclick = moo;
});
