import React from "react";
import styled from "styled-components";

const Div = styled.div`
	display: flex;
	position: absolute;
	top: 50%;
	${(props) => (props.direction === "right" ? `right: 25px` : `left: 25px`)};
	height: 50px;
	width: 50px;
	justify-content: center;
	background: white;
	border-radius: 50%;
	cursor: pointer;
	align-items: center;
	transition: transform ease-in 0.1s;
	&:hover {
		transform: scale(1.1);
	}
`;


const Arrow = ({ direction, handleClick }) =>
    <Div direction ={direction} onClick={handleClick}>
        {direction === 'right' ? <button>right</button> : <button>left</button>}
    </Div>


export default Arrow;