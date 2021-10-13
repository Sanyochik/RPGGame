var str1tal1choose = 0;
var str2tal1 = '';
var str2tal2 = '';
var str2tal3 = '';
var str3tal1 = '';
var str3tal2 = '';
var str3tal3 = '';
var str4tal1 = '';
var str4tal2 = '';
var str4tal3 = '';
var str5tal1 = '';
var str5tal2 = '';
var str5tal3 = '';
var str6tal1 = '';
var str6tal2 = '';
var str6tal3 = '';
var final = 0;
function levelup()
{
	if (tallant > 0)
	{
		if(Hclass != 'mage')
		{
			body.insertAdjacentHTML('afterbegin',`<div class="strength" id="strength" style=" position:absolute; right:270px; top: 0px; width:20px; height:20px;background-size:cover; background-image:url(../uploads/general/stranght.png);"></div><h5 id ="strengthText" style="position:absolute; right:20px; top: -20px;">повышает физеческий урон на +2</h5>`)
			document.getElementById('strength').onclick = strengthUp
		}
		if(Hclass != 'mage')
		{
			if(Hclass == 'warior' && ztimer !=1000){
			body.insertAdjacentHTML('afterbegin',`<div class="agility" id="agility" style=" position:absolute; right:270px; top: 30px; width:20px; height:20px;background-size:cover; background-image:url(../uploads/general/stranght.png);"></div><h5 id ="agilityText" style="position:absolute; right:20px; top: 10px;">повышает скорость атаки на 0,1</h5>`)
			document.getElementById('agility').onclick = agilityUp
			}
		}
		if(Hclass == 'mage')
		{
			body.insertAdjacentHTML('afterbegin',`<div class="agility" id="agility" style=" position:absolute; right:270px; top: 30px; width:20px; height:20px;background-size:cover; background-image:url(../uploads/general/stranght.png);"></div><h5 id ="agilityText" style="position:absolute; right:20px; top: 10px;">Уменьшает восстановление способностей</h5>`)
			document.getElementById('agility').onclick = agilityUp
		}
		body.insertAdjacentHTML('afterbegin',`<div class="vitality" id="vitality" style=" position:absolute; right:270px; top: 60px; width:20px; height:20px;background-size:cover; background-image:url(../uploads/general/stranght.png);"></div><h5 id ="vitalityText" style="position:absolute; right:20px; top: 40px;">повышает здоровье на 10</h5>`)
		document.getElementById('vitality').onclick = vitalityUp
		if(Hclass == 'warior' && xtimer !=10000){
			body.insertAdjacentHTML('afterbegin',`<div class="intellect" id="intellect" style=" position:absolute; right:270px; top: 90px; width:20px; height:20px;background-size:cover; background-image:url(../uploads/general/stranght.png);"></div><h5 id ="intellectText" style="position:absolute; right:20px; top: 70px;">Уменьшает восстановления способности</h5>`)
			document.getElementById('intellect').onclick = intellectUp
		}
	}
}
function strengthUp()
{
	tallant-=1
	damage+=3
	if(tallant == 0 || tallant < 0)
	{
		clear();
	}
}
function agilityUp()
{
	if(ztimer !=1000){
	tallant-=1
	ztimer-=100
	if(Hclass == 'mage')
	{
		xtimer-=100
		ctimer-=100
	}
	if(tallant == 0 || tallant < 0)
	{
		clear();
	}
	}else
	{
		document.getElementById("agility").remove();
		document.getElementById("agilityText").remove();
	}
}
function vitalityUp()
{
	if(xtimer !=10000)
	{
		tallant-=1
		health+=10
		procentHp= (hp*100)/health
		procentHp=Math.floor(procentHp)
		document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
		if(tallant == 0 || tallant < 0)
		{
			clear();
		}
	}else
	{
		document.getElementById("intellect").remove();
		document.getElementById("intellectText").remove();
	}
}
function intellectUp()
{
	tallant-=1
	xtimer-=500
	if(Hclass == 'mage')
	{
		mana+=10;
	}
	if(tallant == 0 || tallant < 0)
	{
		clear();
	}
}
function Htallant()
{
	body.insertAdjacentHTML('afterbegin',`<div class="Htallantfull" id="Htallantfull" style=" left:20; bottom=0px;">`)
	if(Htallant > 0){
		if (str1tal1choose == 0)
		{
			choose();
		}
	}
	if(gold > 20 && baxe == 1){
		shopfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${id1}" style ="background-image:url(../uploads/general/rainforche.png);"><h5 style ="position:absolute; left:2px; top:2px;">${rainforcecostBaxe}</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
		document.getElementById(`${id1}`).onclick = reinforceBAXE;
	}
	shopfull.insertAdjacentHTML('afterbegin',`<div class="close" id="close">`)
	document.getElementById('close').onclick = close
}
function clear()
{
	document.getElementById("strength").remove();
	document.getElementById("strengthText").remove();
	if(Hclass == 'warior' && ztimer > 1000)
	{
		document.getElementById("agility").remove();
		document.getElementById("agilityText").remove();
	}
	document.getElementById("vitality").remove();
	document.getElementById("vitalityText").remove();
	if(Hclass == 'warior' && xtimer > 10000)
	{
		document.getElementById("intellect").remove();
		document.getElementById("intellectText").remove();
	}
}