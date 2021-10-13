var rainforcecostBaxe = 20
var forcheBaxe = 0;
function reinforceBAXE()
{
	if(gold	> rainforcecostBaxe && forcheBaxe < 15)
	{
		gold -= rainforcecostBaxe;
		rainforcecostBaxe+=5;
		forcheBaxe+=1
		damage+=5;
		document.getElementById('gold').innerHTML=`${gold} <img class='coin' src ='../uploads/general/gold.png'>`;
		document.getElementById(`${id1}`).remove();
		if(gold > rainforcecostBaxe){
		shopfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${id1}" style ="background-image:url(../uploads/general/rainforche.png);"><h5 style ="position:absolute; left:2px; top:2px;">${rainforcecostBaxe}</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
		document.getElementById(`${id1}`).onclick = reinforceBAXE;
		}
	}
}