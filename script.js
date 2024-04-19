gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
var images=document.querySelectorAll(".n");
let delay=0;
  images.forEach(function(image) {
    setTimeout(function() {
      image.style.opacity = '1';
    }, delay);
    delay += 200; // Adjust the delay as needed
    setTimeout(function() {
        image.style.opacity = '0';
      }, delay);
      delay += 150;
  });
  var tl=gsap.timeline();
  tl.to("#main .loader",{
    y:"-100%",
    delay:3
  })
  gsap.to(".video",{
    height:"100vh",
    width:"100vw",
    scrollTrigger:{
      trigger:".video video",
      scroller:"#main",
      scrub:2,
      start:"top 80%",
      end:"top 20%"
    }
  })
 var mouse1=document.querySelector(".mousefollower1");
 var area=document.querySelector(".box1left");
 area.addEventListener("mousemove",function(dets){
  gsap.to(".mousefollower1",{
    left:dets.x-75,
    top:dets.y-130
  })
 })
 area.addEventListener("mouseenter",function(dets){
  mouse1.style.opacity=1
 })
 area.addEventListener("mouseleave",function(dets){
  mouse1.style.opacity=0
  mouse1.style.left=0
  mouse1.style.top=0
 })
 var mouse2=document.querySelector(".mousefollower2");
 var area2=document.querySelector(".box2right");
 area2.addEventListener("mousemove",function(detss){
  gsap.to(".mousefollower2",{
    left:detss.x-1200,
    top:detss.y-100
  })
 })
 area2.addEventListener("mouseenter",function(detss){
  mouse2.style.opacity=1
 })
 area2.addEventListener("mouseleave",function(detss){
  mouse2.style.opacity=0
  mouse2.style.left=0
  mouse2.style.top=0
 })
gsap.to(".page8 h1",{
  width:"500%",
  x:"-28%",
  duration:"5",
  scrollTrigger:{
    scroller:"#main",
    trigger:".page8",
    duration:"5",
    scrub:1,
    pin:".page8"
    // pin:true,
  }
})