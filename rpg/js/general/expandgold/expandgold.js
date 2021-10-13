var shopstart= 0;
var exp = 0;
var exptoUp = 5;
var tallant = 0;
var level = 1;
var Htallant = 0
function goldandexp()
{
	if(exp>exptoUp|| exp == exptoUp)
	{
		while(exp>=exptoUp)
		{
			exp-=exptoUp;
			exptoUp+=5;
			level+=1;
			tallant+=1;
		}
		procent= (exp*100)/exptoUp
		procent=Math.floor(procent)
		if (gold > 10)
		{
			if(shopstart == 0)
			{
				body.insertAdjacentHTML('afterbegin',`<div class="shop" id="shop"></div>`);
				document.getElementById('shop').onclick = shop
				shopstart = 1;
			}
				body.insertAdjacentHTML('afterbegin',`<div class="${id2}" id="${id2}"><h5 style ="position:absolute; left:23%; top:30px;">10</h5><img style ="position:absolute; left:60%; top:53px;" class='coin' src ='../uploads/general/gold.png'></div>`);
				document.getElementById('potion').onclick = potion
		}
		if (Htallant > 0)
		{
			body.insertAdjacentHTML('afterbegin',`<div class="Htallant" id="Htallant"></div>`);
			document.getElementById('Htallant').onclick = Htallant
		}
		document.getElementById('gold').innerHTML=`${gold} <img class='coin' src ='../uploads/general/gold.png'>`
		document.getElementById('lvl').innerHTML=`${level}`;
		document.getElementById('lvlbar').innerHTML=`<div class="lvlbarfill" style=" position:absolute; height:20px;width:${procent} %; background-color:yellow; font-size:20px;">${exp}/${exptoUp}</div>`;
	levelup();
	}
}