

document.addEventListener("DOMContentLoaded", function(){

    let currentPosition = { x: 17, y: 17}
    let prevTile;
    NodeList.prototype.find = Array.prototype.find
    const scoreBoard = document.querySelector('.scoreboard')
    const highScores = document.querySelector('.highscore')
    let score = 10;
    // const goButton = document.querySelector('.go')
    let timerEvent = null
    let mapInfo = null
    let mazeId = 1

    //WHERE YOU START THE TIME
    // goButton.addEventListener('click', () =>{
    //     timerEvent = setInterval(subtractFromCounter, 0500);
    //  })
    scoreBoard.innerText = `Score: ${score}`;
     function subtractFromCounter(){
       score --;
       scoreBoard.innerText = `Score: ${score}`;
       if (score === 0){
         clearInterval(timerEvent)
         alert("TIMES OUT!")}
     }

     createGrid();

     //renders top 5 scores in highscores
     fetch('http://localhost:3000/runs')
    .then(resp => resp.json())
    .then(runs => {
      const mazeRuns = runs.filter(run =>{          
                          return run.maze_id === mazeId
                        })
                        console.dir(mazeRuns)
      const sorted = mazeRuns.sort(function(a, b){return b.score-a.score})
      
      for (i=0;i<5;i++){
        if (sorted[i]) {
          highScores.insertAdjacentHTML('beforeend',
            `<div>${i+1}:${sorted[i].score}-${sorted[i].user}</div>`
          )
        }
      }
    })

    
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
      fetch(`http://localhost:3000/mazes/${mazeId}`)
      .then(resp => resp.json())
      .then(maze => {
          mapInfo = JSON.parse(maze.grid)
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
              clearInterval(timerEvent);
              saveRunInfo({maze_id: mazeId, score: score});
            }
            if (newTile.id === "T"){
              score += 20;
            }

        newTile.id = "kirby"
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

    function saveRunInfo(formData){
      console.log(formData)
      fetch('http://localhost:3000/runs', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(resp => resp.json())
    }
});
  
  
/////////////

// instead of alert

// document.addEventListener("click",(event) => {
//   event.preventDefault()
//   const div = document.createElement("div")
//   div.innerHTML = '<iframe title="advertisement" height="250px" width="425px" src="https://www.youtube.com/embed/a8XC4H84rMU?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
// div.style.position = "absolute"
// div.style.top = `${event.clientY}px`
// div.style.left = `${event.clientX}px`
// document.body.append(div)
// })
