import React from 'react';
import {Gallery} from './ImagesData';

const Carousel = () => {


    return (
		<div>
            {Gallery.map((gallery, index) => {
				return (
					<div key={index}>
                        <img src={gallery.image} alt="slider image" />
					</div>
				);
			})}
		</div>
    );
}

export default Carousel;