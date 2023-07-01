const unreadMessages = document.querySelectorAll("#mark-post,#angela-post,#jacob-post");
const readMessages = document.querySelector("#read-messages");
const counter = document.querySelector(".counter");
const dots = document.querySelectorAll(".dot");

readMessages.addEventListener("click", markAllFunction);

let toggle = true;
let count = unreadMessages.length;


function markAllFunction() {
    toggle = !toggle
    if (toggle === true) {
        unreadMessages.forEach(message => {
            return message.style.backgroundColor = "#e5effa"
        });
        dots.forEach(dot => {
            return dot.style.backgroundColor = "#f65351";
        });
        counter.innerHTML = count;
        readMessages.innerHTML = "Mark all as read";
    } 
    else {
        unreadMessages.forEach(message => {
            return message.style.backgroundColor = "transparent"
        });
        dots.forEach(dot => {
            return dot.style.backgroundColor = "transparent";
        });
        counter.innerHTML = count - 3;
        readMessages.innerHTML = "Unread Messages";

    }
}



