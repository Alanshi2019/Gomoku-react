import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const Globalstyle = createGlobalStyle`

body{
	margin:0;
	padding:0;
	font-family:sans-serif;
	background-image: url("http://pic1.win4000.com/wallpaper/a/5696fefb47bd2.jpg");
	background-repeat: no-repeat;
	background-size:cover;

	}

`


export const ContainerWrapper = styled.div`
	text-align: center;
	margin: 80px auto;
	background-color: rgba(255,255,255,0.8);
	padding-bottom: 20px;
	
`


export const GameTitle = styled.div`
	font-size: 50px;
	
	width: 400px;
	margin: 20px auto;
`

export const ChessBoard = styled.table`
	border: 1px solid blue;
	margin: 10px auto;
	border-collapse: collapse;
	
`


export const ChessBoardRow = styled.tr`
	border: 1px solid green;
	width: 50px;
	
`

export const ChessBoardElement = styled.td`
	border: 1px solid black;
	width: 10px;
	height: 10px;

	:hover{
		background: green;
	}

	.whiteCircle{
		margin: 0 auto;
		border:1px solid black;
		height: 8px;
		width: 8px;
		border-radius:50%;
		pointer-events:none	
	}
	.blackCircle{
		margin: 0 auto;
		background:black;
		border:1px solid black;
		height: 8px;
		width: 8px;
		border-radius:50%;
		pointer-events:none
	}
`

export const ChessBoardBody = styled.tbody`
	border:2px solid black;

	
	
`


export const BlackCircle = styled.div`
	display: inline-block;
	margin: 0 auto;
	background:black;
	border:1px solid black;
	height: 12px;
	width: 12px;
	border-radius:50%;
	pointer-events:none;
	&.selected{
		padding: 5px;
	}
`


export const WhiteCircle = styled.div`
	display: inline-block;
	margin: 0 auto;
	border:1px solid black;
	height: 12px;
	width: 12px;
	border-radius:50%;
	pointer-events:none;
	&.selected{
		padding: 5px;
	}
`


export const ResetButton = styled.div`
	width: 300px;
	height:50px;
	line-height: 50px;
	margin:0 auto;
	border: 1px solid #ccc;
	text-align: center;
	margin-top: 20px;

	border-radius: 20px;
	color: black;
	box-shadow: 0px 10px 5px #888888;
	:hover{
		background:#ccc
		color:white;
	}
	:active{
		transform:translateY(5px);
		box-shadow: 0px 5px 5px #888888;
	}
	cursor:pointer;
`






