function boss1()
{
	//status
	var Bossdebuf1 = 0;
	//couldown dmg
	var Bosshurt1 = 0;
	//control
	var Boss1movement= 0;
	//hp
	var BossH1= 70*dungeon;
	var Boss1Health = BossH1;
	//dmg
	var Boss1dmg = 7*dungeon;
	//movement speed
	var Boss1step = 12;
	//position
	var Boss1M=window.screen.width-90;
	//atack speed
	var BossAs1= 1000;
	//animations
	var bgB1=0;
	var BossprocentHp= (BossH1*100)/Boss1Health
	BossprocentHp=Math.floor(BossprocentHp)
	body.insertAdjacentHTML('afterbegin',`<h5 id="bossname" style ="position:absolute; left:40%; top:20px; font-size:30px;">Zombie Van [dungeon master]</h5> <div class="boss1" id="boss"></div>`);
	document.getElementById('boss').innerHTML=`<div class="bossHP" style="height:100%;width:${BossprocentHp}%; background-color:red;"></div>`
	land.insertAdjacentHTML('afterbegin',`<div class="zombieBoss" id="zombieBoss" style=" right:80px; bottom=0px;">`)
	Boss1M = window.screen.width
	document.getElementById('zombieBoss').style.left=Boss1M + 'px';
	var Boss1interval = setInterval(function()
	{
		//movement
		if(Boss1M > mleft+10 && Boss1movement == 0)
		{
			if (bgB1==0 || bgB1 == 2 || bgB1==3) {
				document.getElementById('zombieBoss').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieleft.gif')";
				bgB1 = 1
			}
			Boss1M-=Boss1step;
			document.getElementById('zombieBoss').style.left=Boss1M + 'px';
		}
		if(Boss1M < mleft && Boss1movement == 0)
		{
			if (bgB1==0 || bgB1 == 1 || bgB1 == 3) {
				document.getElementById('zombieBoss').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombieright.gif')";
				bgB1 = 2
			}
			Boss1M+=Boss1step;
			document.getElementById('zombieBoss').style.left=Boss1M + 'px';
		}
		//stun
		if(Boss1M < stun && Bossdebuf1 != 1)
		{
			if (bgB1==0 || bgB1 == 2 || bgB1==1) {
				document.getElementById('zombieBoss').style.backgroundImage = "url('../uploads/mobs/zombiefast/zombie.png')";
				bgB1 = 3
			}
			Bossdebuf1= 1;
			BossH1-=damage*3
			Boss1movement=1
			BossprocentHp= (BossH1*100)/Boss1Health
			BossprocentHp=Math.floor(BossprocentHp)
			document.getElementById('boss').innerHTML=`<div class="bossHP" style="height:100%;width:${BossprocentHp}%; background-color:red;"></div>`
			setTimeout
				(
					function()
					{
						Bossdebuf1 = 0;
						Boss1movement=0;
					},2500
				)
		}
		//hurt
		if(Boss1M < swing && Bosshurt1 == 0 && direction == 1)
		{

				Bosshurt1=1;
				BossH1-=damage;
				Boss1M+=20;
				BossprocentHp= (BossH1*100)/Boss1Health
				BossprocentHp=Math.floor(BossprocentHp)
				document.getElementById('boss').innerHTML=`<div class="bossHP" style="height:100%;width:${BossprocentHp}%; background-color:red;"></div>`
				Bset();
				document.getElementById('zombieBoss').style.left=Boss1M + 'px';
				setTimeout
				(
					function()
					{
						Bosshurt1=0;
					},ztimer
				)
		}
			if(Boss1M > swing && Bosshurt1 == 0 && direction == 2 && Boss1M < swingB)
			{
				Bosshurt1=1;
				BossH1-=damage;
				Boss1M-=40;
				BossprocentHp= (BossH1*100)/Boss1Health
				BossprocentHp=Math.floor(BossprocentHp)
				document.getElementById('boss').innerHTML=`<div class="bossHP" style="height:100%;width:${BossprocentHp}%; background-color:red;"></div>`
				Bset();
				document.getElementById('zombieBoss').style.left=Boss1M + 'px';
				setTimeout
				(
					function()
					{
						Bosshurt1=0;
					},ztimer
				)
			}
//die
		if (BossH1 <= 0)
		{
			clearInterval(Boss1interval);
			clearInterval(Boss1intervalDMG);
			document.getElementById('zombieBoss').remove();
			document.getElementById('boss').remove();
			document.getElementById('bossname').remove();
			claerboss= 1;
//loot
			exp+=100*dungeon
			gold+=200*dungeon
			dungeon+=1
			checkGear();
			goldandexp();
		}
	},70)
	//dmg
	var Boss1intervalDMG = setInterval(function()
	{
		if(Boss1M < mright && hp > 0 && Boss1M > mleft && Boss1movement == 0 || Boss1M==mleft)
		{
			hp-=Boss1dmg
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
		}
	},BossAs1)
}
function Boss2()
{
	//status
	var Bossdebuf2 = 0;
	//couldown dmg
	var Bosshurt2 = 0;
	//control
	var Boss2movement= 0;
	//hp
	var BossH2= 40*dungeon;
	//dmg
	var Boss2dmg = 2*dungeon;
	//movement speed
	var Boss2step = 6;
	//position
	var Boss2M=window.screen.width-90;
	//atack speed
	var BossAs2= 1000;
	//animations
	var bgB2=0;
}
function Boss3()
{
	//status
	var Bossdebuf3 = 0;
	//couldown dmg
	var Bosshurt3 = 0;
	//control
	var Boss3movement= 0;
	//hp
	var BossH3= 15*dungeon;
	//dmg
	var Boss3dmg = 1*dungeon;
	//movement speed
	var Boss3step = 4;
	//position
	var Boss3M=20;
	//atack speed
	var BossAs3= 2000;
	//animations
	var bgB3=0;
}