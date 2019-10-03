import { SettingsPageProps } from '../layouts/SettingsPage';

export const pages: SettingsPageProps[] = [{
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
		}
	],
}, {
	name: 'AboutSettingsPage',
	path: 'about',

	navigationOptions: {
		drawerIcon: { type: 'icon', name: 'information' },
		title: 'About',
	},

	items: [
		{
			component: 'AboutSettingsList',
			name: 'about-app',
			title: 'App Information',
		},
		{
			component: 'SupportSettingList',
			description: 'View support and/or contact details',
			name: 'Contact or support',
			title: 'Support',
		},
		{
			component: 'TermSettingList',
			description: 'View Terms and conditions',
			name: 'Terms and Conditions',
			title: 'Terms',
		},
		{
			component: 'PrivacySettingList',
			description: 'View Privacy settings',
			name: 'Privacy',
			title: 'Privacy',
		},

	],
} as any];
