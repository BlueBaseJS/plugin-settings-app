import { SettingsPageProps } from './layout/SettingsPage';

export const pages: SettingsPageProps[] = [{
	name: 'AppearanceSettingsPage',
	path: 'appearance',

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
			description: 'Add description here',
			name: 'about-app',
			title: 'Title',
		}
	],
} as any];
