import { IntlMessages, createPlugin } from '@bluebase/core';
import { SettingsPage, SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItem, SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
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
import { isMobile } from './isMobile';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'Settings',
	version: '1.0.0',

	icon: {
		component: 'SettingsAppIcon',
		type: 'component',
	},

	components: {
		// HomeScreen,

		// Core components
		SettingsAppIcon,
		SettingsPage,
		SettingsPageDesktop,
		SettingsPageItem,
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
			name: 'Settings',
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
