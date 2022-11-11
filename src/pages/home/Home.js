import React from 'react';
import HomeMain from './HomeMain';
import About from './About';
import Contact from './ContactUs';

function Home() {
	return (
		<div className="home">
			<HomeMain />
			<About />
			<Contact />
		</div>
	);
}

export default Home;
