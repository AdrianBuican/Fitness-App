
// Questions mid-code, answers at the bottom
const testimonialAnimation = () => {
   const customerReviews = document.querySelector(".customer-reviews");
   customerReviews.classList.add('testim-transition');
   // 1. Why must we clear timeout?
   clearTimeout(customerReviews.timer);
   customerReviews.timer = setTimeout(() => {
      customerReviews.classList.remove('testim-transition');
      customerReviews.timer = null;
   }, 800);

   const testimName = document.querySelector(".testim-name");
   testimName.classList.add('testim-transition');
   clearTimeout(testimName.timer);
   testimName.timer = setTimeout(() => {
      testimName.classList.remove('testim-transition');
      testimName.timer = null;
   }, 800);

   const testimImage = document.querySelector(".testim-image");
   testimImage.classList.add('testim-transition');
   clearTimeout(testimImage.timer);
   testimImage.timer = setTimeout(() => {
      testimImage.classList.remove('testim-transition');
      testimImage.timer = null;
   }, 800);
};

// 1. There are multiple instances of the timeOut() function running at the same time. Each of these instances is setting a timer for 2000 milliseconds, but they are not coordinated with each other. As a result, when the timers expire, the class is removed from the element multiple times, leading to an unexpected and jarring effect when you click fast on the triggering element during the animation. So we have to clear any existing timers before starting a new one.

export default testimonialAnimation

