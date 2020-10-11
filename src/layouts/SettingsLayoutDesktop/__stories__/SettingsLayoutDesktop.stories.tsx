import { Icon } from '@bluebase/components';
import React from 'react';
import { SettingsLayoutDesktop } from '../SettingsLayoutDesktop';
import { SettingsPageProps } from '../../SettingsPage';
import storiesOf from '@bluebase/storybook-addon';

export const pages: SettingsPageProps[] = [
	{
		name: 'GeneralSettingsPage',
		path: 'general',

		options: {
			drawerIcon: { type: 'icon', name: 'cog' },
			title: 'General',
		},

		items: [
			{
				component: 'AppearanceSettingList',
				description: 'All your theme related settings reside here.',
				name: 'appearance',
				title: 'Appearance',
			},
			{
				component: 'LanguageSettingList',
				description: 'Change your language settings here',
				name: 'language',
				title: 'Language',
			},
		],
	},
	{
		name: 'AboutSettingsPage',
		path: 'about',

		options: {
			drawerIcon: { type: 'icon', name: 'information' },
			title: 'About',
		},

		items: [
			{
				component: 'SupportSettingList',
				name: 'support',
				title: 'Support',
			},
			{
				component: 'InformationSettingList',
				name: 'information',
				title: 'Information',
			},
			{
				component: 'LegalSettingList',
				name: 'legal',
				title: 'Legal',
			},
		],
	} as any,

	{
		name: 'AccountSettings',
		path: 'account',
		right: <Icon name="open-in-new" size={20} />,

		options: {
			drawerIcon: { type: 'icon', name: 'account' },

			title: 'Account',
		},
	},
];

storiesOf('Layouts / SettingsLayoutDesktop', module).add('SettingsLayoutDesktop', () => (
	<SettingsLayoutDesktop
		mainRoute={{ name: 'test' } as any}
		pages={pages}
		page="GeneralSettingsPage"
	/>
));
