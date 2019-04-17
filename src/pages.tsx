import { SettingsPageProps } from './components/SettingsPage';

export const pages: SettingsPageProps[] = [{
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	navigationOptions: {
		title: 'Appearance',
		// drawerLockMode: 'locked-open',
	},

	items: [{
		component: 'ThemeSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-1',
		title: 'Theme',
	}, {
		component: 'LocalizationSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-2',
		title: 'Theme',
	}],
}, {
	name: 'AboutSettingsPage',
	path: 'about',

	navigationOptions: {
		title: 'About',
	}
} as any];
