function getValues(event)
{
    event.preventDefault();
    var column = document.getElementById('column').value;
    var row = document.getElementById('row').value;
    createGrid(row,column);
}

function createGrid(x,y)
{
    let board = document.getElementById("board");
    board.style.gridTemplateColumns = `repeat(${x},1fr)`;
    board.style.gridTemplateRows = `repeat(${y},1fr)`;

    for (let i = 0; i < x * y; i++) 
    {
        let square = document.createElement("div");
        square.classList.add('grid-item');
        square.style.backgroundColor = "white";
        board.insertAdjacentElement("beforeend", square);
    }

    addHoverEffect();
}

function colorSelection(color)
{
     switch (color) 
     {
       case "black":
         markerColor = "black";
         break;
       case "red":
         markerColor = "red";
         break;
       case "green":
         markerColor = "green";
         break;
       case "blue":
         markerColor = "blue";
         break;
       default:
         console.log("Invalid color");
         break;
     }
     console.log("Marker color: " + markerColor);
}

function addHoverEffect()
{
    var griditems = document.getElementsByClassName("grid-item");
    
    for(let i =0; i<griditems.length; i++)
    {
        griditems[i].addEventListener('mouseover', function(){
            griditems[i].style.backgroundColor = markerColor;
        });
    }
}

let markerColor = 'black';