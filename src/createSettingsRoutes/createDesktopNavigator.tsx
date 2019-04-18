import { NavigatorProps, RouteConfig } from '@bluebase/components';
import React from 'react';
import { SettingsPageProps } from '../components/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageDesktop = getComponent<SettingsPageProps>('SettingsPageDesktop');

export const createDesktopNavigator = (
	pages: SettingsPageProps[],

	_route: RouteConfig
): NavigatorProps => {

	const routes = (pages || []).map(page => ({
		...page,
		exact: true,
		screen: (props: any) => <SettingsPageDesktop {...page} {...props} />,

	}));

	return {
		// ...options,
		drawerType: 'slide',
		drawerWidth: 175,
		open: true,
		type: 'drawer',

		routes,
	};

};
