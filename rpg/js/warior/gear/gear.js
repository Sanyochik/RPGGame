var id1 = 'bloodaxe';
var id2 = 'potion';
function potion()
{
	gold -= 10;
	hp+=30;
	if(hp > health)
	{
		var chache=hp-health;
		hp-=chache;
	}
	document.getElementById('gold').innerHTML=`${gold} <img class='coin' src ='../uploads/general/gold.png'>`;
	procentHp= (hp*100)/health
	procentHp=Math.floor(procentHp)
	document.getElementById('healthbar').innerHTML=`<div class="bar" style=" position:absolute; height:20px;width:${procentHp} %; background-color:red; font-size:20px;">${hp}/${health}</div>`;
	if(gold < 10)
	{
		document.getElementById(`${id2}`).remove();
	}
}
function equipBAXE()
{
	if(gold> 10)
	{
		gold -= 10;
		baxe=1;
		damage+=3;
		health-=10;
		document.getElementById('gold').innerHTML=`${gold} <img class='coin' src ='../uploads/general/gold.png'>`;
		procentHp= (hp*100)/health
		procentHp=Math.floor(procentHp)
		document.getElementById(`${id1}`).remove();
		if(gold > 20){
			shopfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${id1}" style ="background-image:url(../uploads/general/rainforche.png);"><h5 style ="position:absolute; left:2px; top:2px;">${rainforcecostBaxe}</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
			document.getElementById(`${id1}`).onclick = reinforceBAXE;
		}
	}
}
function shop()
{
	body.insertAdjacentHTML('afterbegin',`<div class="shopfull" id="shopfull" style=" left:20; bottom=0px;">`)
	if(gold > 10 && baxe == 0){
		shopfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${id1}" style="background-color:black;"><h5 style ="position:absolute; left:2px; top:2px;">10</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
		document.getElementById(`${id1}`).onclick = equipBAXE;
	}
	if(gold > 20 && baxe == 1){
		shopfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${id1}" style ="background-image:url(../uploads/general/rainforche.png);"><h5 style ="position:absolute; left:2px; top:2px;">${rainforcecostBaxe}</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
		document.getElementById(`${id1}`).onclick = reinforceBAXE;
	}
	shopfull.insertAdjacentHTML('afterbegin',`<div class="close" id="close">`)
	document.getElementById('close').onclick = close
}
function close()
{
		document.getElementById("close").remove();
		document.getElementById("shopfull").remove();
}