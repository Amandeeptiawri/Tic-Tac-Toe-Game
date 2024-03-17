const boxes=document.querySelectorAll(".box");

const gameInfo=document.querySelector(".game-info");

const newGameBtn =document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

// let's create a function to intialize the game
function initGame(){
    currentPlayer="X";
    gameGrid=["","","","","","","","","",];
    boxes.forEach((box,index)=>
    { 
        box.innerText="";

    boxes[index].style.pointerEvents="all";

    box.classList.remove("win")


})

    
    

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player -${currentPlayer} `;


}

initGame();

function swapTurn(){
    if(currentPlayer==="X"){
        currentPlayer="O"
    }
    else{
        currentPlayer="X"
    }
    gameInfo.innerText=`Current Player -${currentPlayer}`;
}

function checkgameOver(){

    //TODO
    let answer= "";

    winningPositions.forEach((postion)=>{

        
        // all 3 boxes  should be non-empty and exactly same in value

        if(gameGrid[postion[0]]!=="" && gameGrid[postion[1]]!=="" && gameGrid[postion[2]]!=="" && 
        (gameGrid[postion[0]]=== gameGrid[postion[1]])&& (gameGrid[postion[1]]=== gameGrid[postion[2]])){

            if( gameGrid[postion[0]]==="X")
            answer="X";
        else
        answer="O";

        //disable pointer events
        boxes.forEach((box)=>{
            box.style.pointerEvents="none";

        })



        //Now we know X/O

        boxes[postion[0]].classList.add("win");
        boxes[postion[1]].classList.add("win");
        boxes[postion[2]].classList.add("win");


        }
        
    });


if(answer!=="")
{
    gameInfo.innerText=`Winner Player- ${answer}`;
    newGameBtn.classList.add("active");
   
    return;

}
let fillCount=0;
gameGrid.forEach((box)=>{
    if(box !== "")
    fillCount++;
}); 

if(fillCount==9){
    gameInfo.innerText="Game Tied !";
    newGameBtn.classList.add("active");
}


}

function handleClick(index){

    if(gameGrid[index] === "")
    {
        boxes[index].innerText=currentPlayer;
        gameGrid[index]=currentPlayer; 
        boxes[index].style.pointerEvents="none";
        // swap the turn
        swapTurn();
        // check trun is any player win
        checkgameOver();
    }
} 

boxes.forEach((box,index)=>{
    box.addEventListener("click",()=>{
        handleClick(index);
    })


});

newGameBtn.addEventListener("click",initGame);