const canvas = document.getElementById("canvas")
const amountBtn = document.getElementById("amountBtn")

function squaresmaker(boxAmount){
    for(let i = 0; i< boxAmount ;i++){
    newdiv = document.createElement("div")
    newdiv.classList.add("gamecube")
    newdiv.innerText = "AB"
    canvas.appendChild(newdiv)
    const gamecubes = document.querySelectorAll(".gamecube")
    for(let i = 0; i<gamecubes.length; i++){
    gamecubes[i].addEventListener("mouseover",e=>{
        gamecubes[i].style.backgroundColor="red"
    })
}


}
}

squaresmaker(16)

amountBtn.addEventListener("click",()=>{
    let boxAmount = parseInt(prompt("Kolko chces stvorcov? Menej ako 100 prosim"))
    if(boxAmount>100){
        const boxAmount = parseInt(prompt("Kolko chces stvorcov? Menej ako 100 prosim"))
    }
    console.log("chces " + boxAmount + " stvorcov")
    const forDeletion = document.querySelectorAll(".gamecube").forEach(forDeletion => {
        forDeletion.remove()
    });
    squaresmaker(boxAmount)
    

})










