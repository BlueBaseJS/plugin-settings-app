import { NavigatorProps } from '@bluebase/components';
import React from 'react';
import { SettingsPageProps } from '../layouts/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageDesktop = getComponent<SettingsPageProps>('SettingsPageDesktop');

export const createDesktopNavigator = ({ pages }: { pages: SettingsPageProps[] }): NavigatorProps => {

	return {
		drawerType: 'slide',
		drawerWidth: 225,
		open: true,
		type: 'drawer',

		routes: pages.map(page => ({
			...page,
			exact: true,
			screen: (props: any) => <SettingsPageDesktop {...page} {...props} />,
		})),
	};

};