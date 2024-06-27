
let urls = ["https://linoy17.github.io/Chine/","https://artemslynchuk.github.io/Japan/","https://kosteckii2009.github.io/Thailand/",
    "https://stasskor.github.io/german/","https://polytifox.github.io/South-Korea/index.html","https://petromord.github.io/Ukrein/",
    "https://saveliybr.github.io/Itali/index.html"
]
  let pointers = document.querySelectorAll(".point")
  let plain =document.querySelector(".plain")
  let sL = plain.getBoundingClientRect().left
  let sR = plain.getBoundingClientRect().top
  let txts = document.querySelectorAll(".about")
  for (let p of pointers){
    p.addEventListener("click",function(){
        
        var targetPosition = this.getBoundingClientRect();
        let i = +this.querySelector(".id").innerHTML
        let tr = txts[i]
        let trPos = tr.getBoundingClientRect()
        anime({
            targets:"#plain",
                    left: (trPos.left+750)+"px",
                    top: (trPos.top+400) + "px" ,
                    duration:3000,
                    easing: 'easeInOutSine' ,
                    // direction: 'alternate'
        },1000)
        anime({
            targets:tr,
            opacity: 1,
            width:"400px",
            duration: 5000,
            delay:2,
            
            begin: function() {
                tr.style.display = 'block';
              },
            
        }).finished.then(function(){
            
            anime({
                targets:"#plain",
                left: (targetPosition.left)+"px",
                top: (targetPosition.top+200) + "px" ,
                easing: 'easeInOutSine' ,
                duration:4000,
                // direction: 'alternate'
            }).finished.then(function() {
                   
                    
                tr.style.width = "0px"
                tr.style.opacity = 0
                plain.style.left = sL
                plain.style.top = sR +300
                setTimeout(function(){window.open( urls[i], '_blank');},300)
                
              })
          })
        })

       
    }
