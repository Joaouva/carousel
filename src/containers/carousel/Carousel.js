import React, { useState, useEffect, useRef } from "react";
import { Slider, CarouselContent } from "./style";
import Arrow from '../../components/Arrows/Arrows';
import Dots from "../../components/Dots/Dots";

const Carousel = (props) => {
	//creating a new array with only the visible slides (3)
	//increment efficiency in the app by avoiding the render of every slides
	const { slides } = props;

	const firstImage = slides[0];
	const secondImage = slides[1];
	const thirdImage = slides[slides.length -1];


	//getting the with of the screen to adapt the image
	const width = () => window.innerWidth;

	// Defining the current slide (activeIndex)
	// translate and transition will be responsible to move carousel content
	const [state, setState] = useState({
		activeIndex: 0,
		translate: width(),
		transition: 0.45,
		_images: [thirdImage, firstImage, secondImage],
	});

	const { translate, transition, activeIndex, _images } = state;

	//slider animation - using useRef and useEffect to se the value of autoPlay on every render
	const autoPlay = useRef();
	//create a Ref for transition - will prevent the _images array to update until after each slide has finished
	const transitionRef = useRef();
	//to handle resizes
	const resizeRef = useRef();

	useEffect(() => {
		autoPlay.current = nextSlide;
		transitionRef.current = smoothTransition;
		resizeRef.current = handleResize;
	});

	useEffect(() => {
		const play = () => {
			autoPlay.current();
		};

		const smooth = (e) => {
			if (e.target.className.includes("SliderContent")) {
				transitionRef.current();
			}
		};

		const resize = () => {
			resizeRef.current()
		}
		//animation time - 15000 - increase to slower the slider or decrease to faster it
		const interval = setInterval(play, 10000);
		//each time the transtionend event ends will trigger the smooth function - avoid the array to update each time o hover the arrays
		const transitionEnd = window.addEventListener("transitionend", smooth);

		const onResize = window.addEventListener("resize", resize);

		return () => {
			clearInterval(interval)
			window.removeEventListener("transitionend", transitionEnd);
			window.removeEventListener("resize", onResize);
		};
	}, []);

	useEffect(() => {
		if (transition === 0) setState({ ...state, transition: 0.45 });
	}, [transition]);

	const handleResize = () => {
		setState({ ...state, translate: width(), transition: 0 });
	};


	//logic to prevent the _images array of updating until each slide have finish
	const smoothTransition = () => {
		let _images = [];

		if (activeIndex === slides.length - 1)
			_images = [slides[slides.length - 2], thirdImage, firstImage];
		else if (activeIndex === 0) _images = [thirdImage, firstImage, secondImage];
		else _images = slides.slice(activeIndex - 1, activeIndex + 2);

		setState({
			...state,
			_images,
			transition: 0,
			translate: width(),
		});
	};

	//getting the next slide with the arrows
	const nextSlide = () => {
		setState({
			...state,
			translate: translate + width(),
			activeIndex: activeIndex === slides.length - 1 ? 0 : activeIndex + 1,
		});
	};

	//getting the last slide with the arrows
	const prevSlide = () => {
		setState({
			...state,
			translate: 0,
			activeIndex: activeIndex === 0 ? slides.length - 1 : activeIndex - 1,
		});
	};


	//Touch support
	const handleTouch = (e) => {
		//get the touch direction to know if it should move forward or back
		if (e.changedTouches[0].clientX < 50) {
			nextSlide();
		} else if (e.changedTouches[0].clientX > 350){
			prevSlide();
		}
	}


	return (
		<Slider>
			<CarouselContent
				className="SliderContent"
				translate={translate}
				transition={transition}
				width={width() * _images.length}
				onTouchEnd={handleTouch}
			>
				{_images.map((_slide, i) => (
					<div key={i}>
						<_slide></_slide>
					</div>
				))}
			</CarouselContent>

			<Arrow direction="left" handleClick={prevSlide} />
			<Arrow direction="right" handleClick={nextSlide} />

			<Dots slides={props.slides} activeIndex={activeIndex} />
		</Slider>
	);
};

export default Carousel;