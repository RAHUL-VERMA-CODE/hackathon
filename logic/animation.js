
const tl=gsap.timeline()

tl.from(".container  nav .logo" ,{
    scale:0,
    opacity:0,
    duration:0.5,
    
    
})

tl.from(".links button " ,{
    scale:0,
    opacity:0,
    duration:1,
    stagger:0.2
    
})

const tl1= gsap.timeline()
tl1.from(".container .content .title h1",{
    y:100,
    opacity:0,
    duration:1.2,
})
tl1.from(".container .content .title p",{
    y:100,
    opacity:0,
    duration:1,
})
tl1.from(".container .content .title button",{
    y:100,
    opacity:0,
    duration:1,
})

tl1.to(".container .content .title button",{
    scale:0.9,
    duration:1,
    repeat:-1,
    yoyo:true
})


gsap.from(".container .content video", {
    opacity:0,
    duration:1,
    delay:1,
    scale:0
})