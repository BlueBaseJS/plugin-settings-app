import { RouteConfig } from '@bluebase/components';
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
			path: `${(mainRoute.path || '').replace(/\/$/, '')}/${page.path || ''}`,
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
