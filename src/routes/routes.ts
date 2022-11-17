import { RouteConfig } from '@bluebase/components';
import { RouteOptions } from '@bluebase/core';

import { createSettingsRoutes } from '../lib';
import { pages } from './pages';

export const routes = async ({ BB, intl }: RouteOptions): Promise<RouteConfig[]> => {
	return [
		...createSettingsRoutes({
			filter: 'bluebase.plugin.setting-app',
			pages: await BB.Filters.run('bluebase.plugin.setting-app.pages', pages),

			mainRoute: {
				name: 'SettingsApp',
				path: 'settings',

				options: {
					title: intl.__('Settings'),
				},
			},
		}),
	];
};
