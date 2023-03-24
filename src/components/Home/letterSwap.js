const LetterSwap = () => {
   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let Sculpt = document.getElementById('sculpt');
   Sculpt.setAttribute('data-value', 'SCULPTING');

   Sculpt.onmouseover = (event) => {
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

export default LetterSwap

// Array.from(document.querySelectorAll())
// forEach(setAttribute)
// life cycle methods for functional components react (init)