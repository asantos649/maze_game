document.addEventListener("DOMContentLoaded", function(){
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
  
        console.log(e.code);
    }
  
    document.querySelector("#move-button").addEventListener("click", moveRobot)
    
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
  
  