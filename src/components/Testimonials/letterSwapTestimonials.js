const LetterSwap2 = () => {
   const letters = "abcdefghijklmnopqrStuvwxyz";
   let Sculpt2 = document.getElementById('sculpt2');
   Sculpt2.setAttribute('data-value', 'Sculpt');

   Sculpt2.onmouseover = (event) => {
      let iterations = 0;
      const interval = setInterval(() => {
         event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < iterations) {
               return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)]
         }).join("");
         if (iterations >= event.target.dataset.value.length) clearInterval(interval);
         iterations += 1;
   }, 40)}
}

export default LetterSwap2

// Array.from(document.querySelectorAll())
// forEach(setAttribute)
// life cycle methods for functional components react (init)