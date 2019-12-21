import { VERSION } from './version';
import { components } from './components';
import { createPlugin } from '@bluebase/core';
import { defaultConfigs } from './configs';
import { lang } from './lang';
import { layouts } from './layouts';
import { routes } from './routes';
import { settings } from './settings';
export { SettingsPageProps } from './layouts/SettingsPage';
export { createSettingsRoutes } from './lib';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'Settings',
	version: VERSION,

	icon: {
		component: 'SettingsAppIcon',
		type: 'component',
	},

	defaultConfigs,

	components: {
		...components,
		...settings,
		...layouts,
	},

	indexRoute: 'SettingsApp',

	routes,

	filters: {
		...lang,
	},
});
