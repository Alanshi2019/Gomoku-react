import React,{Component,Fragment} from 'react';
import store from './store'
import * as actionCreators from './store/actionCreators.js'
import { Globalstyle } from './style';
//import {Link} from 'react-router-dom';
import {
	ContainerWrapper,
	ChessBoard,
	ChessBoardBody,
	ChessBoardRow,
	ChessBoardElement,
	ResetButton,
	GameTitle,
	BlackCircle,
	WhiteCircle
} from './style.js'



class Wuziqi extends Component{
	constructor(props){
		super(props);
		this.state = store.getState();
		this.handleStoreChange = this.handleStoreChange.bind(this);
		this.handleElementClick = this.handleElementClick.bind(this);
		this.handleCheckGame = this.handleCheckGame.bind(this);
		this.handleResetGame =this.handleResetGame.bind(this);
		store.subscribe(this.handleStoreChange);//当store值改变时 运行此函数！！
	}
	render(){
		const getChessBoard = this.state.list.map((item,index)=>{
			let res = [];
			let trContent = [];
			for(let j = 0; j<item.length; j++){
				trContent.push(
					<ChessBoardElement 
						key = {j}
						id = {[index,j]}
						onClick = {this.handleElementClick}
					/>
				)
			}
			res.push(<ChessBoardRow key= {index}>{trContent}</ChessBoardRow>)
			return res;
		});
		return(
			<Fragment>
			<Globalstyle />
				<ContainerWrapper>
					<GameTitle>
						Gomoku
					</GameTitle>

					<ChessBoard>
						<ChessBoardBody>
							{getChessBoard}
						</ChessBoardBody>

					</ChessBoard>
						<div>
							<BlackCircle  
							className = {this.state.player === 1 ? "selected": ""}
							/> : <WhiteCircle className= {this.state.player === 2 ? "selected": ""}/>
						</div>
						<ResetButton onClick = {this.handleResetGame}>
							Reset
						</ResetButton>
				</ContainerWrapper>
			</Fragment>
		);
	}

	handleStoreChange(){
    	this.setState(store.getState());
  	}
  	handleResetGame(){
  		window.location.reload();
  	}
  	handleElementClick(e){
  		if(this.state.unclick === false){

  		let positionX = parseInt(e.target.id.split(",")[0]);
		let positionY = parseInt(e.target.id.split(",")[1]);

		// e.currentTarget.style.background = "牛逼"！！！
		
		if(this.state.list[positionX][positionY] === 0){
			if(this.state.player === 1){
				e.currentTarget.innerHTML = "<div class = 'whiteCircle'></div>";
			}else{
				e.currentTarget.innerHTML = "<div class = 'blackCircle'></div>";
			}
			store.dispatch(actionCreators.handleElementClick(positionX,positionY,this.state.player))
			this.handleCheckGame(positionX,positionY)
		}else{
			alert("You can't pick here");
		}
	}
		
	}

	handleCheckGame(x,y){
		let newList = this.state.list;
		let row = newList.length;
		let column = newList[0].length;
		let curPlayer = this.state.player;

		function checkHorizontal(){
			let temp_horizontal = 0
			let left = y;
			let right = y+1;
			while(left>=0 && newList[x][left] === curPlayer){
				temp_horizontal += 1
				left -= 1	
			}
			while(right<column && newList[x][right]===curPlayer){
				temp_horizontal += 1
				right += 1
			}
			if(temp_horizontal >= 5){
				return 1;
			}
			return 0;
		};

		function checkVertical(){
			let temp_Vertical = 0
			let up = x;
			let down = x+1;
			while(up>=0 && newList[up][y] === curPlayer){
				temp_Vertical += 1
				up -= 1	
			}
			while(down<row && newList[down][y]===curPlayer){
				temp_Vertical += 1
				down += 1
			}
			if(temp_Vertical >= 5){
				return 1;
			}
			return 0;
		};

		function checkDiagonal(){
			//topleft
			let temp_Diagonal = 0
			let tl = x;
			let br = y;
			while(tl>=0 && br >=0 && newList[tl][br] === curPlayer){
				temp_Diagonal += 1
				tl -= 1
				br -= 1
			}
			tl = x+1;
			br = y+1;
			while(tl<row && br<row && newList[tl][br] === curPlayer){
				temp_Diagonal += 1
				tl += 1
				br += 1
			}
			if(temp_Diagonal >= 5){
				return 1;
			}

			//topright
			temp_Diagonal = 0
			let tr = x;
			let bl = y;
			while(tr >= 0 && bl <row && newList[tr][bl] === curPlayer){
				temp_Diagonal += 1
				tr -= 1
				bl += 1
			}
			tr = x+1;
			bl = y+1;
			while(tr<row && bl>=0 && newList[tr][bl] === curPlayer){
				temp_Diagonal += 1
				tr += 1
				bl -= 1
			}
			if(temp_Diagonal >= 5){
				return 1;
			}
			return 0;

		}

		if(checkHorizontal() || checkVertical() || checkDiagonal()){
			alert("Player " + curPlayer + " win!")
			store.dispatch(actionCreators.handlePlayerWin());
		}
	}



}
export default Wuziqi