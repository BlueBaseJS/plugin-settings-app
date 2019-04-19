import { IntlMessages, createPlugin } from '@bluebase/core';
import { SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
import { DirectionPicker } from './components/DirectionPicker';
import { LocalePicker } from './components/LocalePicker';
import { LocalizationSettingsList } from './components/LocalizationSettingsList';
import { SettingsAppIcon } from './components/SettingsAppIcon';
import { SettingsPageList } from './components/SettingsPageList';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createSettingsRoutes } from './createSettingsRoutes';
import { pages } from './pages';
// import { isMobile } from './isMobile';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'Settings',
	version: '1.0.0',

	icon: {
		component: 'SettingsAppIcon',
		type: 'component',
	},

	defaultConfigs: {

		/** Enable appearnace page */
		'plugin.settings-app.appearance': false,

		/** Enable theme section, on appearnace page */
		'plugin.settings-app.appearance.theme': false,

		/** Enable dark mode setting in theme section, on appearnace page */
		'plugin.settings-app.appearance.theme.dark-mode': false,

		/** Enable theme selection setting in theme section, on appearnace page */
		'plugin.settings-app.appearance.theme.selection': false,

		/** Enable appearnace page */
		'plugin.settings-app.language': false,

		/** Enable language section, on language page */
		'plugin.settings-app.language.language': false,

		/** Enable writing direction setting in language section, on language page */
		'plugin.settings-app.language.language.writing-direction': false,

		/** Enable language selection setting in language section, on language page */
		'plugin.settings-app.language.language.selection': false,

		/** Enable appearnace page */
		'plugin.settings-app.about': false,
	},

	components: {
		// HomeScreen,

		// Core components
		SettingsAppIcon,
		SettingsPageDesktop,
		SettingsPageItemDesktop,
		SettingsPageItemMobile,
		SettingsPageList,
		SettingsPageMobile,

		// Addons 
		DirectionPicker,
		LocalePicker,
		LocalizationSettingsList,
		ThemeDarkModeSwitch,
		ThemePicker,
		ThemeSettingsList,
	},

	routes: (_BB) => {

		// console.log('yayy', BB);

		return createSettingsRoutes(pages, {
			name: 'SettingsApp',
			path: '',

			navigationOptions: {
				title: 'My App Settings',
			}
		});
	},

	filters: {
		'bluebase.intl.messages.ur': (messages: IntlMessages) => ({
			...messages,
			'Language': 'زبان',
			'You can change the app\'s default language from here': 'آپ یہاں سے اے پی پی کی ڈیفالٹ زبان تبدیل کر سکتے ہیں',
		})
	}
});
