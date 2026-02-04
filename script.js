const emojis = ["😀","😂","😍","😎","😢","😡","🤩","🥳","🤔","😴"];

const emoji = document.getElementById("emoji");
const button = document.getElementById("btn");

button.onclick = function () {
    const randomIndex = Math.floor(Math.random() * emojis.length);
    emoji.textContent = emojis[randomIndex];
};
