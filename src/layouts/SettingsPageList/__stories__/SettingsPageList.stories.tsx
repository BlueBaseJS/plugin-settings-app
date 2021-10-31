import storiesOf from '@bluebase/storybook-addon';
import React from 'react';

import { SettingsPageProps } from '../../SettingsPage';
import { SettingsPageList } from '../SettingsPageList';

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
];

storiesOf('Layouts / SettingsPageList', module).add('SettingsPageList', () => (
	<SettingsPageList name="test" pages={pages} />
));
