
function loadingAnimation(){
    gsap.from(" #come1 ", {
        y:30,
        opacity:0,
        delay:0.6,
        duration:0.4,
    
    })
    gsap.from("#come2", {
        y:30,
        opacity:0,
        delay:0.7,
        duration:0.3,
        
    
    }) 
    gsap.from("#come3", {
        y:30,
        opacity:0,
        delay:0.8,
        duration:0.3,
        
    
    })

    gsap.from("#para", {
        y:30,
        opacity:0,
        delay:0.9,
        duration:0.3,
        
    
    })

    gsap.from("#more", {
        y:30,
        opacity:0.9,
        delay:0.10,
        duration:0.3,
        
    
    })

    gsap.from(".detail1", {
        y:30,
        opacity:0,
        delay:0.90,
        duration:0.6,
        
    
    })


  }

  loadingAnimation();

 
  

   
    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      }

