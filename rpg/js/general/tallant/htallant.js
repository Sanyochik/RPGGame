function choose()
{
	Htallantfull.insertAdjacentHTML('afterbegin',`<div class="${str1tal1choose}" id="${str1tal1choose}" style="background-color:black;"><h5 style ="position:absolute; left:2px; top:2px;">10</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
	document.getElementById(`${str1tal1choose}`).onclick = choose1;
	Htallantfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${str1tal1choose}" style="background-color:black;"><h5 style ="position:absolute; left:2px; top:2px;">10</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
	document.getElementById(`${str1tal1choose}`).onclick = choose2;
	Htallantfull.insertAdjacentHTML('afterbegin',`<div class="${id1}" id="${str1tal1choose}" style="background-color:black;"><h5 style ="position:absolute; left:2px; top:2px;">10</h5><img style ="position:absolute; left:20px; top:27px;" class='coin' src ='../uploads/general/gold.png'></div>`);
	document.getElementById(`${str1tal1choose}`).onclick = choose3;
}