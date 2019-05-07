import { IntlMessages, createPlugin } from '@bluebase/core';
import { SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
import { AboutSettingsList } from './components/AboutSettingsList';
import { DirectionPicker } from './components/DirectionPicker';
import { LanguageSetting } from './components/LanguageSetting';
import { LocalePicker } from './components/LocalePicker';
import { LocalizationSettingsList } from './components/LocalizationSettingsList';
import { SettingsAppIcon } from './components/SettingsAppIcon';
import { SettingsPageList } from './components/SettingsPageList';
import { TextDirectionSetting } from './components/TextDirectionSetting';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSelectionSetting } from './components/ThemeSelectionSetting';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createSettingsRoutes } from './createSettingsRoutes';
import { pages } from './pages';

export { createSettingsRoutes } from './createSettingsRoutes';

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
		'plugin.settings-app.appearance.theme.dark-mode': true,

		/** Enable theme selection setting in theme section, on appearnace page */
		'plugin.settings-app.appearance.theme.selection': false,

		/** Enable appearnace page */
		'plugin.settings-app.language': false,

		/** Enable language section, on language page */
		'plugin.settings-app.language.language': false,

		/** Enable text direction setting in language section, on language page */
		'plugin.settings-app.language.language.text-direction': true,

		/** Enable language selection setting in language section, on language page */
		'plugin.settings-app.language.language.selection': true,

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
		AboutSettingsList,
		DirectionPicker,
		LanguageSetting,
		LocalePicker,
		LocalizationSettingsList,
		TextDirectionSetting,
		ThemeDarkModeSwitch,
		ThemePicker,
		ThemeSelectionSetting,
		ThemeSettingsList,
	},

	routes: (_BB) => {

		// console.log('yayy', BB);

		return createSettingsRoutes({
			name: 'SettingsApp',
			path: '',

			navigationOptions: {
				title: 'My App Settings',
			}
		}, pages);
	},

	filters: {
		'bluebase.intl.messages.ur': (messages: IntlMessages) => ({
			...messages,
			'Auto': 'آٹو',
			'Available Themes': 'دستیاب موضوعات',
			'BlueBase Dark': 'بلیو بیز ڈارک',
			'BlueBase Light': 'بلیو بیس لائٹ',
			'Developed by': 'کی طرف سے تیار',
			'Language': 'زبان',
			'Left to Right': 'بائیں سے دائیں',
			'Right to Left': 'دائیں سے بائیں',
			'Text Direction': 'متن کی سمت',
			'Text Direction will automatically changed based on selected language.': 'متن کی سمت منتخب کردہ زبان کی بنیاد پر خود بخود تبدیل ہوجائے گی.',
			'Text will be displayed from Left to Right': 'متن بائیں سے دائیں سے دکھایا جائے گا',
			'Text will be displayed from Right to Left': 'متن دائیں بائیں سے دکھایا جائے گا',
			'Theme': 'خیالیہ',
			'Version': 'ورژن',
		})
	}
});
