//status
var debuf1 = 0;
var debuf2 = 0;
var debuf3 = 0;
//couldown dmg
var hurt1 = 0;
var hurt2 = 0;
var hurt3 = 0;
//control
var zm1movement= 0;
var zm2movement= 0;
var zm3movement= 0;
//hp
var zmH1= 20*dungeon;
var zmH2= 40*dungeon;
var zmH3= 15*dungeon;
//dmg
var z1dmg = 3*dungeon;
var z2dmg = 2*dungeon;
var z3dmg = 1*dungeon;
//movement speed
var zm1step = 8;
var zm2step = 6;
var zm3step = 4;
//position
var zombie1M=window.screen.width-90;
var zombie2M=50;
var zombie3M=20;
//atack speed
var zombieAs1= 300;
var zombieAs2= 1000;
var zombieAs3= 2000;
//animations
var bgz1=0;
var bgz2=0;
var bgz3=0;
function zombie1()
{
	land.insertAdjacentHTML('afterbegin',`<div class="zombie" id="zombie1" style=" right:80px; bottom=0px;">`)
	zombie1M = Math.random()*(window.screen.width-100)
	document.getElementById('zombie1').style.left=zombie1M + 'px';
	var zm1interval = setInterval(function()
	{
		//movement
		if(zombie1M > mleft+10 && zm1movement == 0)
		{
			if (bgz1==0 || bgz1 == 2 || bgz1==3) {
				document.getElementById('zombie1').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieleft.gif')";
				bgz1 = 1
			}
			zombie1M-=zm1step;
			document.getElementById('zombie1').style.left=zombie1M + 'px';
		}
		if(zombie1M < mleft && zm1movement == 0)
		{
			if (bgz1==0 || bgz1 == 1 || bgz1 == 3) {
				document.getElementById('zombie1').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieright.gif')";
				bgz1 = 2
			}
			zombie1M+=zm1step;
			document.getElementById('zombie1').style.left=zombie1M + 'px';
		}
		//stun
		if(zombie1M < stun && debuf1 != 1)
		{
			if (bgz1==0 || bgz1 == 2 || bgz1==1) {
				document.getElementById('zombie1').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombie.png')";
				bgz1 = 3
			}
			debuf1= 1;
			zmH1-=damage*3
			zm1movement=1
			setTimeout
				(
					function()
					{
						debuf1 = 0;
						zm1movement=0;
					},5000
				)
		}
		//hurt
		if(zombie1M < swing && hurt1 == 0 && direction == 1)
		{

				hurt1=1;
				zmH1-=damage;
				zombie1M+=40;
				Bset();
				document.getElementById('zombie1').style.left=zombie1M + 'px';
				setTimeout
				(
					function()
					{
						hurt1=0;
					},ztimer
				)
		}
			if(zombie1M > swing && hurt1 == 0 && direction == 2 && zombie1M < swingB)
			{
				hurt1=1;
				zmH1-=damage;
				zombie1M-=40;
				Bset();
				document.getElementById('zombie1').style.left=zombie1M + 'px';
				setTimeout
				(
					function()
					{
						hurt1=0;
					},ztimer
				)
			}
//die
		if (zmH1 <= 0)
		{
			clearInterval(zm1interval);
			clearInterval(zm1intervalDMG);
			document.getElementById('zombie1').remove();
//loot
			exp+=20*dungeon
			gold+=20*dungeon
			zmH1=20*dungeon;
			checkGear();
			goldandexp();
			if (dungeon < 5){
				checkDungeon();
			}
		}
	},70)
	//dmg
	var zm1intervalDMG = setInterval(function()
	{
		if(zombie1M < mright && hp > 0 && zombie1M > mleft && zm1movement == 0 || zombie1M==mleft)
		{
			hp-=z1dmg
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
		}
	},zombieAs1)
}
zombie1();
function zombie2()
{
	land.insertAdjacentHTML('afterbegin',`<div class="zombie" id="zombie2" style=" right:80px; bottom=0px;">`)
	zombie2M = Math.random()*(window.screen.width-100)
	document.getElementById('zombie2').style.left=zombie2M + 'px';
	var zm2interval = setInterval(function()
	{
		if(zombie2M > mleft+10 && zm2movement == 0)
		{
			if (bgz2==0 || bgz2 == 2 || bgz2==3) {
				document.getElementById('zombie2').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieleft.gif')";
				bgz2 = 1
			}
			zombie2M-=zm2step;
			document.getElementById('zombie2').style.left=zombie2M + 'px';
		}
		if(zombie2M < mleft && zm2movement == 0)
		{
			if (bgz1==0 || bgz1 == 1 || bgz1 == 3) {
				document.getElementById('zombie2').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieright.gif')";
				bgz1 = 2
			}
			zombie2M+=zm2step;
			document.getElementById('zombie2').style.left=zombie2M + 'px';
		}
		if(zombie2M < stun && debuf2 != 1)
		{
			if (bgz2==0 || bgz2 == 2 || bgz2==1) {
				document.getElementById('zombie2').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombie.png')";
				bgz2 = 3
			}
			debuf2= 1;
			zmH2-=damage*3
			zm2movement=1
			setTimeout
				(
					function()
					{
						debuf2 = 0;
						zm2movement=0;
					},5000
				)
		}
		if(zombie2M < swing && hurt2 == 0 && direction == 1)
		{

				hurt2=1;
				zmH2-=damage;
				zombie2M+=40;
				Bset();
				document.getElementById('zombie2').style.left=zombie2M + 'px';
				setTimeout
				(
					function()
					{
						hurt2=0;
					},ztimer
				)
		}
			if(zombie2M > swing && hurt2 == 0 && direction == 2 && zombie2M < swingB)
			{
				hurt2=1;
				zmH2-=damage;
				zombie2M-=40;
				Bset();
				document.getElementById('zombie2').style.left=zombie2M + 'px';
				setTimeout
				(
					function()
					{
						hurt2=0;
					},ztimer
				)
			}
		if (zmH2 <= 0)
		{
			clearInterval(zm2interval);
			clearInterval(zm2intervalDMG);
			document.getElementById('zombie2').remove();
			exp+=30*dungeon
			gold+=30*dungeon
			zmH2=40*dungeon;
			checkGear();
			goldandexp();
			if (dungeon > 5){
				checkDungeon();
			}
		}
	},70)
	var zm2intervalDMG = setInterval(function()
	{
		if(zombie2M < mright && hp > 0 && zombie2M > mleft && zm2movement == 0 || zombie2M==mleft)
		{
			hp-=z2dmg
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
		}
	},zombieAs2)
}
	//land.insertAdjacentHTML('afterbegin',`<div class="zombie" id="zombie2" style=" right:50px; bottom=0px;">`)
	//land.insertAdjacentHTML('afterbegin',`<div class="zombie" id="zombie3" style=" right:20px; bottom=0px;">`)