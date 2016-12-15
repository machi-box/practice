function run() {
	$.getJSON("http://api.openweathermap.org/data/2.5/weather?id=7521912&units=metric&appid=b0b2df3843cddddea70869f090036e35", function (data) {
		if (data.weather.main = "Clouds") {
				var image = document.getElementById('background');
				image.onload = function() {
					var engine = new RainyDay({
						image: this
					});
					engine.rain([ [0, 5, 200], [5, 5, 5] ], 100);
				};
				image.crossOrigin = 'anonymous';
            	image.src = "0e311895.jpg";
			console.log("曇り");

		} else if (data.weather.main = "Clear") {
			console.log("快晴");

		} else if (data.weather.main = "rain") {
			console.log("雨");
		} else if (data.weather.main = "snow") {
			console.log("雪");
		};
	});

}

function clock(id){
	this.id = id;
	this.init = function(){
		this.timerId = null;
		this.canvas = document.getElementById(this.id);
		this.ctx = this.canvas.getContext('2d');
		this.width = this.canvas.width;
		this.height = this.canvas.height;
		
		var x = this.ctx;
		x.translate(this.width / 2, this.height / 2); 
		x.scale(this.width / 200, this.height / 200); 
		x.rotate(-Math.PI/2); 
		x.strokeStyle = "white"; 
		x.fillStyle = "white"; 
		x.lineCap = "butt";  
	}

	this.memoriM = function(){
		var x = this.ctx;
		x.save();
		x.lineWidth = 1; 
		for (var i = 0; i < 60; i++) { 
			x.beginPath(); 
			x.rotate(Math.PI/30); 
			x.moveTo(90,0); 
			x.lineTo(100,0); 
			x.stroke(); 
		} 
		x.restore();
	}
	this.memoriH = function(){
		var x = this.ctx;
		x.save();
		x.lineWidth = 1; 
		for (var i = 0; i < 12; i++) { 
			x.beginPath(); 
			x.rotate(Math.PI/6); 
			x.moveTo(300,0); 
			x.lineTo(400,0); 
			x.stroke(); 
		} 
		x.restore();
	}
	this.h = function(){
		var x = this.ctx;
		x.save();
		x.rotate(Math.PI/6 * (this.datetime.getHours() + this.datetime.getMinutes() / 60)); 
		x.lineWidth = 2; 
		x.beginPath(); 
		x.moveTo(-5, 0); 
		x.lineTo(60, 0); 
		x.stroke(); 
		x.restore();
	}
	this.m = function(){
		var x = this.ctx;
		x.save();
		x.rotate(Math.PI/30 * (this.datetime.getMinutes() + this.datetime.getSeconds() / 60)); 
		x.lineWidth = 1; 
		x.beginPath(); 
		x.moveTo(-5, 0); 
		x.lineTo(80, 0); 
		x.stroke(); 
		x.restore();
	}
	this.s = function(){
		var x = this.ctx;
		x.save();
		x.rotate(Math.PI/30 * this.datetime.getSeconds()); 
		x.strokeStyle = "#cc0000"; 
		x.lineWidth = 1; 
		x.beginPath(); 
		x.moveTo(-10, 0); 
		x.lineTo(80, 0); 
		x.stroke(); 
		x.restore();
	}
	this.ticktack = function(){
		if (!this.canvas) {
			this.init();
		}
		this.datetime = new Date();
		var x = this.ctx;
		x.clearRect(-100, -100, 200, 200);
		this.memoriM();
		this.memoriH();
		this.h();
		this.m();
		this.s();
	}
	this.start = function(){
		if (!this.timerId) {
			var _clock = this;
			_clock.ticktack();
			this.timerId = setInterval(function(){_clock.ticktack();}, 1000);
		}
	}
	this.stop = function() {
		if (this.timerId) {
			clearInterval(this.timerId);
			this.timerId = null;
		}
	}
}

//開始処理（jQueryがないときはwindow.onloadなどで）
$(function(){
	var x = new clock('sample20130319');
	x.start();
});