let a = document.getElementsByTagName("td");
let status=document.getElementById("status");
let squares=Array(9).fill(null);
let xIsNext=true;
status.innerHTML="Click a box to Start";
let reset=document.getElementById("reset");
reset.addEventListener("click",()=>{for(let i=0;i<a.length;i++){
	a[i].innerHTML="";
	squares=[];
	status.innerHTML="Click a box to Start";
}});

for(let i=0;i<=a.length;i++){
	a[i].addEventListener("click",(e)=>{if(squares[parseInt(e.target.id)]||calculateWinner(squares)){
		return;
	}squares[parseInt(e.target.id)]=xIsNext?"X":"O";
										xIsNext=!xIsNext;
										e.target.innerHTML=squares[parseInt(e.target.id)];
										let winner=calculateWinner(squares);
										if(winner){
											status.innerHTML="winner is "+winner
										}else{
											status.innerHTML="Next Player "+(xIsNext?"X":"O")
										};
										console.log(squares)});
}

function calculateWinner(squares){
	let lines=[[0,1,2],
			   [3,4,5],
			   [6,7,8],
			   [0,3,6],
			   [1,4,7],
			   [2,5,8],
			   [0,4,8],
			   [2,4,6]]
	for(let i=0;i<lines.length;i++){
		let [a,b,c]=lines[i];
		if(squares[a]===squares[b]&&squares[a]===squares[c]){
			return squares[a];
		}
	}
	return null;
}


