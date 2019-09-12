

document.addEventListener("DOMContentLoaded", function(){
    let startingPosition = { x: 1, y: 0}
    let currentPosition = startingPosition
    let prevTile;
    NodeList.prototype.find = Array.prototype.find
    const time = document.querySelector('.time')
    const highScores = document.querySelector('.highscore')
    const mazeList = document.querySelector('.list')
    let score = 20;
    const container = document.querySelector('.center')
    // const goButton = document.querySelector('.go')
    let timerEvent = null
    let mapInfo = null
    let mazeId = null
    let mazeTitle = null
    const nameList = {}
    let wasOnTreasure = false

  // renders list of all maze levels
  function renderMazeList(){
    mazeList.innerHTML = `<p class = "mazesHeader">Mazes:</p>`
    fetch('http://localhost:3000/mazes')
    .then(resp => resp.json())
    .then(mazes => {
      mazeId = mazeId || mazes[0].id
      mazeTitle = mazeTitle || mazes[0].name
      mazes.forEach(maze =>{
        nameList[maze.id] = maze.name
        if (parseInt(maze.id) === parseInt(mazeId)){
          mazeList.insertAdjacentHTML('beforeend',
          `<div class= "levelListItemRed" data-id ='${maze.id}'>-${maze.name.toUpperCase()}</div>`)
        }
        else {
          mazeList.insertAdjacentHTML('beforeend',
          `<div class= "levelListItem" data-id ='${maze.id}'>-${maze.name.toUpperCase()}</div>`)
        }
      })
      console.log(nameList)
      createGrid();
      renderScores(mazeId);
    }).then(() => time.innerText = `${mazeTitle}  | Time: ${score}`)
  }

  renderMazeList()
    
     function subtractFromCounter(){
       score --;
       if (score >5){
          time.innerText = `${mazeTitle}  | Time: ${score}`;
       } else {
          time.innerHTML = `${mazeTitle}  | <span class = 'low-time'> Time: ${score}</span>`;
       }
       if (score === 0){
         clearInterval(timerEvent)
        //  alert("TIMES OUT!")
        toggleModal();
        setTimeout(function (){
          var closeButton = document.querySelector(".close-button");
          closeButton.addEventListener("click", (e) =>{
            toggleModal()
            reRender();
          });
        },0000)
         reRender();
       }
    
     }

     

     //renders top 5 scores in highscores
     function renderScores(maze){
      highScores.innerHTML = `<p class = "highscoreHeader">High Scores:</p>`
      fetch('http://localhost:3000/runs')
      .then(resp => resp.json())
      .then(runs => {
        const mazeRuns = runs.filter(run =>{          
                            return run.maze_id === parseInt(maze)
                          })
        const sorted = mazeRuns.sort(function(a, b){return b.score-a.score})
        for (i=0;i<5;i++){
          if (sorted[i]) {
            if (sorted[i].user !== ""){
              highScores.insertAdjacentHTML('beforeend',
                `<div class="highscoreListItem">${sorted[i].score} - ${sorted[i].user.substring(0,8)}</div>`
              )
            }
            else {
              highScores.insertAdjacentHTML('beforeend', `<div class="highscoreListItem">## - AAA</div>`)
            }
          }
          else {
            highScores.insertAdjacentHTML('beforeend', `<div class="highscoreListItem">## - AAA</div>`)
          }
        }
      })
    }
    function reRender(){
      score = 20;
      time.innerText = `${mazeTitle}  | Time: ${score}`
      currentPosition = startingPosition
      clearInterval(timerEvent);
      timerEvent = null
      renderMazeList()
    }

    //maze list click event (switch level)
    mazeList.addEventListener('click',e =>{
      mazeId = e.target.dataset.id
      mazeTitle = nameList[(parseInt(mazeId))]
      reRender();
    })

    
    // setTimeout(renderBot(currentPosition), 1000);
    // function addKeyListener(){
      document.addEventListener("keydown", logKey);
        function logKey(e) {
          // e.preventDefault();
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
        }



    function createGrid(){
      const board = document.querySelector("#board")
      board.innerHTML = ''
      fetch(`http://localhost:3000/mazes/${mazeId}`)
      .then(resp => resp.json())
      .then(maze => {
          mapInfo = JSON.parse(maze.grid)
          let color = "pink";
          /////
          if (maze.name === "Pop Star"){
            color = "pink"
          }
          if (maze.name === "Crystal Cave"){
            color = "blue"
          }
          if (maze.name === "Dark Labyrinth"){
            color = "purple"
          }
          if (maze.name === "Fountain of Dreams"){
            color = "green"
          }
          /////
        for (let y=0; y < 19; y++){
            for (let x=0; x < 19; x++){
            board.insertAdjacentHTML('beforeend', `
                <span class = ${color}><div class="tile" data-x=${x} data-y=${y} id=${mapInfo[y][x]}></div>
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

        if (!newTile || newTile.id === "O"){
            return false
        } 
        else {
            if (prevTile){
              prevTile.id = "I"
              if (wasOnTreasure){
                prevTile.id = "pastT"
                wasOnTreasure = false
              } else {
                prevTile.id = "I"
              }
            } 
            if (newTile.id === "W"){
              // let name = null        
              toggleModal()
              clearInterval(timerEvent);
            }
            if (newTile.id === "T"){
              score += 20;
              console.log(score)
              wasOnTreasure = true
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


// For modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    if (score === 0){
      modal.innerHTML = `    <div class="modal-content">
                                <h1 class = "outOfTime">Out of time!</h1>
                                <img class = "sadKirby" src = "https://i.imgur.com/6s7RIXU.gif" width = 25% height = 25%>
                                <br>
                                <span class="close-button">Try Again</span>
                              </div>`
    } else{
      modal.innerHTML = `    <div class="modal-content">
                                <img src = "https://i.imgur.com/1PDG3gO.gif" width = 15% height = 15% align = top>
                                <img class = "happyKirby" src = "https://i.imgur.com/G9m7y8b.gif" width = 25% height = 25%>
                                <img src = "https://i.imgur.com/VqdoLgZ.gif" width = 15% height = 15% align = top>
                                <p class = "finalScore">${score}</p>
                                <form id = 'name-entry'>
                                  <input type = 'text' name = 'user' placeholder = 'Name' />
                                  <br>
                                  <input class = "close-button" type = 'submit' name = 'submit'>
                                </form>
                              </div>`
      let nameEntry = modal.querySelector('#name-entry')
      nameEntry.addEventListener('submit', e =>{
        e.preventDefault()
        let name = e.target.user.value
        saveRunInfo({maze_id: mazeId, score: score, user: name})
        toggleModal()
        console.log(nameList[(parseInt(mazeId)+1)])
        if (nameList[(parseInt(mazeId)+1)]){
          mazeId ++
        } else{
          mazeId = parseInt(mazeId) - 3
        }
        mazeTitle = nameList[mazeId]
        setTimeout(reRender,0000);
      })
    }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


});
