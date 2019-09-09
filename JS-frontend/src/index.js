

document.addEventListener("DOMContentLoaded", function(){

    let currentPosition = { x: 17, y: 17}
    let prevTile;
    NodeList.prototype.find = Array.prototype.find
    const scoreBoard = document.querySelector('.scoreboard')
    let score = 10;
    // const goButton = document.querySelector('.go')
    let timerEvent = null
    let mapInfo = null

    //WHERE YOU START THE TIME
    // goButton.addEventListener('click', () =>{
    //     timerEvent = setInterval(subtractFromCounter, 0500);
    //  })
    scoreBoard.innerText = score
     function subtractFromCounter(){
       score --;
       scoreBoard.innerText = score;
       if (score === 0){
         clearInterval(timerEvent)
         alert("TIMES OUT!")}
     }

    createGrid();
    // setTimeout(renderBot(currentPosition), 1000);
    
    document.addEventListener("keydown", logKey);
      function logKey(e) {
        if (!timerEvent)
          timerEvent = setInterval(subtractFromCounter, 0500)
        if (e.code === 'ArrowLeft'){
          move("left")
        }
        if (e.code === 'ArrowUp'){
          move("up")
        }
        if (e.code  === 'ArrowDown'){
          move("down")
        }
        if (e.code  === 'ArrowRight'){
          move("right")
        }
  
        // console.log(e.code);
    }
  
    // document.querySelector("#move-button").addEventListener("click", moveRobot)
    
    // function moveRobot(){
    //   setInterval(function(){
    //     let direction = document.querySelectorAll("li")[0];
    //     move(direction.innerText);
    //     direction.remove();
    //   }, 500)  
    // } 
      
    ///////////////////////


    function createGrid(){
    const board = document.querySelector("#board")
    fetch('http://localhost:3000/mazes/1')
    .then(resp => resp.json())
    .then(maze => {
        mapInfo = JSON.parse(maze.grid)
        console.dir(typeof mapInfo)
    //   let mapInfo = [['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'], 
    //                  ['O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
    //                  ['O', 'I', 'O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    //                  ['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
    //                  ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'I', 'O'],
    //                  ['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O'],
    //                  ['O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O'],
    //                  ['O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O'],
    //                  ['O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O'],
    //                  ['O', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'O', 'O', 'O', 'O', 'I', 'O', 'I', 'O', 'I', 'O'],
    //                  ['O', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'O', 'I', 'O', 'I', 'W'],
    //                  ['O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O']]
        for (let y=0; y < 19; y++){
            for (let x=0; x < 19; x++){
            board.insertAdjacentHTML('beforeend', `
                <div class="tile" data-x=${x} data-y=${y} id=${mapInfo[y][x]}></div>
            `)
            }
        }
        renderBot(currentPosition)
        })
    }
    
    function renderBot(targetPosition){
        const tiles = document.querySelectorAll(".tile")

        const newTile = tiles.find(function(tile){
            return parseInt(tile.dataset.x) === targetPosition.x && parseInt(tile.dataset.y) === targetPosition.y
        })

        // console.dir(newTile)

        if (!newTile || newTile.id === "O"){
            return false
        } 
        else {
            if (prevTile){
            prevTile.id = "I"
            } 
            if (newTile.id === "W"){
            setTimeout(function(){alert((`YOU'RE SCORE IS: ${score}`), 10000)})
            clearInterval(timerEvent)
            }

        newTile.id = "robot"
        prevTile = newTile

        return true
        }

    }

    function move(direction){
    let x = currentPosition.x;
    let y = currentPosition.y;
    switch(direction){
        case "left":
        x--
        break;
        case "right":
        x++
        break;
        case "up":
        y--
        break;
        case "down":
        y++
        break;
    }

    const moved = renderBot({ x, y })
    if (moved){
        currentPosition = { x, y }
    }
    }

});
  
  
/////////////