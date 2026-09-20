const buttons = document.querySelectorAll("button")
const resultEl = document.getElementById("result")
const playerScoreEl = document.getElementById("user-score")
const computerScoreEl = document.getElementById("computer-score")
const playerPickEl = document.getElementById("player-pic")
const computerPickEl = document.getElementById("computer-pic")
const rockPictureEl = document.getElementById("rock")
const paperPictureEl = document.getElementById("paper")
const scissorsPictureEl = document.getElementById("scissors")




let playerScore = 0
let computerScore = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const result = playRound(button.id, computerPlay())

        resultEl.textContent = result
    })
})

function computerPlay() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)

    return choices[randomChoice]
}

function playRound(playerSelection,computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!" 
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper"  && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) { 
        playerScore++
        playerScoreEl.textContent = playerScore
        
        return "You win! " + playerSelection + " beats " + computerSelection   
    } else {
        computerScore++
        computerScoreEl.textContent = computerScore
        
        return "You lose! " + computerSelection + " beats " + playerSelection
    }
}
// ------------------------player pic------------------------------
// 1. Create the <img> element
const img = document.createElement("img");

// 2. Set the image attributes
img.src = "images/rock.jpg" // Image URL
img.alt = "an image of a rock"; // Accessibility text
img.width = 80; // Width in pixels
img.height = 80; // Height in pixels

// 3. Optional: Add a class name for styling
img.className = "rock-image"

// 4. Target the container and insert the image into the DOM
const container = document.getElementById("player-container")
container.appendChild(img);

// ----------------computer pic-------------------------------
// 1. Create the <img> element
const img2 = document.createElement("img");

// 2. Set the image attributes
img2.src = "images/paper.jpg" // Image URL
img2.alt = "an image of a paper"; // Accessibility text
img2.width = 80; // Width in pixels
img2.height = 80; // Height in pixels

// 3. Optional: Add a class name for styling
img2.className = "paper-image"

// 4. Target the container and insert the image into the DOM
const containers = document.getElementById("computer-container")
containers.appendChild(img2);