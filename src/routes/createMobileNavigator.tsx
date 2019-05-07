import React from 'react';
import { RouteConfig } from '@bluebase/components';
import { SettingsPageListProps } from '../layout/SettingsPageList';
import { SettingsPageProps } from '../layout/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageList = getComponent<SettingsPageListProps>('SettingsPageList');
const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileRoutes = (
	route: RouteConfig,

	pages: SettingsPageProps[] = [],
): RouteConfig[] => {

	return [
		// Index Route
		{
			...route,
			exact: true,
			screen: (props: any) => <SettingsPageList name={route.name} pages={pages} {...props} />
		},

		// Sub routes
		...pages.map(page => ({
			...page,
			exact: true,
			screen: (props: any) => <SettingsPageMobile items={page.items} {...props} />,
		}))
	];

};
