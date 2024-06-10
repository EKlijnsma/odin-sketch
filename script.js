const cont = document.querySelector(".container")
const sizeBtn = document.querySelector("#size")
const resetBtn = document.querySelector("#reset")

resetGrid()
sizeBtn.addEventListener("click", changeGridSize)
resetBtn.addEventListener("click", () => resetGrid())

function resetGrid(size = 16) {
    cont.innerHTML = "";
    console.log(`resetting size to ${size} squared`)
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.classList.add("row")

        for (let j = 0; j < size; j++) {
            // create tiles
            // append tiles as child to row container
            const tile = document.createElement("div")
            tile.classList.add("tile")
            tile.style.opacity = 0
            tile.style.backgroundColor = "black"
            row.appendChild(tile)
            tile.addEventListener("mouseover", (event) => {
                // event.target.style.backgroundColor = 'black'
                let currentOpacity = parseFloat(event.target.style.opacity);
                if (currentOpacity < 1) {
                    event.target.style.opacity = currentOpacity + 0.1
                }
            });
        }
        // append row container as child to container
        cont.appendChild(row)
    }
}


function getGridSize() {
    let size = 0;
    while (size > 100 || size < 1) {
        size = prompt("Enter grid size (max 100): ")
    }
    return size
}

function changeGridSize() {
    const size = getGridSize()
    resetGrid(size)
}