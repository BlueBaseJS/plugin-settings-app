import { RouteConfig } from '@bluebase/components';
import { getComponent } from '@bluebase/core';
import get from 'lodash.get';
import React from 'react';

import { SettingsPageProps } from '../layouts/SettingsPage';
import { SettingsPageListProps } from '../layouts/SettingsPageList';
import { CreateSettingsRoutesOptions } from './createSettingsRoutes';

const SettingsPageList = getComponent<SettingsPageListProps>('SettingsPageList');
const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileRoutes = ({
	mainRoute: route,
	pages,
	filter,
}: CreateSettingsRoutesOptions): RouteConfig[] => {
	return [
		// Index Route
		{
			...route,
			exact: true,
			screen: (props: any) => (
				<SettingsPageList filter={filter} name={route.name} pages={pages} {...props} />
			),
		},

		// Sub routes
		...pages.map(page => ({
			...page,
			exact: true,
			path: `${get(route, 'path', '').replace(/\/$/, '')}/${get(page, 'path', '')}`,
			screen: (props: any) => <SettingsPageMobile filter={filter} items={page.items} {...props} />,
		})),
	];
};
