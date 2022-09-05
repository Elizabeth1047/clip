
const tl = gsap.timeline({dafault:{}});
gsap.registerPlugin(ScrollTrigger);
  tl.to(".head", {
    y: "-0% ",
    ease: "power4.inOut",
    "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    duration: 2,
    opacity: 1,
  })
    .to(".everything_copy", {
      y: "0% ",
      ease: "power4.inOut",
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      opacity: 1,
    })
    .to(".button", {
      x: "0% ",
      ease: "power4.inOut",
      duration: 1,
      opacity: 1.2,
    })
    .to(".buttons", {
      x: "0% ",
      ease: "power4.inOut",
      duration: 1.2,
      opacity: 1,
    })
    .to(".track_snippets", {
      y: "0% ",
      ease: "power4.inOut",
      "clip-path": "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      duration: 2,
      opacity: 1,
    });
    
// gsap.to(".QIC--img", {
//   scrollTrigger: {
//     trigger: ".QIC--img" ,
//     toggleActions: "restart reverse restart reverse",
//     start: "top center",
//     end: "60% 0%",
//     // markers: true,
//   },
//   x: "100vw",
//   ease: "power4.inOut",
//   opacity: 1,
//   duration: 2,
// });
gsap.from(".QIC--img", {
  scrollTrigger: {
    trigger: ".QIC--img",
    toggleActions: "restart reverse restart reverse",
    start: "top center",
    end: "60% 0%",
    // markers: true,
  },
  y: " 100 ",
  ease: "power4.inOut",
  opacity: 0,
  duration: 2,
});
//  gsap.to(".QIC--text", {
//    scrollTrigger: {
//      trigger: ".QIC--text",
//      toggleActions: "restart reverse restart reverse",
//      start: "8% 50%",
//      end: "88% 0%",
//     //  markers: true,
//    },
//    x: "0vw",
//    ease: "power4.inOut",
//    opacity: 1,
//    duration: 2,
//  });
 gsap.from(".QIC--tex", {
   scrollTrigger: {
     trigger: ".QIC--tex",
     toggleActions: "restart reverse restart reverse",
     start: "8% 50%",
     end: "88% 0%",
     //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   stagger: 1,
   opacity: 0,
   duration: 2,
 });

 gsap.from(".access_clipboard-text", {
   scrollTrigger: {
     trigger: ".access_clipboard-text",
     toggleActions: "restart reverse restart reverse",
     start: "top 80%",
     end: "10% 10%",
    //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   
   opacity: 0,
   duration: 2,
 });
 gsap.from(".access_clipboard-img", {
   scrollTrigger: {
     trigger: ".access_clipboard-text",
     toggleActions: "restart reverse restart reverse",
     start: "top 50%",
     end: "400% 0%",
     // markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   opacity: 0,
   duration: 2,
 });

 gsap.from(".work", {
   scrollTrigger: {
     trigger: ".work",
     toggleActions: "restart reverse restart reverse",
     start: "top 80%",
     end: "10% 10%",
    //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   stagger: 1,
   opacity: 0,
   duration: 2,
 });
 gsap.from(".cp", {
   scrollTrigger: {
     trigger: ".cp",
     toggleActions: "restart reverse restart reverse",
     start: "top 80%",
     end: "10% 10%",
    //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   stagger:1,
   opacity: 0,
   duration: 2,
 });
 gsap.from(".imgss", {
   scrollTrigger: {
     trigger: ".imgss",
     toggleActions: "restart reverse restart reverse",
     start: "top 80%",
     end: "10% 10%",
    //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   stagger: 1,
   opacity: 0,
   duration: 2,
 });
 gsap.from(".last", {
   scrollTrigger: {
     trigger: ".last",
     toggleActions: "restart reverse restart reverse",
     start: "top 80%",
     end: "10% 10%",
    //  markers: true,
   },
   y: " 100 ",
   ease: "power4.inOut",
   stagger: 1,
   opacity: 0,
   duration: 2,
 });
 
    
    