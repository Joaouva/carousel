import React from 'react';
import Carousel from './containers/carousel/Carousel'



function App() {

  const Gallery = [
		"https://images.unsplash.com/photo-1619408507579-368cba59746f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1504&q=80",
		"https://images.unsplash.com/photo-1598194550497-694db6d310fc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2091&q=80",
		"https://images.unsplash.com/photo-1556913702-9f9ba457b353?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1452&q=80",
		"https://images.unsplash.com/photo-1618386230353-3631c1365be2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1510&q=80",
  ];
    
    return (
		<div>
			<Carousel slides={Gallery} />
			{/* <Slider slides={Gallery}/> */}
		</div>
    );

}

export default App;