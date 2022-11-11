import { useMediaQuery } from '../../utilities/useMediaQuery';

import logoTiempo1 from '../../assets/img/tiempo1.svg';
import logoTiempo2 from '../../assets/img/tiempo2.svg';
import phoneIcon from '../../assets/img/phone.svg';
import React from 'react';
import whatsappIcon from '../../assets/img/whatsapp.svg';
import RandomProducts from '../../components/product/RandomProducts.js';

function Home() {
	let pageWidth768 = useMediaQuery('(min-width: 768px)');

	return (
		<div className="homemain">

			{/* stripe */}
			<div className="stripe-logo">
				<div className="stripe stripe1"></div>
				<div className="logoTiempo">
					<img src={pageWidth768 ? logoTiempo1 : logoTiempo2} alt="" />
				</div>
				<div className="stripe stripe2"></div>
			</div>
			{/* stripe */}

			<RandomProducts />

			<div className="contact-number">
				<h3>Contáctenos</h3>
				<h2> 809-983-7518</h2>
				<img src={phoneIcon} alt="ícono de teléfono " />
				<img src={whatsappIcon} alt="ícono de whatsapp " />
			</div>
		</div>
	);
}

export default Home;
