import { motion } from 'framer-motion';
import React from 'react';
import background from '../../assets/img/linea.jpg';
import './adsietepasos.css';

function AdSietePasos({ nextAd }) {
	const siete = {
		initial: { opacity: 0, y: '-10vh' },
		animate: { opacity: 1, y: 0 },
	};

	const sieteContainer = {
		initial: { x: -20 },
		animate: {
			x: 20,
			transition: { repeat: Infinity, repeatType: 'reverse', duration: 3 },
		},
	};

	const pasos = {
		initial: { opacity: 0, x: '-10vh' },
		animate: { opacity: 1, x: 0, transition: { delay: 1 } },
	};

	const cuadro = {
		initial: { x: '-100vw' },
		animate: { x: 0, transition: { delay: 1.6, type: 'tween' } },
	};

	const cabello = {
		initial: { opacity: 0, x: -25 },
		animate: { opacity: 1, x: 0, transition: { delay: 2 } },
	};

	const adsietepasos = {
		initial: { opacity: 1 },
		animate: { opacity: 1, transition: { delay: 8 } },
	};

	return (
		<motion.div
			className="adsietepasos"
			variants={adsietepasos}
			initial="initial"
			animate="animate"
		>
			<img src={background} alt="" className="backgroundImg" />

			<motion.div
				className="cuadro"
				variants={cuadro}
				initial="initial"
				animate="animate"
			></motion.div>

			<motion.div
				className="sietecontainer"
				variants={sieteContainer}
				initial="initial"
				animate="animate"
			>
				<motion.div
					className="siete"
					variants={siete}
					initial="initial"
					animate="animate"
					exit={{ x: -20 }}
				>
					7
				</motion.div>
			</motion.div>
			<motion.div
				className="pasos"
				variants={pasos}
				initial="initial"
				animate="animate"
			>
				PASOS
			</motion.div>
			<motion.div
				className="cabello"
				variants={cabello}
				initial="initial"
				animate="animate"
				onAnimationComplete={() => nextAd(4)}
			>
				PARA UN CABELLO HERMOSO
			</motion.div>
		</motion.div>
	);
}

export default AdSietePasos;
