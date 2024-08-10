/* let container = document.querySelector(".container");

function makeDivs(num) {
    for(let i = 0; i < num*num ; i++) {
        let cells = document.createElement("div");
        container.appendChild(cells);
    
        cells.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "yellow";
        });

        cells.addEventListener("mouseout", event => {
            event.target.style.backgroundColor = "#a3a0a0";
        });
    }
}
makeDivs(16); */

let btn = document.querySelector('#generate-grid');
btn.addEventListener("click", () => {
    generateGrid();
});


function generateGrid() {
    let container = document.querySelector('.container');
    let gridSize = document.querySelector('#grid-size').value;
    container.innerHTML = '';

    let numCells = gridSize * gridSize;
    let flexBasis = `calc(100% / ${gridSize})`;

    for(let i = 0; i < numCells; i++) {
        let cell = document.createElement('div');
        cell.style.flexBasis = flexBasis;
        container.appendChild(cell);

        cell.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "yellow";
        });

    }
}

generateGrid();

