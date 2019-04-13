import React from 'react';
import { getComponent } from '@bluebase/core';

const SettingsPage = getComponent('SettingsPage');

export const getRoutes = () => {

	const items = [{
		component: 'ThemeSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-1',
		title: 'Theme',
	}, {
		component: 'ThemeSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-2',
		title: 'Theme',
	}];

	return [{
		name: 'Settings',
		path: '/',

		navigator: {
			type: 'drawer',

			drawerType: 'slide',

			open: true,

			drawerWidth: 175,

			// contentOptions: {
			// 	activeTintColor: '#e91e63',
			// 	itemsContainerStyle: {
			// 		marginVertical: 0,
			// 	},
			// 	iconContainerStyle: {
			// 		opacity: 1
			// 	}
			// },

			routes: [{
				name: 'AppearanceSettingsPage',
				path: 'appearance',
				exact: true,
				screen: (props: any) => <SettingsPage items={items} {...props} />,
				
				navigationOptions: {
					title: 'Appearance',
					// drawerLockMode: 'locked-open',
				}
			}, {
				name: 'AboutSettingsPage',
				path: 'about',
				exact: true,
				screen: 'HomeScreen',
				navigationOptions: {
					title: 'About',
				}
			}]
		},
		navigationOptions: {
			title: 'Settings Tabs',
		}
	}];
};