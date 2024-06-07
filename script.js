const grid = 16
const cont = document.querySelector(".container")

for (let i = 0; i < grid; i++) {
    const row = document.createElement("div")
    row.classList.add("row")

    for (let j = 0; j < grid; j++) {
        // create tiles
        // append tiles as child to row container
        const tile = document.createElement("div")
        tile.classList.add("tile")
        row.appendChild(tile)
    }
    // append row container as child to container
    cont.appendChild(row)
}