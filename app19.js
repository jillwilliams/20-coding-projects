const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.fa-regular'); // Adjust selector to match your HTML
const colorsArray = ['red', 'orange', 'purple', 'green', 'blue'];

updateRating(0);

starsEl.forEach((starEl, index) => {
    starEl.addEventListener('click', () => {
    updateRating(index);
    });
});

function updateRating(index) {
    starsEl.forEach((starEl, idx) => {
    if (idx < index + 1) {
        starEl.classList.add('active');
    } else {
        starEl.classList.remove('active');
    }
});

    emojisEl.forEach((emojiEl) => {
    emojiEl.style.transform = `translateX(-${index * 65}px)`;
    emojiEl.style.color = colorsArray[index];
    });
}
