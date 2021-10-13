//blood set
var baxe = 0;
var bhelm = 0;
var bchest = 0;
var bleg = 0;
var bboots = 0;
//spike set
//lava set
//gladiator set
//tank set
function checkGear(){
	if(baxe == 1)
	{
		if(hp < health || final==1)
		{
			hp+=3;
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}
	}
	if(bhelm == 1)
	{
		if(hp < health || final==1)
		{
			hp+=2;
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}
	}
	if(bchest == 1)
	{
		if(hp < health || final==1)
		{
			hp+=5;
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}
	}
	if(bleg == 1)
	{
		if(hp < health || final==1)
		{
			hp+=2;
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}	
	}
	if(bboots == 1)
	{
		if(hp < health || final==1)
		{
			hp+=2;
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}
	}
}
function Bset()
{
	if(baxe==1 && bhelm == 1 && bchest== 1 && bleg == 1 && bboots == 1)
	{
		if(hp < health || final==1)
		{
			hp+=damage/2
			procentHp= (hp*100)/health
			procentHp=Math.floor(procentHp)
			document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;			
		}
	}
}