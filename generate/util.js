
import colors from './colors.js';

const getColorLevel = function (color, level = 0) {
	// 0 represent the center of the color scale
	const colorScale = colors.main[color];

	// Get the center of the color scale by rounding down to the nearest divisible of 2
	const center = Math.floor(colorScale.length / 2);

	const scaleIndex = center + level;
	return colorScale[scaleIndex];
};

const variableColor = function (level) {
	return getColorLevel('blue', level);
};

const typeColor = function (level) {
	return getColorLevel('yellow', level);
};

const keywordColor = function (level) {
	return getColorLevel('green', level);
};

export {
	typeColor,
	variableColor,
	keywordColor,
	getColorLevel
};