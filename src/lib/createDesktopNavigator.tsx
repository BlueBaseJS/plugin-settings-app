import { CreateSettingsRoutesOptions } from './createSettingsRoutes';
import React from 'react';
import { RouteConfig } from '@bluebase/components';
import { SettingsLayoutDesktop } from '../layouts/SettingsLayoutDesktop';
import get from 'lodash.get';

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
	];
};
