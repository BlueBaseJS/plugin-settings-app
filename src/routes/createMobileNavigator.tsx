import { CreateSettingsRoutesOptions } from './createSettingsRoutes';
import React from 'react';
import { RouteConfig } from '@bluebase/components';
import { SettingsPageListProps } from '../layout/SettingsPageList';
import { SettingsPageProps } from '../layout/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageList = getComponent<SettingsPageListProps>('SettingsPageList');
const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileRoutes = (
	{ mainRoute: route, pages, filter }: CreateSettingsRoutesOptions
): RouteConfig[] => {

	return [
		// Index Route
		{
			...route,
			exact: true,
			screen: (props: any) => <SettingsPageList filter={filter} name={route.name} pages={pages} {...props} />
		},

		// Sub routes
		...pages.map(page => ({
			...page,
			exact: true,
			screen: (props: any) => <SettingsPageMobile filter={filter} items={page.items} {...props} />,
		}))
	];

};
