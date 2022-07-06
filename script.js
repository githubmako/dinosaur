let character = document.getElementById("character"); 
let block = document.getElementById("block"); 
let counter = document.getElementById("counter"); 
counter1 = 0; 
function jump(){
    if(character.classList != "animate")
    {
        character.classList.add("animate");
    }
    else 
    {
       return; 
    }
    
    setTimeout(function(){
        character.classList.remove("animate");
    },300);}

    let check = setInterval(function(){

        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); 

        let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); 
        if(blockLeft<20 && blockLeft>0 && characterTop >= 130)
        {
            block.style.animation = "none"; 
            block.style.display = "none"; 
            alert("u lose :/"); 
            counter1++; 
            counter.innerHTML = "death counter" + counter1; 
        }

    },10); 

