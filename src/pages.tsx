import { SettingsPageProps } from './components/SettingsPage';

export const pages: SettingsPageProps[] = [{
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	navigationOptions: {
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
		title: 'About',
	}
} as any];
