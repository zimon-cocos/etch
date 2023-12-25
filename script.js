const canvas = document.getElementById("canvas")




for(let i = 0; i< 16 ;i++){
    newdiv = document.createElement("div")
    newdiv.classList.add("gamecube")
    newdiv.innerText = "AB"
    canvas.appendChild(newdiv)

}

const gamecubes = document.querySelectorAll(".gamecube")

for(let i = 0; i<gamecubes.length; i++){
    gamecubes[i].addEventListener("mouseover",e=>{
        gamecubes[i].style.backgroundColor="red"
    })
}







