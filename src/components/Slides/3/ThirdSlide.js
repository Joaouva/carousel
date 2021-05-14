import React from "react";
import styled, { keyframes } from "styled-components";

const Main = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
	margin: 0 auto;
	overflow: hidden;
	white-space: nowrap;
	background: #222;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const typing = keyframes`
	  from {
			width: 0;
			visibility: visible;
  }
  	
`;

const blink = keyframes`
	0% {
	opacity: 1;
	}
	50% {
    border-color: transparent
	opacity: 1;
  }
  100% {
	border-right: none;
	opacity: 1;
  }
`;

const FirstLine = styled.div`
	width: 5ch;
	animation: ${typing} 2s steps(15), ${blink} 4s ease-out;
	animation-fill-mode: forwards;
	white-space: wrap;
	overflow: hidden;
	border-right: 3px solid;
	font-size: 2em;
	color: white;
	opacity: 0;
	margin: 4%;
`;

const SecondLine = styled.div`
	width: 17ch;
	animation: ${typing} 2s steps(22), ${blink} 4s ease-out;
	animation-delay: 2s;
	animation-fill-mode: forwards;
	white-space: wrap;
	overflow: hidden;
	border-right: 3px solid;
	font-size: 2em;
	color: white;
	opacity: 0;
`;

const ThirdLine = styled.div`
	width: 7.5ch;
	animation: ${typing} 2s steps(18), ${blink} 4s ease-out;
	animation-fill-mode: forwards;
	animation-delay: 4s;
	white-space: wrap;
	overflow: hidden;
	border-right: 3px solid;
	font-size: 2em;
	color: white;
	opacity: 0;
`;

const FourthLine = styled.div`
	width: 15ch;
	animation: ${typing} 2s steps(22), ${blink} 4s ease-out;
	animation-fill-mode: forwards;
	animation-delay: 6s;
	white-space: wrap;
	overflow: hidden;
	border-right: 3px solid;
	font-size: 2em;
	color: white;
	opacity: 0;
	color: #00d8ff;
`;

const Image = styled.img`
	width: 40vh;
`


function ThirdSlide() {
	return (
		<Main>
			<FirstLine>Well...</FirstLine>
			<SecondLine>You will not believe it</SecondLine>
			<ThirdLine>but I'm a</ThirdLine>
			<FourthLine>React Developer!</FourthLine>
			<Image src="../../../images/MemojiJU.png"></Image>
		</Main>
	);
}

export default ThirdSlide;
