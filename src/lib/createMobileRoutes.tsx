import { RouteConfig } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import React from 'react';

import { SettingsPageProps } from '../layouts/SettingsPage';
import { SettingsScreen } from '../layouts/SettingsScreen';
import { CreateSettingsRoutesOptions } from './createSettingsRoutes';

const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileRoutes = ({
	mainRoute: route,
	pages,
	filter,
}: CreateSettingsRoutesOptions): RouteConfig[] => {
	const Screen = route.screen || SettingsScreen;

	return [
		// Index Route
		{
			...route,
			exact: true,
			screen: (props: any) => (
				<Screen filter={filter} name={route.name} pages={pages} {...props} />
			),
		},

		// Sub routes
		...pages.map(page => ({
			...page,
			exact: true,
			path: `${(route.path || '').replace(/\/$/, '')}/${(page.path || '')}`,
			screen: (props: any) => <SettingsPageMobile filter={filter} items={page.items} {...props} />,
		})),
	];
};
