class Starfield
{
	// define as variaveis
	
	fps ;
    canvas ;
    width ;
	height ;
    minVelocity ;
    maxVelocity ;
    qtdestars ;
	stars;
    intervalId ;
	ctx;
	star;	 
  
  
	//define o construtor e o contexto
constructor(ctx) {
		  this.fps = 30;
	
	this.width = 0;
	this.height = 0;
	this.minVelocity = 30;
	this.maxVelocity = 60;
	this.qtdestars = 150;
	this.intervalId = 0;
	
	
    this.ctx = ctx;
	//console.table(this.ctx);
	//define o tamanho da janela
	this.width = window.innerWidth;
	console.table(window.innerWidth);
	this.height = window.innerHeight;
	console.table(window.innerHeight);
	this.ctx.canvas.width = this.width;
    this.ctx.canvas.height = this.height;
	    
  }
  
 
inicializa()
{
	
	var self = this;
	 
addEventListener('resize', function resize(event){
		//redefine as medidas quando a janela é alterada
    
	self.width = window.innerWidth;
    self.height = window.innerHeight;
	self.ctx.canvas.width = self.width;
	self.ctx.canvas.height = self.height;
	console.table(self.ctx.width);
	console.table(self.ctx.height);
    self.desenha() 
	
	 /*this.width = window.innerWidth;
    this.height = window.innerHeight;
	this.ctx.width = this.width;
	this.ctx.height = this.height;
	console.table(this.ctx); */
	
}); 

}
start()
{
	this.stars = [];
	//console.table(stars);
	for(var i=0; i<this.qtdestars; i++) {
		//console.table("start");
			var x = Math.random()*this.width;
			var y =  Math.random()*this.height;
			var size =  Math.random()*10+4;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			
			this.star = new Star(x,y, size,vel, );
			//console.table(s.x);
			//console.table(this.star);
		this.stars[i] = this.star;
		
	}
	var timeUpdate = 1000 / this.fps;
	var self = this;
	this.intervalId = setInterval(function() {
        self.update();
        self.tecla();
		self.desenha();		
    }, timeUpdate);
//console.table(stars);
	
}

	

	tecla()
	{
		
		document.addEventListener('keydown', event => {
		if (event.keyCode === KEY.C) {
			
			cor = '#3CB371';
		}
		if (event.keyCode === KEY.Z) {
			
			cor = '#006400';
		}
		if (event.keyCode === KEY.X) {
			
			cor = '#008000';
		}
		if (event.keyCode === KEY.UP) {
			
			this.fps = 5;
		}
		if (event.keyCode === KEY.DOWN) {
			
			this.fps = 50;
		}
		
		
		});

	}

	

	desenha()
	{	
		this.ctx.fillStyle = fundo;
		this.ctx.fillRect(0, 0, this.width, this.height);
		
		this.ctx.fillStyle = cor;
		for(var i=0; i<this.stars.length;i++) {
		this.star = this.stars[i];
		this.ctx.fillRect(this.star.x, this.star.y, this.star.size, this.star.size);
		
	}
	}


  update(){
	var dt = 1 / this.fps;
	for(var i=0; i<this.stars.length; i++) {
		var star = this.stars[i];
		star.y += dt * star.velocity;
		//	If the star has moved from the bottom of the screen, spawn it at the top.
		if(star.y > this.height) {
			var x = Math.random()*this.width;
			var size =  Math.random()*10+4;
			var vel = (Math.random()*(this.maxVelocity - this.minVelocity))+this.minVelocity;
			let s = new Star(x, 0,size, vel);
			//console.table(s);			
		 	this.stars[i] = s;
			
		}
		
	}
	//console.table(this.stars);
}

stop()
{
	clearInterval(this.intervalId);
}
	
}