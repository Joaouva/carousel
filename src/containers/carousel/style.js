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
	width: 100vw;
    display: flex;
	margin: 0;
`;


export const Image = styled.img`
	width: ${(props) => props.width}px;
    position: relative;
`;


export const Main = styled.div`
	background-color: green;
	overflow: hidden;
	position: relative;
	width: ${(props) => props.width}px;

`;

export const Swiper = styled.div`
	display: flex;
	overflow-x: visible;
	transition-property: transform;
	will-change: transform;
`;

export const Slide = styled.div`
	object-fit: contain;
	width: ${(props) => props.width}px;
`;