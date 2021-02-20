const btn = document.querySelector("button")
const div = document.querySelector("div")
const names = ["Annie", "Alice", "Anastazia", "Albert", "Bethany", "Tom", "Mathiew", "Max", "Billy", "Lydia", "Samuel"];
const firstLine = ["A great name for Your kid is", "You should choose", "The best choice seems to be", "There will be lot of fun with", "The greatest - "]
console.log(Math.random())
const nameGenerator = () => {
    const index = (Math.floor(Math.random() * names.length))
    // console.log(names[index])
    div.textContent = `${firstLine[(Math.floor(Math.random()*firstLine.length))]} ${names[index]}`
}
btn.addEventListener(`click`, nameGenerator)