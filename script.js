let container = document.querySelector(".container");

function makeDivs(num) {
    for(let i = 0; i < num*num ; i++) {
        let cells = document.createElement("div");
        container.appendChild(cells);
    
        cells.addEventListener("mouseover", event => {
            event.target.style.backgroundColor = "yellow";
        });

        cells.addEventListener("mouseout", event => {
            event.target.style.backgroundColor = "#a3a0a0";
        })
    }
}
makeDivs(16);
