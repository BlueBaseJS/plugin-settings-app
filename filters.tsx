import { List } from '@bluebase/components';
import React from 'react';

import { SettingsPageProps } from './src';

export const filters = {
	'bluebase.plugin.setting-app.pages': [
		{
			key: 'bluebase-settings-main-app-management',
			priority: 20,

			value: (pages: SettingsPageProps[]) => {
				const indexOfAbout = pages.findIndex(p => p.name === 'About');

				const result = [...pages];
				result.splice(indexOfAbout, 0, {
					name: 'AccountSettings',
					path: 'account',

					browserParams: { windowFeatures: { width: 800 } },
					url: 'https://blueeast.com',

					options: {
						drawerIcon: { type: 'icon', name: 'account' },

						title: 'Account',
					},
				} as any);

				return result;
				// return [
				// 	...pages,
				// 	// {
				// 	// 	name: 'AccountSettings',
				// 	// 	path: 'account',
				// 	// 	right: <Icon name="open-in-new" />,

				// 	// 	options: {
				// 	// 		drawerIcon: { type: 'icon', name: 'account' },

				// 	// 		title: 'Account',
				// 	// 	},
				// 	// },
				// 	,
				// ];
			},
		},
	],

	'SettingsApp.settings.list.items': [
		{
			key: 'bluebase-settings-list-items',
			priority: 20,

			value: (items: any[]) => {
				const Logout = () => (
					<List.Item title="Logout" left={<List.Icon name="logout" />} onPress={() => {}} />
				);

				return [...items, { Component: Logout, key: 'logout' }];
			},
		},
	],
};
