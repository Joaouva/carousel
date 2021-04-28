import React from 'react';
import styled from "styled-components";
import { Content } from "./style"


const CarouselContent = (props) => (
	<Content transition={props.transition} width={props.width} translate={props.translate}
	>
		{props.children}
	</Content>
);

export default CarouselContent;
