import React from "react";
import styled, { keyframes } from "styled-components";

const Main = styled.div`
	position: relative;
	height: 100vh;
	width: 100vw;
	margin: 0 auto;
	overflow: hidden;
	white-space: nowrap;
	background: #e04f4f;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content:center;
`;

const wave = keyframes`
33% {
    text-shadow: 0 60px #f37121, 0 150px #f2aaaa;
  }
  50% {
    transform: rotate(-4deg);
    text-shadow: 0 0px #8fc0a9, 0 0px #84a9ac;
  }
  66.67% {
    text-shadow: 0 -60px #d54062, 0 -150px #8fc0a9;
  }
`;

const Animated = styled.h1`
	color: black;
	animation: ${wave} 2s ease-in-out infinite;
	transform: translate(-50%, -50%);
	font-size: 10vw;
	color: white;
	text-align: center;
	align-self: center;
	justify-self: center;
	margin: 10vw;
`;


function ForthSlide() {
	return (
		<Main>
			<Animated>MATCH!</Animated>
			<Animated>MATCH!</Animated>
		</Main>
	);
}

export default ForthSlide;
