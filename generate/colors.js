import chroma from 'chroma-js';

const colorScale = function (mainColor) {
	const main = chroma(mainColor);
	const toColor = main.darken(3).hex();
	const fromColor = main.brighten(3).hex();
	return chroma.scale([fromColor, mainColor, toColor]).colors(9);
};

export default {
	main: {
		orange: colorScale('#fb923c'),
		yellow: colorScale('#facc15'),
		sky: colorScale('#22d3ee'),
		blue: colorScale('#60a5fa'),
		indigo: colorScale('#818cf8'),
		purple: colorScale('#c084fc'),
		violet: colorScale('#a78bfa'),
		green: colorScale('#34d399'),
		emerald: colorScale('#4ade80'),
		teal: colorScale('#2dd4bf'),
	},
};