const cont = document.querySelector(".container")
const sizeBtn = document.querySelector("#size")
const resetBtn = document.querySelector("#reset")

resetGrid()
sizeBtn.addEventListener("click", changeGridSize)
resetBtn.addEventListener("click", () => resetGrid())

function resetGrid(size = 16) {
    // emtpy the innerHTML of the container div
    cont.innerHTML = "";

    // construct rows
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div")
        row.classList.add("row")
        // construct tiles
        for (let j = 0; j < size; j++) {
            const tile = document.createElement("div")
            tile.classList.add("tile")
            tile.style.opacity = 0
            tile.style.backgroundColor = "black"
            // append tiles to row
            row.appendChild(tile)

            tile.addEventListener("mouseover", (event) => {
                let currentOpacity = parseFloat(event.target.style.opacity);
                if (currentOpacity < 1) {
                    event.target.style.opacity = currentOpacity + 0.1
                }
            });
        }
        // append rows to container
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