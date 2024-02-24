window.addEventListener("mousemove", function(dets) {
    var circle = document.querySelector("#circle");
    var mousex = dets.clientX;
    var mousey = dets.clientY;

    // with gsap 
    
    gsap.to("#circle", {
            left: mousex,
            top: mousey,
            ease: Power4
        })
    // without gsap

        // document.querySelector("#circle").style.left = dets.clientX + "px";
        // document.querySelector("#circle").style.top = dets.clientY + "px";
    })

