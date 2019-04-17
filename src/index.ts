import { IntlMessages, createPlugin } from '@bluebase/core';
import { SettingsPage, SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItem, SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
import { DirectionPicker } from './components/DirectionPicker';
import { HomeScreen } from './HomeScreen';
import { LocalePicker } from './components/LocalePicker';
import { LocalizationSettingsList } from './components/LocalizationSettingsList';
import { SettingsPageList } from './components/SettingsPageList';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createSettingsRoutes } from './createSettingsRoutes';
import { pages } from './pages';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'BlueBase Settings App',
	version: '1.0.0',

	components: {
		DirectionPicker,
		HomeScreen,
		LocalePicker,
		LocalizationSettingsList,
		SettingsPage,
		SettingsPageDesktop,
		SettingsPageItem,
		SettingsPageItemDesktop,
		SettingsPageItemMobile,
		SettingsPageList,
		SettingsPageMobile,
		ThemeDarkModeSwitch,
		ThemePicker,
		ThemeSettingsList,
	},

	routes: [
		...createSettingsRoutes(pages, {
			name: 'Settings',
			path: '',

			navigationOptions: {
				title: 'My App Settings',
			}
		})
	],

	filters: {
		'bluebase.intl.messages.ur': (messages: IntlMessages) => ({
			...messages,
			'Language': 'زبان',
			'You can change the app\'s default language from here': 'آپ یہاں سے اے پی پی کی ڈیفالٹ زبان تبدیل کر سکتے ہیں',
		})
	}
});
