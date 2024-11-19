const box = document.querySelectorAll('.ina')

function color(){
    for(let i=0; i < box.length; i++){
        const r = Math.floor(Math.random() *256)
        const g = Math.floor(Math.random() *256)
        const b = Math.floor(Math.random() *256)

        box[i].style.backgroundcolor = `rgb(${r}, ${g}, ${b})`
    } 
}