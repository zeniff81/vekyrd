export const orchestrate = (
	controller,
	variants,
	time,
	end = null,
	nextAd = null,
	idx = null
) => {
	let interval;

	if (end) {
		interval = setTimeout(() => {
			nextAd(idx);
		}, time);
	} else {
		interval = setTimeout(() => {
			controller.start(variants);
		}, time * 1000);
	}
};
