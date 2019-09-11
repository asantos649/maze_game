

document.addEventListener("DOMContentLoaded", function(){
    let startingPosition = { x: 17, y: 17}
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

  // renders list of all maze levels
  function renderMazeList(){
    mazeList.innerHTML = `<p class = "mazesHeader">Mazes:</p>`
    fetch('http://localhost:3000/mazes')
    .then(resp => resp.json())
    .then(mazes => {
      mazeId = mazeId || mazes[0].id
      mazeTitle = mazeTitle || mazes[0].name
      mazes.forEach(maze =>{
        console.log(maze.id === mazeId)
        if (parseInt(maze.id) === parseInt(mazeId)){
          mazeList.insertAdjacentHTML('beforeend',
          `<div class= "levelListItemRed" data-id ='${maze.id}'>${maze.name.toUpperCase()}</div>`)
        }
        else {
          mazeList.insertAdjacentHTML('beforeend',
          `<div class= "levelListItem" data-id ='${maze.id}'>${maze.name.toUpperCase()}</div>`)
        }
      })
      createGrid();
      renderScores(mazeId);
    }).then(() => time.innerText = `${mazeTitle}  | Time: ${score}`)
  }

  renderMazeList()
    
     function subtractFromCounter(){
       score --;
       time.innerText = `${mazeTitle}  | Time: ${score}`;
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
            highScores.insertAdjacentHTML('beforeend',
              // `<div>${i+1}: ${sorted[i].score} ${sorted[i].user}</div>`
              `<div class="highscoreListItem">${sorted[i].score} - ${sorted[i].user}</div>`
            )
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
      mazeTitle = e.target.innerText
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
            } 
            if (newTile.id === "W"){
              let name = null        
              // name = prompt(`Your score is ${score}.  Please Enter your name`, "AAA")
              // saveRunInfo({maze_id: mazeId, score: score, user: name})

              toggleModal()
              // setTimeout(function (){
              //   var closeButton = document.querySelector(".close-button");
              //   closeButton.addEventListener("click", (e) =>{
              //     toggleModal()
              //     reRender();
              //   });
              // },0000)

              clearInterval(timerEvent);
            }
            if (newTile.id === "T"){
              score += 20;
            }

        newTile.id = "kirby"
        /// LOL
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


// For modal
var modal = document.querySelector(".modal");
var trigger = document.querySelector(".trigger");
// var closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
    if (score === 0){
      modal.innerHTML = `    <div class="modal-content">
                                <span class="close-button">&times;</span>
                                <h1>Out of time</h1>
                              </div>`
    } else{
      modal.innerHTML = `    <div class="modal-content">
                                <h1>Final score: ${score}</h1>
                                <form id = 'name-entry'>
                                  <p>Name <input type = 'text' name = 'user' /><p>
                                  <input type = 'submit' name = 'submit'>
                                </form>
                              </div>`
      let nameEntry = modal.querySelector('#name-entry')
      console.log(nameEntry)
      nameEntry.addEventListener('submit', e =>{
        e.preventDefault()
        let name = e.target.user.value
        console.log(e.target.user.value)
        saveRunInfo({maze_id: mazeId, score: score, user: name})
        toggleModal()
        reRender();
      })
    }
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}


});
