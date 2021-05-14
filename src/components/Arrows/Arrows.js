import React from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	${(props) => (props.direction === "right" ? `right: 10px` : `left: 10px`)};
	cursor: pointer;
	align-items: center;
	justify-content: center;
	transition: transform ease-in 0.1s;
	&:hover {
		transform: scale(1.1);
	}
`

const Button = styled.button`
	background-color: rgba(255, 255, 255, 0.5);
	border-radius: 50%;
	height: 30px;
	width: 30px;
	border: 0;
	color: white;
`;


const Arrow = ({ direction, handleClick }) => (
	<Div direction={direction} onClick={handleClick}>
		{direction === "right" ? <Button> → </Button> : <Button> ← </Button>}
	</Div>
);


export default Arrow;