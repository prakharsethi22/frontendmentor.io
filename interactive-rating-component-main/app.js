const submit = document.querySelector('.submit');
const thankYou = document.querySelector('.thank-you');
const ratingState = document.querySelector('.rating-state');
const inputRating = document.querySelector('.input-rating');
const ratingButtons = document.querySelectorAll('.btn');



submit.addEventListener('click', (e) => {
  thankYou.classList.remove('hidden');
  ratingState.style.display = "none";   
})

ratingButtons.forEach((rate) => {
    rate.addEventListener("click", () => {
        inputRating.innerText = rate.innerText;

    })

})