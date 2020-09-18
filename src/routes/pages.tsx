import { SettingsPageProps } from '../layouts/SettingsPage';

export const pages: SettingsPageProps[] = [
	{
		name: 'GeneralSettingsPage',
		path: 'general',

		navigationOptions: {
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

		navigationOptions: {
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
