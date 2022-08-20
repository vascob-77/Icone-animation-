const tl = gsap.timeline({
  default: { duration: 0.35, ease: "power1.inOut" }
});

const home = document.querySelector(".home-svg");
const notification = document.querySelector(".notification-svg");
const messages = document.querySelector(".messages");

// Home animation
gsap.set('.feather', { scale: 0, transformOrigin:'center' });
home.addEventListener("click", () => {
  gsap.fromTo(home, { scale:1}, {scale: .8, yoyo:true });
  gsap.fromTo('.feather', { scale:0, y:-5}, {scale: 1.5, y: 20, duration:1, stagger: .2 });
  gsap.to('.right-feather', { x:6 })
});

// Notification animation 
gsap.set('.bell', { transformOrigin:'top center' });
gsap.set('.ringer', { transformOrigin:'top center' });
gsap.set('.wave', { transformOrigin: 'bottom', scale:0 });
notification.addEventListener("click", () => {
  gsap.fromTo('.bell', { rotation: -5 }, { rotation: 0, ease: "elastic.out(5,0.2)", duration: 1 });
  gsap.fromTo('.ringer', { rotation: -5, x: 1 }, { x: 0, rotation: 0, duration: 1, ease: "elactic.out(5,0.2)" });
  gsap.fromTo('.wave', { scale: 0 , opacity:1 }, { scale: 1.3, opacity: 0, duration: 1})
});

// Messages animation
gsap.set('.flap', { transformOrigin:'top' });
messages.addEventListener("click", () => {
  tl.fromTo('.messages-svg', { scale: 1 }, { scale: .9 });
  tl.fromTo('.flap', { scale: 1 }, { scale: -1 }, "<50%");
  tl.fromTo('.messages-svg', { scale: .9 }, { scale: 1 }, "<50%");
  tl.fromTo('.note', { opacity: 1, y:0 }, { opacity: 0, y:-40 });
  tl.to('.flap', { scale: 1, duration: 0.75 }, "<50%");
});