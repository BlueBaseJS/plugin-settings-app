import React from 'react';
import { RouteConfig } from '@bluebase/components';
import { SettingsPageListProps } from '../components/SettingsPageList';
import { SettingsPageProps } from '../components/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageList = getComponent<SettingsPageListProps>('SettingsPageList');
const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileRoutes = (
	pages: SettingsPageProps[] = [],

	route: RouteConfig
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
