import { BlueBase } from '@bluebase/core';
import { createSettingsRoutes } from '../lib';
import { pages } from './pages';

export const routes = async (BB: BlueBase) => {
	return createSettingsRoutes({
		filter: 'bluebase.plugin.setting-app',
		pages: await BB.Filters.run('bluebase.plugin.setting-app.pages', pages),

		mainRoute: {
			name: 'SettingsApp',
			path: '',

			navigationOptions: {
				title: 'Settings',
			},
		},
	});
};
