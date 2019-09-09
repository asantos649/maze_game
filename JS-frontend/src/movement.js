
// let currentPosition = { x: 17, y: 17}
// let prevTile;
// NodeList.prototype.find = Array.prototype.find


// function createGrid(){
//   const board = document.querySelector("#board")
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
//   for (let y=0; y < 19; y++){
//     for (let x=0; x < 19; x++){
//       board.insertAdjacentHTML('beforeend', `
//         <div class="tile" data-x=${x} data-y=${y} id=${mapInfo[y][x]}></div>
//       `)
//     }
//   }
// }

// function renderBot(targetPosition){
//   const tiles = document.querySelectorAll(".tile")

//   const newTile = tiles.find(function(tile){
//     return parseInt(tile.dataset.x) === targetPosition.x && parseInt(tile.dataset.y) === targetPosition.y
//   })

//   // console.dir(newTile)

//   if (!newTile || newTile.id === "O"){
//     return false
//   } 
//   else {
//     if (prevTile){
//       prevTile.id = "I"
//     } 
//     if (newTile.id === "W"){
//       setTimeout(function(){alert(("TIME OUT!"), 1000)})
//     }

//   newTile.id = "robot"
//   prevTile = newTile

//   return true
//   }

// }

// function move(direction){
//   let x = currentPosition.x;
//   let y = currentPosition.y;
//   switch(direction){
//     case "left":
//       x--
//       break;
//     case "right":
//       x++
//       break;
//     case "up":
//       y--
//       break;
//     case "down":
//       y++
//       break;
//   }

//   const moved = renderBot({ x, y })
//   if (moved){
//     currentPosition = { x, y }
//   }
// }


