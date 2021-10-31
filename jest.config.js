const configs = require('@bluebase/code-standards/jest.config');

const modules = [
	'@unimodules/.*',
	'@react-native/.*',
	'expo',
	'react-native',
	'react-router-native',
	'react-navigation-stack',
	'react-navigation',
	'react-native-gesture-handler',
	'rn-placeholder',
	'react-native-modal-datetime-picker',
	'unimodules-permissions-interface',
	'@react-native-community/datetimepicker',
].join('|');

module.exports = Object.assign(configs, {
	transformIgnorePatterns: [`/node_modules/(?!${modules})`],
	setupFilesAfterEnv: ['<rootDir>/tests/setup.ts'],
});
