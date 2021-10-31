import { RouteConfig } from '@bluebase/components';
import get from 'lodash.get';
import React from 'react';

import { SettingsLayoutDesktop } from '../layouts/SettingsLayoutDesktop';
import { CreateSettingsRoutesOptions } from './createSettingsRoutes';

export const createDesktopRoutes = ({
	mainRoute,
	pages,
	filter,
}: CreateSettingsRoutesOptions): RouteConfig[] => {
	return [
		// Sub routes
		...pages.map(page => ({
			...page,
			options: mainRoute.options,
			path: `${get(mainRoute, 'path', '').replace(/\/$/, '')}/${get(page, 'path', '')}`,
			screen: (props: any) => (
				<SettingsLayoutDesktop
					filter={filter}
					items={page.items}
					pages={pages}
					page={page.name}
					mainRoute={mainRoute}
					{...props}
				/>
			),
		})),

		// Index Route
		{
			...mainRoute,
			exact: true,
			screen: (props: any) => (
				<SettingsLayoutDesktop
					filter={filter}
					pages={pages}
					mainRoute={mainRoute}
					{...pages[0]}
					page={pages[0].name}
					{...props}
				/>
			),
		},
	];
};
