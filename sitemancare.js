import { menuArray } from "./data.js"
function meniuFF() {
    let textMeniu = ``
    menuArray.forEach(function (item) {
        textMeniu += `
        <div class="mnc">
            <p class="mancare margin0 posabs">${item.emoji}</p>
            <p class="numemancare margin0 posabs">${item.name}</p>
            <p class="ingrediente margin0 posabs">${item.ingredients}</p>
            <p class="pret margin0 posabs">${item.price} lei</p>
            <div class="add-btn margin0 posabs">+</div>
        </div>`
    })
    return textMeniu
}
function render() {
    document.getElementById("meniu").innerHTML = meniuFF
}

render()
