import { Icon } from '@bluebase/components';
import React from 'react';
import { SettingsPageProps } from '../../src';

export const filters = {
	'bluebase.plugin.setting-app.pages': [
		{
			key: 'bluebase-settings-main-app-management',
			priority: 20,

			value: (pages: SettingsPageProps[]) => [
				...pages,
				{
					name: 'AccountSettings',
					path: 'account',
					right: <Icon name="open-in-new" />,

					options: {
						drawerIcon: { type: 'icon', name: 'account' },

						title: 'Account',
					},
				},
			],
		},
	],
};
