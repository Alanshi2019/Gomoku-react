export const handleElementClick = (positionX,positionY,player)=>({
	type: "handleElementClick",
	X: positionX,
	Y: positionY,
	player
});


export const handlePlayerWin = ()=>({
	type: "handlePlayerWin"
});