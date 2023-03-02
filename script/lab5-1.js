var inpTitle
var inpDescription
var inpAcceptTerms

window.onload = function () {
    var form = document.getElementById("mainForm")
    form.addEventListener("submit", validate)
    inpTitle = document.querySelector("input[name='title']")
    inpDescription = document.querySelector("textarea[name='description']")
    inpAcceptTerms = document.querySelector("input[name='accept']")
    setListeners()
}

function setListeners() {
    inpTitle.addEventListener("keyup", function () { validate(inpTitle) })
    inpDescription.addEventListener("keyup", function () { validate(inpDescription) })
    inpAcceptTerms.addEventListener("change", function () { validate(inpAcceptTerms) })
   
}

function validate(e) {
    if (inpTitle.value == "") {
        highlight(inpTitle.parentNode)
    }
    else {
        removeHighlight(inpTitle.parentNode)
    }

    if (inpDescription.value == "") {
        highlight(inpDescription.parentNode)
    }
    else {
        removeHighlight(inpDescription.parentNode)
    }

    if (inpAcceptTerms.type == "checkbox") {
        if (inpAcceptTerms.checked == false) {
            highlight(inpAcceptTerms.parentNode)
        }
        else{
            removeHighlight(inpAcceptTerms.parentNode)
        }
    }

    if (inpTitle.value == "" || inpDescription.value == "" || (inpAcceptTerms.checked == false)) {
        e.preventDefault();
    }
}

function highlight(e) {
    e.className = "highlight";
}

function removeHighlight(e) {
    e.className = "required";
}