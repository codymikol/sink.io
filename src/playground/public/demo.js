(function() {

function init() {

  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  var test = new MovableObject();

  window.onresize = function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
   ctx.fillStyle = 'pink';
    ctx.fillRect(0,0,canvas.width,canvas.height);
     test.tick();
    test.render();
  }

  function MovableObject() {

    this.x = 0;
    this.y = 0;

    this.render = function() {
      ctx.fillStyle = 'blue'
      ctx.fillRect(this.x, this.y, 10,10);
    }

    this.tick = function() {
      if(this.x <=300) this.x+= 5;
      if(this.x >300) this.x = 0;
    }

  }

  setInterval(draw, 50);

}

window.onload = init;

})();
