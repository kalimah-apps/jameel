import fse from 'fs-extra';
import mainTheme from './generate/main.js';

const readBase = async () => {
	try {
		const base = await fse.readJson('./generate/base.json');
		base.tokenColors = mainTheme;
		await fse.writeJson('./themes/jameel-color-theme.json', base, { spaces: 2 });
	} catch (error) {
		console.error(error);
	}
};

readBase();
