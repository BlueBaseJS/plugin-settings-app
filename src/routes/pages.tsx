import { SettingsPageProps } from '../layouts/SettingsPage';

export const pages: SettingsPageProps[] = [
	{
		name: 'GeneralSettingsPage',
		path: 'general',

		navigationOptions: {
			drawerIcon: { type: 'icon', name: 'settings' },
			title: 'General',
		},

		items: [
			{
				component: 'ThemeSettingsList',
				description: 'All your theme related settings reside here.',
				name: 'theme-settings',
				title: 'Appearance',
			},
			{
				component: 'LocalizationSettingsList',
				description: 'Change your language settings here',
				name: 'language-settings',
				title: 'Language',
			},
		],
	},
	{
		name: 'AboutSettingsPage',
		path: 'about',

		navigationOptions: {
			drawerIcon: { type: 'icon', name: 'information' },
			title: 'About',
		},

		items: [
			{
				component: 'AboutList',
				title: 'About',
			},
			{
				component: 'SupportSettingList',
				title: 'Support',
			},
			{
				component: 'TermSettingList',
				name: 'Privacy and Terms',
				title: 'Privacy and Terms',
			},
		],
	} as any,
];
