const sections = gsap.utils.toArray(".portfolio__card");
const lastIndex = sections.length - 1;

sections.forEach((section, i) => {
  section._bg = section.querySelector(".portfolio__img img");
  
  // Create a standalone ST instance, and use the progress value (0 - 1) to tween the timeline's progress
  ScrollTrigger.create({ 
    trigger: section,
    start: ()=> i==0 ? "top top" : "top bottom", // The FIRST section will use a different start value than the rest
    end: ()=> i==lastIndex ? "top top" : "bottom top", // The LAST section will use a different start value than the rest    
    onRefresh: self => { // onRefresh (so it gets reset upon resize), create a timeline that moves the h1 + bg vertically      
      section._tl = gsap.timeline({paused:true, defaults:{ease:'none', overwrite:'auto'}}) 
      .fromTo(section._bg, {y:()=> i==0 ? -innerHeight/50 : 0}, {y:()=> i==lastIndex ? -innerHeight/50 : -innerHeight}, 0)	  
      .progress(self.progress); //use progress to position the timeline correctly      
    },
    onUpdate: self => { gsap.to(section._tl, {duration:0.75, progress:self.progress}); }
  });
  
});