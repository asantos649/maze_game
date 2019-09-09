document.addEventListener("DOMContentLoaded", function(){

    const scoreBoard = document.querySelector('.score-board')
    let score = parseInt(scoreBoard.innerText)
    const goButton = document.querySelector('.go')
    let timerEvent = null

    goButton.addEventListener('click', () =>{
        timerEvent = setInterval(subtractFromCounter, 0050);
     })
     function subtractFromCounter(){
       score --;
       scoreBoard.innerText = score;
       if (score === 0)
         clearInterval(timerEvent)
     }

    createGrid();
    renderBot(currentPosition);
    
    document.addEventListener("keydown", logKey);
      function logKey(e) {
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
    
    function moveRobot(){
      setInterval(function(){
        let direction = document.querySelectorAll("li")[0];
        move(direction.innerText);
        direction.remove();
      }, 500)  
    } 
      

    // document.querySelector("#move-button").addEventListener("click", moveRobot())
    
    // function moveRobot(){ 
    //   setInterval(function(){
    //     let direction = document.querySelectorAll("li")[0];
  
    //     if (direction === null){
    //       alert("hello")
    //     }
    //     move(direction.innerText);
    //     direction.remove();
    //   }, 1000)  
    // }
  });
  
  
