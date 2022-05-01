import { createPlugin } from '@bluebase/core';

import { components } from './components';
import { defaultConfigs } from './configs';
import { lang } from './lang';
import { layouts } from './layouts';
import { createSettingsRoutes } from './lib';
import { navigation } from './navigation';
import { routes } from './routes';
import { settings } from './settings';
import { VERSION } from './version';
export * from './components/exports';
export { SettingsPageProps } from './layouts/SettingsPage';
export { createSettingsRoutes };

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
		...navigation,
	},
});
