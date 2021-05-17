import React from "react";
import styled, { keyframes } from "styled-components";

const Main = styled.div`
	height: 100vh;
	width: 100vw;
	background: #e04f4f;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const animationFirstLine = keyframes`
  0% {
    opacity: 0;
	transform: translate3d(0, 100%, 0);
  }
  25% {
    opacity: 0.5;
  }
  40%, 60% {
    opacity: 1;
	transform: translate3d(0, 50%, 0);
  }
  100% {
    opacity: 0.6;
	transform: translate3d(0, 0, 0);
  }
`;

const animationSecondLine = keyframes`
   0% {
    opacity: 0;
	transform: translate3d(0, 100%, 0);
  }
  25% {
    opacity: 0.5;
  }
  40%, 60% {
    opacity: 1;
	transform: translate3d(0, 50%, 0);
  }
  100% {
    opacity: 0.6;
	transform: translate3d(0, 0, 0);
  }
`;

const animationThirdLine = keyframes`
  0% {
    opacity: 0;
	transform: translate3d(0, -100%, 0);
  }
  25% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.7;
	box-shadow: 5px 5px 15px 5px #000000;
  }
  100% {
    opacity: 1;
	transform: translate3d(0, 0, 0);;
  }
`;


const LineOne = styled.h1`
	animation: ${animationFirstLine} 2s ease-out;
	animation-fill-mode: forwards;
	opacity: 0;
	padding: 5px;
	font-size: 2rem;
	color: white;
	font-weight: normal;
	transform: translate(-50%, -50%);
`;

const LineTwo = styled.h1`
	animation: ${animationSecondLine} 2s ease-out;
	animation-fill-mode: forwards;
	animation-delay: 4s;
	opacity: 0;
	padding: 5px;
	font-size: 2rem;
	color: white;
	font-weight: normal;
	transform: translate(-50%, -50%);
	border-bottom: 1px solid white;
`;

const LineThree = styled.h1`
	animation: ${animationThirdLine} 2s ease-out;
	animation-fill-mode: forwards;
	animation-delay: 6s;
	opacity: 0;
	padding: 20px;
	font-size: 2.5rem;
	color: white;
	margin-top: 10%;
	transform: translate(0, -100%);
`;

const Image = styled.img`
	animation: ${animationSecondLine} 2s ease-out;
	animation-fill-mode: forwards;
	animation-delay: 2s;
	filter: brightness(0) invert(1);
	width: 30vh;
	opacity: 0;
	padding: 5px;
`;

function Second() {
    
    return (
		<Main>
			<LineOne>I heard that</LineOne>
			<Image src="https://www.marello.com/wp-content/uploads/2019/04/Scandiweb_logo-1.png"></Image>
			<LineTwo>is looking for a</LineTwo>
			<LineThree>React Developer</LineThree>
		</Main>
    );
}

export default Second;