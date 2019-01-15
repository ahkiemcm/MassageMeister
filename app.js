// Newsletter Button
function subscribed() {
    if (document.getElementById("formInput").value == "Enter your email address..."){
    alert("That's not a valid email, sorry...");
    } else if(document.getElementById("formInput").value == "") {
        alert("That's not a valid email, sorry...");
    }else {
        alert("Thanks for joining our newsletter!");
    }
}

// FAQ's Show/Hide Toggle
function answer() {
    var x = document.getElementById("q-a-reveal");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer2() {
    var x = document.getElementById("q-a-reveal2");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer3() {
    var x = document.getElementById("q-a-reveal3");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer4() {
    var x = document.getElementById("q-a-reveal4");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer5() {
    var x = document.getElementById("q-a-reveal5");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer6() {
    var x = document.getElementById("q-a-reveal6");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer7() {
    var x = document.getElementById("q-a-reveal7");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer8() {
    var x = document.getElementById("q-a-reveal8");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

function answer9() {
    var x = document.getElementById("q-a-reveal9");
    if (x.style.display === "none") {
        x.style.display = "block"
    } else {
        x.style.display = "none";
    }
}

// Contacts Modal

var activate = document.getElementById('contact-modal');

var modal = document.getElementById('theModal');

var close = document.getElementById('closeModal');

activate.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}


window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


