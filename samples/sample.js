function convertLength(length, fromUnit, toUnit) {
	// convert to meters
	var meters = 0;
	switch (fromUnit) {
		case "m":
			meters = length;
			break;
		case "cm":
			meters = length / 100;
			break;
		case "mm":
			meters = length / 1000;
			break;
		case "in":
			meters = length / 39.3701;
			break;
		case "ft":
			meters = length / 3.28084;
			break;
		case "yd":
			meters = length / 1.09361;
			break;
		case "mi":
			meters = length / 0.000621371;
			break;
		default:
			return "Invalid unit";
	}
	// convert to target unit
	var result = 0;
	switch (toUnit) {
		case "m":
			result = meters;
			break;
		case "cm":
			result = meters * 100;
			break;
		case "mm":
			result = meters * 1000;
			break;
		case "in":
			result = meters * 39.3701;
			break;
		case "ft":
			result = meters * 3.28084;
			break;
		case "yd":
			result = meters * 1.09361;
			break;
		case "mi":
			result = meters * 0.000621371;
			break;
		default:
			return "Invalid unit";
	}
	return result;
}
