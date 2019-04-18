import { NavigatorProps, RouteConfig } from '@bluebase/components';
import React from 'react';
import { SettingsPageListProps } from '../components/SettingsPageList';
import { SettingsPageProps } from '../components/SettingsPage';
import { getComponent } from '@bluebase/core';

const SettingsPageList = getComponent<SettingsPageListProps>('SettingsPageList');
const SettingsPageMobile = getComponent<SettingsPageProps>('SettingsPageMobile');

export const createMobileNavigator = (
	pages: SettingsPageProps[],

	route: RouteConfig
): NavigatorProps => {

	const indexPage: RouteConfig = {
		...route,
		exact: true,
		screen: (props: any) => <SettingsPageList pages={pages} {...props} />,
	};
	const routes = (pages || []).map(page => ({
		...page,
		exact: true,
		screen: (props: any) => <SettingsPageMobile items={page.items} {...props} />,

	}));

	return {
		type: 'stack',

		routes: [
			indexPage,
			...routes
		],
	};

};
