const popupEl = document.getElementById("popupBox")
const openBtnEl = document.getElementById("openBtn")
const closeBtnEl = document.getElementById("closeBtn")
const frownyFaceEl = document.getElementById("frowny")
const neutralFaceEl = document.getElementById("neutral")
const happyFaceEl = document.getElementById("happy")
const responseEl = document.getElementById("response")


function getReviewHappy() {
    responseEl.innerText = "Thank you!" + " Feedback: Happy. " + "We are glad you had a great experience!" 
}

function getReviewNeutral() {
    responseEl.innerText = "Thank you!" + " Feedback: Neutral. " + "We will use your response to improve our customer service." 
}

function getReviewUnhappy() {
    responseEl.innerText = "Thank you!" + " Feedback: Unhappy. " + "We will use your response to improve our customer service." 
}


frownyFaceEl.addEventListener("click", getReviewUnhappy)
neutralFaceEl.addEventListener("click", getReviewNeutral)
happyFaceEl.addEventListener("click", getReviewHappy)


openBtnEl.addEventListener("click", () => {
    popupEl.showModal()
})

closeBtnEl.addEventListener("click", () => {
    popupEl.close()
})
