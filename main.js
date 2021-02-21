const btnForm = document.querySelector(".form")
const btnDraw = document.querySelector(".draw")
const div = document.querySelector("div")
const newName = document.querySelector(".addName")
const names = [];
const firstLine = ["A great name for Your kid is", "You should choose", "The best choice seems to be", "There will be lot of fun with", "The greatest - "]



const addName = (e) => {
    e.preventDefault()
    const input = document.querySelector(`input`)
    const name = input.value
    console.log(input.value)
    if (input.value) {
        names.push(name)
        console.log(names)
        newName.textContent += name + ","
        input.value = ""
    }
}


const nameGenerator = () => {
    const index = (Math.floor(Math.random() * names.length))
    // console.log(names[index])
    div.textContent = `${firstLine[(Math.floor(Math.random()*firstLine.length))]} ${names[index]}`
}
btnForm.addEventListener(`click`, addName)
btnDraw.addEventListener(`click`, nameGenerator)