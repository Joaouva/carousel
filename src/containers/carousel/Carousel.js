import React, { useState }from 'react';
import { Slider } from './style';
import CarouselContent from '../../components/CarouselContent/CarouselContent';
import Gallery from '../../components/Images/ImagesData';
import Images from '../../components/Images/Images';

const Carousel = () => {

	const width = () => window.innerWidth

	const [state, setState] = useState({
		translate: 0,
		transition: 0.45
	})

	const { translate, transition} = state

    return (
		<Slider>
			<CarouselContent translate={translate} transition={transition} width={width()}>
				{Gallery.map((slide, i) => (
					<Images key={slide + i} content={slide} width={width()}/>
				))}
			</CarouselContent>
		</Slider>
    );
}

export default Carousel;