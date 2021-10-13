var clearboss = 0;
var dungeon = 1;
function dungeonUp()
{
	if(dungeon == 4 && clearboss == 1)
	{
		dungeon+=2
	}
	dungeon+=1
	document.getElementById('difficult').innerHTML=`Текущая сложность: ${dungeon}`
	mleft=0;
	mright=mleft+50;
	document.getElementById('hero').style.left=mleft + 'px';
	document.getElementById('hero').style.right=mright + 'px';
}
function dungeonDown()
{
	if(dungeon	> 1)
	{
		dungeon-=1
	}
	if(dungeon == 6 && clearboss == 1){
		dungeon-=2
	}
	document.getElementById('difficult').innerHTML=`Текущая сложность: ${dungeon}`
	mleft=mright-50;
	mright=window.screen.width;
	document.getElementById('hero').style.left=mleft + 'px';
	document.getElementById('hero').style.right=mright + 'px';
}
function afterBoss()
{
	dungeon+1
	checkDungeon();
}
function checkDungeon()
{
	if (dungeon < 5) 
		{
			setTimeout(function	(){
				if(dungeon < 5)
				{
					zombie1();
				}
				else
				{
					checkDungeon();
				}
			},10000)
		}
	if(dungeon	== 5)
	{
		boss1();
	}
	if (dungeon > 5)
		{
			setTimeout(function	()
			{
				zombie1();
				zombie2();
			},10000)
		}
}