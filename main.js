const btn = document.querySelector("button")
const div = document.querySelector("div")
const names = ["Annie", "Alice", "Anastazia", "Albert", "Bethany", "Tom", "Mathiew", "Max", "Billy", "Lydia", "Samuel"];
console.log(Math.random())
const nameGenerator = () => {
    const index = (Math.floor(Math.random() * names.length))
    console.log(names[index])
    div.textContent = `A great name for Your kid is ${names[index]}`
}
btn.addEventListener(`click`, nameGenerator)