const categories = document.querySelectorAll(".item")
console.log('Number of categories: ' + categories.length)

categories.forEach(category => {
    const name = category.querySelector("h2").textContent
    const count = category.querySelectorAll("li").length
    console.log('Category: ' + name)
    console.log('Elements: ' + count)
})