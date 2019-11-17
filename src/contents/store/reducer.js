function createChessBoard(row,column){
			let tempList = []
			for(let i = 0;i < row;i++){
				let temp = []
				for(let j = 0;j<column;j++){
					temp.push(0)
				}
				tempList.push(temp);
			}
			return tempList;	
};

const defaultState = ({
	player: 1,
	list: createChessBoard(25,25),
	unclick: false
})


export default (state = defaultState, action) => {
	if(action.type === "handleElementClick"){
		let newList = [...state.list];
		const newState = JSON.parse(JSON.stringify(state));
		let newPlayer = action.player === 1 ? 2:1;
		newList[action.X][action.Y] = action.player;
		newState.list = newList;
		newState.player = newPlayer;
		return newState;
	}
	if(action.type ==="handlePlayerWin"){
		const newState = JSON.parse(JSON.stringify(state));
		newState.unclick = true;
		return newState;
	}

	return state;
}