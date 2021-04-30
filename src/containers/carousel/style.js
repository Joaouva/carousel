import styled from "styled-components";

export const Slider = styled.div` 
position: relative;
height: 100vh;
width: 100vw;
margin: 0 auto;
overflow: hidden;
white-space: nowrap;
`;

export const CarouselContent = styled.div`
	transform: translateX(-${(props) => props.translate}px);
	transition: transform ease-out ${(props) => props.transition}s;
	height: 100%;
	width: ${(props) => props.width}px;
    display: flex;
`;


export const Image = styled.img`
    height: 100vh;
	width: ${(props) => props.width}px;
    position: relative;
`;