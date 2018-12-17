window.onload = function(){

  const snake = document.getElementById('snake');
  var snakeX = 0;
  var snakeY = 0;

  function move(event){
    event.preventDefault();
    var code = event.keyCode;
    switch (code) {
      case 37: // ESQUERDA
        snakeX -= 20;
        snake.style.left = snakeX + 'px';
        break;
      case 38: // CIMA
        snakeY -= 20;
        snake.style.top = snakeY + 'px';
        break;
      case 39: // DIREITA
        snakeX += 20;
        snake.style.left = snakeX + 'px';
        break;
      case 40: // BAIXO
        snakeY += 20;
        snake.style.top = snakeY + 'px';
        break;
    }
  }

  // setInterval(function(){
  //   if (document.onkeydown) {
  //     console.log(document.onkeydown);
  //   }
  // }, 300); 

  

  document.onkeydown = move;













}