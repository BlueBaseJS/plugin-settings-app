import { SettingsPageProps } from './layout/SettingsPage';

export const pages: SettingsPageProps[] = [{
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	navigationOptions: {
		drawerIcon: { type: 'icon', name: 'brush' },
		title: 'Appearance',
	},

	items: [
		{
			component: 'ThemeSettingsList',
			description: 'All your theme related settings reside here.',
			name: 'theme-settings-1',
			title: 'Theme',
		}
	],
}, {
	name: 'LanguageSettingsPage',
	path: 'language',

	navigationOptions: {
		drawerIcon: { type: 'icon', name: 'translate' },
		title: 'Language',
	},

	items: [
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
