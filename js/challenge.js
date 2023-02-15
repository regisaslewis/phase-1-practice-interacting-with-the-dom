let intervalID;
const counter = document.querySelector("#counter");
const pause = document.querySelector("#pause");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const heart = document.querySelector("#heart");
let liCount = 0;
let comment = document.getElementById("comment-input");
let submit = document.getElementById("submit");
let ul = document.querySelector("ul");
let commentsSection = document.querySelectorAll("h3")[0];
let form = document.querySelector("#comment-form");

function counterAscend() {
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
    submit.disabled = false;
    intervalID = setInterval(() => {
        counter.textContent++;
    }, 1000);
};

document.addEventListener("DOMContentLoaded", counterAscend);

pause.addEventListener("click", () => {
    if (pause.textContent === " pause ") {
        clearInterval(intervalID);
        plus.disabled = true;
        minus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
        pause.textContent = " resume ";
    } else if (pause.textContent === " resume ") {
        counterAscend();
        pause.textContent = " pause ";
    }
});

minus.addEventListener("click", () => counter.textContent--);
plus.addEventListener("click", () => counter.textContent++);

heart.addEventListener("click", heartClick);

// I don't yet know how to get heartClick() to work properly.  There's some element of getting the list item's value and matching it to the counter's current number that I can't figure out.  I understand what needs to be done, I just don't feel like I have the tools to do it.
// I need that info to make the "if" part of the function activate before the "else".

function heartClick() {
    let li = document.createElement("li");
    li.value = 0;
    let arr = [];
    arr.push(document.querySelectorAll("li"));
    if (arr.find(e => e === counter.textContent) !== undefined) {
        liCount++;
        li.textContent = `${counter.textContent} has been liked ${liCount} times.`;
}   else {
        li.value = counter.textContent;
        liCount = 1;
        ul.appendChild(li);
        li.textContent = `${counter.textContent} has been liked 1 time.`;
    }
}

submit.addEventListener("click", function (e) {
    e.preventDefault();
    let p = document.createElement("p");
    p.style.fontWeight = "normal";
    p.style.fontSize = "16px";
    p.textContent = comment.value;
    commentsSection.appendChild(p);
    comment.value = "";
});

function findLiValues() {
    let liNumberList = document.querySelectorAll("li");
    liNumberList.forEach((e) => e.getAttribute("value"));
}