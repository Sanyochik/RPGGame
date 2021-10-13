var direction = 1;
var mleft=0;
var mright=mleft + 20;
var step=6;
var health = 200;
var hp = 200;
var couldownX=0;
var couldownZ=0;
var swing = 0;
var swingB = 0;
var stun=0;
var movement= 1;
var damage = 5;
var gold = 0;
var procent = 0;
var xtimer = 20000;
var ztimer = 2000;
var Hclass = 'warior';
var bgh = 0;
var final=1;
var procentHp= (hp*100)/health
procentHp=Math.floor(procentHp)
document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
window.onkeydown = function abilites()
{
	if (hp>0)
	{
		if (event.keyCode == '90' && couldownZ == 0)
		{
			if (direction == 1){
			if(bgh != 5)
			{
				document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/swingright.gif')";
				bgh= 5
			}
			swing = mleft+70;
			swingB = mleft
			couldownZ= 1;
			reloadZ=3
			setTimeout
				(
					function() 
					{
						swing = 0;
						swingB = 0;
						couldownZ=0;
						document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/warior.png')";
						bgh=0
					},ztimer
				)
			}else
			{
				if(bgh != 6)
				{
					document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/swingleft.gif')";
					bgh= 6
				}
				swing = mleft-50;
				swingB =mright
				couldownZ= 1;
				setTimeout
					(
						function() 
						{
							swing = 0;
							swingB = 0;
							couldownZ=0;
							document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/warior.png')";
							bgh=0
						},ztimer
					)
			}
		}
		if (event.keyCode == '88' && couldownX==0)
		{
			if(direction == 1)
			{
				if(bgh != 4)
				{
					document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/shockright.gif')";
					bgh= 4
				}
				couldownX= 1
				movement=0
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok" id="af1" style=" left:20; bottom=0px;">`)
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok2" id="af2" style=" left:70; bottom=0px;">`)
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok3" id="af3" style=" left:120; bottom=0px;">`)
				stun= mleft+120;
				setTimeout
				( 
					function() {
						movement = 1;
						document.getElementById("af1").remove();
						document.getElementById("af2").remove();
						document.getElementById("af3").remove();
						document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/warior.png')";
						bgh=0
						stun= 0;
					},2000
				)
				setTimeout
				( 
					function() {
						couldownX= 0;
					},xtimer
				);
			}
			if(direction == 2)
			{
				if(bgh != 3)
				{
					document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/shockleft.gif')";
					bgh = 3
				}
				couldownX= 1
				movement=0
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok" id="af1" style=" left:-60; bottom=0px;">`)
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok2" id="af2" style=" left:-110; bottom=0px;">`)
				hero.insertAdjacentHTML('afterbegin',`<div class="aftershok3" id="af3" style=" left:-160; bottom=0px;">`)
				stun= mleft+120;
				setTimeout
				( 
					function() {
						movement = 1;
						document.getElementById("af1").remove();
						document.getElementById("af2").remove();
						document.getElementById("af3").remove();
						document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/warior.png')";
						bgh=0
						stun= 0;
					},2000
				)
				setTimeout
				( 
					function() {
						couldownX= 0;
					},xtimer
				);
			}
		}
		if (event.keyCode == '37' && movement == 1)
		{
			direction = 2;
			if (mleft < 0)
			{
				dungeonDown()
			}
			if(bgh != 2)
			{
				document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/wariorleft.gif')";
				bgh= 2
			}
			mleft-=step;
			mright-=step;
			document.getElementById('hero').style.left=mleft + 'px';
			document.getElementById('hero').style.right=mright + 'px';
		}
		if (event.keyCode == '39' && movement == 1)
		{
			direction = 1;
			if (mright > window.screen.width)
			{
				dungeonUp()
			}
			if(bgh != 1)
			{
				document.getElementById('hero').style.backgroundImage = "url('../uploads/heroes/warior/models/wariorright.gif')";
				bgh = 1;
			}
			mleft+=step;
			mright+=step;
			document.getElementById('hero').style.left=mleft + 'px';
			document.getElementById('hero').style.right=mright + 'px';
		}
		if (event.keyCode == '38' && movement == 1)
		{ 
		}
	}
	else
	{
		body.insertAdjacentHTML('afterbegin','<a href="../heroes/warior.html"><button class="replay">Ты умер!<br>Начать заного?</button></a>')
	}
}