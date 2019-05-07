import { components } from './components';
import { createPlugin } from '@bluebase/core';
import { defaultConfigs } from './configs';
import { lang } from './lang';
import { layouts } from './layouts';
import { routes } from './routes';

export { SettingsPageProps } from './layouts/SettingsPage';
export { createSettingsRoutes } from './lib';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'Settings',
	version: '1.0.0',

	icon: {
		component: 'SettingsAppIcon',
		type: 'component',
	},

	defaultConfigs,

	components: {
		...components,
		...layouts,
	},

	routes,

	filters: {
		...lang,
	}
});
