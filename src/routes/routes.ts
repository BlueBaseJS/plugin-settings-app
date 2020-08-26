import { IntlContextData, RouteOptions } from '@bluebase/core';

import { RouteConfig } from '@bluebase/components';
import { createSettingsRoutes } from '../lib';
import { pages } from './pages';

export const routes = async ({ BB }: RouteOptions): Promise<RouteConfig[]> => {
	return [
		...createSettingsRoutes({
			filter: 'bluebase.plugin.setting-app',
			pages: await BB.Filters.run('bluebase.plugin.setting-app.pages', pages),

			mainRoute: {
				name: 'SettingsApp',
				path: '',

				navigationOptions: (opts: any) => {
					const { __ }: IntlContextData = opts.screenProps.intl;
					return {
						title: __('Settings'),
					};
				},
			},
		}),
	];
};
