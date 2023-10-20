let description = document.querySelector(".PageTitle")
let pp = document.getElementById("logo")
description.addEventListener("input", playDescription)

function playDescription(){
    
    if(description.textContent === "rickroll"){
        document.body.style.backgroundImage = "url('rickroll-roll.gif')";
        document.body.style.background = "cover";
    }else if(description.textContent === "askew" || description.textContent === "Askew"){
        
        document.body.style.transform = 'rotate(2deg)'
      
    }else if(description.textContent === "duck" || description.textContent === "Duck"){
        pp.src = "image/canardPp.jpeg"
    }else{
        document.body.style.transform = 'rotate(0deg)'
        pp.src = "image/pp.png"
    }
}
