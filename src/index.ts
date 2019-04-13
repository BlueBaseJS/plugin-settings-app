import { SettingsPage, SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItem, SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
import { HomeScreen } from './HomeScreen';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createPlugin } from '@bluebase/core';
import { getRoutes } from './routes';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'BlueBase Settings App',
	version: '1.0.0',

	components: {
		HomeScreen,
		SettingsPage,
		SettingsPageDesktop,
		SettingsPageItem,
		SettingsPageItemDesktop,
		SettingsPageItemMobile,
		SettingsPageMobile,
		ThemeDarkModeSwitch,
		ThemePicker,
		ThemeSettingsList,
	},

	routes: getRoutes
});
