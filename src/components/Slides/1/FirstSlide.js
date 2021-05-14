import React from "react";
import styled from "styled-components";

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

const Title = styled.h1`
    color: white;
	padding: 2%;
	`

const SubTitle = styled.h2`
	margin-top: 3%;
	color: #cacaca;
`;

const Text = styled.p`
	color: #cacaca;
`;

function FirstSlide() {
	return (
		<Main>
			<img src="https://www.joaouva.com/images/JU.png"></img>
			<Title>Hello There!</Title>
			<SubTitle>I'm João</SubTitle>
			<Text>A web developer from Lisbon.</Text>

		</Main>
	);
}

export default FirstSlide;
