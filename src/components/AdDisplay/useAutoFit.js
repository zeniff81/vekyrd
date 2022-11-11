import { useEffect, useState } from 'react';

export const useAutoFit = (ref, parentWidth, parentHeight) => {
	const [width, setWidth] = useState(1);
	const [height, setHeight] = useState(1);

	console.log('autofit... flickering? ');

	useEffect(() => {
		let childWidth = ref.current.getBoundingClientRect().width;
		let childHeight = ref.current.getBoundingClientRect().height;
		console.log('childWidth: ', childWidth, 'parentWidth', parentWidth);

		const incHeight = () => {
			if (childHeight < parentHeight + 30 && childHeight > parentHeight - 30)
				return;

			if (childHeight < parentHeight) {
				setHeight((prev) => {
					return prev + 0.01;
				});
			} else if (childHeight > parentHeight) {
				setHeight((prev) => {
					return prev - 0.01;
				});
			}
		};

		const incWidth = () => {
			if (childWidth < parentWidth + 30 && childWidth > parentWidth - 30)
				return;

			if (childWidth < parentWidth) {
				setWidth((prev) => {
					return prev + 0.1;
				});
			} else if (childWidth > parentWidth) {
				setWidth((prev) => {
					return prev - 0.1;
				});
			}
		};

		incHeight();
		incWidth();
	}, [width, height, parentWidth, parentHeight, ref]);

	return { width, height };
};
