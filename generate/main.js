import { getColorLevel, variableColor, typeColor, keywordColor } from './util.js';
const theme = [
	{
		name: 'Variable',
		scope: ['variable', 'support.class'],
		settings: {
			foreground: getColorLevel('yellow', 0),
		},
	},
	{
		name: 'Types',
		scope: ['support.type'],
		settings: {
			foreground: getColorLevel('yellow', 2),
		},
	},
	{
		name: 'Storage',
		scope: [
			'storage.type',
			'meta.method.declaration meta.var storage.type',
			'variable.language.this',
		],
		settings: {
			foreground: getColorLevel('blue', 2),
		},
	},
	{
		name: 'Storage',
		scope: ['storage.modifier.async'],
		settings: {
			foreground: getColorLevel('violet', 2),
		},
	},
	{
		name: 'Storage',
		scope: ['meta.method.declaration storage.type'],
		settings: {
			foreground: getColorLevel('yellow', 2),
		},
	},
	{
		scope: ['variable.other.object'],
		settings: {
			foreground: getColorLevel('purple', 0),
		},
	},
	{
		scope: ['variable.other.property'],
		settings: {
			foreground: getColorLevel('purple', -2),
		},
	},
	{
		name: 'Functions',
		scope: ['entity.name.function'],
		settings: {
			foreground: getColorLevel('blue', -1),
		},
	},
	{
		name: 'Comment',
		scope: ['comment'],
		settings: {
			foreground: '#7272729d',
		},
	},
	{
		name: 'Keywords',
		scope: ['keyword'],
		settings: {
			foreground: getColorLevel('green', 0),
		},
	},
	{
		name: 'Keywords',
		scope: ['keyword.control.flow'],
		settings: {
			foreground: getColorLevel('yellow', 2),
		},
	},
	{
		name: 'Keywords',
		scope: ['keyword.control.loop'],
		settings: {
			foreground: getColorLevel('green', 1),
		},
	},
	{
		name: 'Keywords',
		scope: ['keyword.control.conditional'],
		settings: {
			foreground: getColorLevel('green', -2),
		},
	},
	{
		name: 'Constants',
		scope: ['constant'],
		settings: {
			foreground: '#FFE792',
		},
	},
	{
		name: 'Numeric',
		scope: ['constant.numeric'],
		settings: {
			foreground: '#DC9656',
		},
	},
	{
		name: 'Array literal',
		scope: ['meta.array.literal variable'],
		settings: {
			foreground: '#e9ff88',
		},
	},
	{
		name: 'Tags',
		scope: [
			// 'entity.name.tag.template.html',
			'punctuation.definition.tag',
			'punctuation.definition.tag',

			// 'entity.name.tag.block.any.html',
			// 'entity.name.tag.js.jsx',
			// 'entity.name.tag.script.html',
			// 'entity.name.tag.html',
			'entity.name.tag',
		],
		settings: {
			foreground: getColorLevel('blue', 1),
		},
	},
	{
		name: 'HTML attributes',
		scope: ['entity.other.attribute-name'],
		settings: {
			foreground: getColorLevel('teal', -2),
		},
	},
	{
		name: 'Object key',
		scope: ['meta.object-literal.key'],
		settings: {
			foreground: getColorLevel('teal', 2),
		},
	},
	{
		name: 'Types',
		scope: ['entity.name.type'],
		settings: {
			foreground: getColorLevel('yellow', 2),
		},
	},
	{
		name: 'Type parameter',
		scope: ['meta.type.parameters entity.name.type'],
		settings: {
			foreground: getColorLevel('purple', 1),
		},
	},
	{
		name: 'Vue punctuation : @',
		scope: ['punctuation.separator.key-value.html'],
		settings: {
			foreground: '#0FE481',
		},
	},
];

export default theme;
