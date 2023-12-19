const Cell_Width = 25;
const Cell_Height = 25;
let Game_Board = [];

const initCells = (totalCells) => {
    const array = new Uint8Array(totalCells);
    self.crypto.getRandomValues(array);

    array.forEach((rng) => {
        Game_Board.push({
            alive: rng % 2 === 0,
            age: 0,
            domItem: null,
            neighbors: []
        });
    });
    
};

const initNeighbors = (index, rows, columns) => {
   
   
    const cornerTopLeft = 0;
    const cornerTopRight = columns - 1;
    const cornerBottomLeft = (columns * rows) - columns;  
    const cornerBottomRight = (columns * rows) - 1;

    if(index === cornerTopLeft) {
        return [
            index + 1,
            cornerTopRight,
            cornerTopRight + 1,
            cornerTopRight + 2,
            cornerTopRight + columns,
            cornerBottomLeft,
            cornerBottomRight
        ];
    }

    if(index === cornerTopRight) {
        return [
            cornerTopLeft,
            index + 1,
            index + 1 + columns,
            index + 1 + columns - 1,
            index - 1,
            cornerBottomRight -1,
            cornerBottomRight,
            cornerBottomLeft,
        ];
    }

    if(index === cornerBottomLeft){
        return [
            index + 1,
            cornerTopLeft + 1,
            cornerTopLeft,
            cornerTopRight,
            cornerBottomRight,
            index - 1,
            index - columns,
            index - columns + 1
        ];
    }

    if(index === cornerBottomRight){
        return [
            cornerBottomLeft,
            cornerTopLeft,
            cornerTopRight,
            cornerTopRight - 1,
            index - 1,
            index - columns - 1,
            index - columns,
            index - columns - columns + 1
        ];
    }

    // top 
    if(index > cornerTopLeft && index < cornerTopRight ) {
        return  [
            index + 1,
            index + 1 + columns,
            index + columns, 
            index - 1 + columns,
            index - 1,
            cornerBottomRight - (columns - (index - 1)),
            cornerBottomRight - (columns - index),
            cornerBottomRight - (columns - (index + 1))
        ];
    }

    //left side
    if(index % (columns) === 0){ 
        return  [
            index + 1,
            index + 1 + columns,
            index + columns,
            index + columns + columns -1,
            index + columns - 1,
            index - 1,
            index - 1 - columns + 1,
            index - 1 - columns + 2,
        ];
    }

    //right side
    if((index - cornerTopRight) % columns === 0){
        return  [
            index - columns + 1,
            index + columns,
            index + columns - 1,
            index - 1,
            index - 1 - columns,  
            index - columns,
            index + 1,
            index - columns - columns + 2,
        ];
    }

    // bottom 
    if(index > cornerBottomLeft ) {
        return  [
            index + 1,
            index - (index + 1 - columns),
            index - 1 - (index + 1 - columns),
            index - 2 - (index + 1 - columns),
            index - 1,
            index - columns - 1,
            index - columns,
            index - columns + 1,
        ];
    }

    return  [
        index + 1,
        index + columns,
        index + columns - 1,
        index + columns - 2,
        index - 1,
        index - 1 - columns,
        index - columns,
        index - columns + 1
    ];

};

const drawBoard = () => {
    const box = document.querySelector('#gameOfLife');
    const boxHeight = box.clientHeight;
    const boxWidth= box.clientWidth;

    const rows = Math.floor(boxHeight / (Cell_Height) + 2);
    const columns = Math.floor(boxWidth / (Cell_Width));

    const totalCells = rows * columns;

    initCells(totalCells);

    Game_Board.forEach((cell, index) => {
        const div = document.createElement('div');
        div.style.width = `${Cell_Width}px`;
        div.style.height = `${Cell_Height}px`;
        div.style.backgroundColor = 'white';
        div.style.border = '1px solid black';
        div.style.flexGrow = '0';
        div.style.flexShrink = '0';

        const cellClass = cell.alive ? 'worm' : 'skull';
        div.classList.add(cellClass);

        cell.domItem = div;
        cell.neighbors = [...initNeighbors(index, rows, columns)];
        box.appendChild(div);
    });
};

const totalAliveNeighbors = (neighbors) => {
    let aliveNeighbors = 0;
    neighbors.forEach((cellIndex) => {
        if (Game_Board[cellIndex].alive) {
            aliveNeighbors++;
        }
    });

    return aliveNeighbors;
};

const paintBoard = () => {
    Game_Board.forEach((cell) => {
        const {alive, age, domItem} = cell;

        if(!alive && age === -1) {
            domItem.classList.remove('worm');
            domItem.classList.add('skull');
        }

        if(!alive && age !== -1){
            domItem.classList.remove('skull');
        }

        if(alive){
            domItem.classList.remove('skull');
            domItem.classList.add('worm');
        }
    });

};

const play = () => {
    
    const gameBoardCopy = [...Game_Board];

    Game_Board.forEach((cell, i) => {
            const {alive, age, neighbors} = cell;

            const aliveNeighbors = totalAliveNeighbors(neighbors);
            
            if (alive && aliveNeighbors <= 1 ) {
                gameBoardCopy[i].alive = false;
                gameBoardCopy[i].age = -1;
            }

            if(alive && aliveNeighbors < 1 && aliveNeighbors < 4) {
                gameBoardCopy[i].age = age +1;
            }

            if(alive && aliveNeighbors > 3) {
                gameBoardCopy[i].alive = false;
                gameBoardCopy[i].age = -1;
            }

            if(!alive && aliveNeighbors === 3){
                gameBoardCopy[i].alive = true;
                gameBoardCopy[i].age = 0;
            }

            if(!alive && age === -1){
                gameBoardCopy[i].age = 0;
            }
    });

    Game_Board = [...gameBoardCopy];
    paintBoard();
};

const initGameOfLife = () => {
    const box = document.querySelector('#gameOfLife');

    if(!box) return; 
    drawBoard();
    setInterval(play, 1000);
};


export default initGameOfLife;
