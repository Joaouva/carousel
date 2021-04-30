import React from 'react'
import styled from 'styled-components'


const Dot = styled.span`
	padding: 10px;
	margin-right: 5px;
	cursor: pointer;
	border-radius: 50%;
	background: ${(props) => props.active ? "black" : "white"};
`;

const Div = styled.div`
	position: fixed;
	bottom: 25px;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Dots = props => {
    
    return (
        <Div>
            {props.slides.map((slide, i) => (
                <Dot key={slide} active={props.activeIndex === i} />
            ))}
        </Div>
    )
}

export default Dots;