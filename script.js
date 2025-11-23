function sayHello() {
    alert("Hello! Welcome to my webpage!");
}

function goHome() {
    window.location.href = "./index.html";
}

function goLearn() {
    window.location.href = "./learn-more.html";
}

function goContact() {
    window.location.href = "./contact.html";
}

function goFoia() {
    window.location.href = "./foia.html";
}

function b2top() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}