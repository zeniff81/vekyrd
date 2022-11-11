import { motion, useAnimation } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import './addisplay.css';

function AdDisplay({ children }) {
	const [adIndex, setAdIndex] = useState(0);
	const [parentWidth, setParentWidth] = useState(1);
	const [parentHeight, setParentHeight] = useState(1);

	const controls = useAnimation();
	const adDisplayRef = useRef(null);

	useEffect(() => {
		setParentWidth(adDisplayRef.current.getBoundingClientRect().width);
		setParentHeight(adDisplayRef.current.getBoundingClientRect().height);
		function updateSize() {
			setParentWidth(adDisplayRef.current.getBoundingClientRect().width);
			setParentHeight(adDisplayRef.current.getBoundingClientRect().height);
		}

		window.addEventListener('resize', updateSize);

		return () => window.removeEventListener('resize', updateSize);
	}, [adDisplayRef]);

	const nextAd = (idx, delay = 0) => {
		setTimeout(async () => {
			console.log(`delay:`, delay);
			await controls.start({
				opacity: 0,
				transition: { duration: 1 },
			});

			if (idx === children.length - 1) {
				setAdIndex(0);
			} else {
				setAdIndex(idx + 1);
			}

			await controls.start({
				opacity: 1,
			});
		}, delay * 1000);
	};

	return (
		<motion.div className="addisplay" ref={adDisplayRef} animate={controls}>
			{React.Children.map(
				children,
				(child, idx) =>
					adIndex === idx &&
					React.cloneElement(child, {
						key: idx,
						nextAd: (delay) => nextAd(idx, delay),
						initial: { opacity: 0 },
						exit: { opacity: 0 },
						parentWidth,
						parentHeight,
					})
			)}
		</motion.div>
	);
}

export default AdDisplay;
