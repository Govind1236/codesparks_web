var  crs = document.querySelector("#cursor")
var blur = document.querySelector("#blur")
document.addEventListener("mousemove",function(dets){
  crs.style.left = dets.x+"px"
  crs.style.top = dets.y+"px"
  blur.style.left = dets.x - 100 +"px"
  blur.style.top = dets.y- 100 +"px"
  })        

gsap.to("#nav",{
    backgroundColor:"#2ECC71",
    height:"110",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start:"top 100  ",
        end: "top -10%",    
        scrub:1
    }
})
gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        start:"top -20",
        end:"top -100%",
        scrub:2
    }
})