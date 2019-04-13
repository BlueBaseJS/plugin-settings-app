import { SettingsPage, SettingsPageDesktop, SettingsPageMobile } from './components/SettingsPage';
import { SettingsPageItem, SettingsPageItemDesktop, SettingsPageItemMobile } from './components/SettingsPageItem';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createPlugin } from '@bluebase/core';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: '@bluebase/plugin-settings-app',
	name: 'BlueBase Settings App',
	version: '1.0.0',

	components: {
		SettingsPage,
		SettingsPageDesktop,
		SettingsPageItem,
		SettingsPageItemDesktop,
		SettingsPageItemMobile,
		SettingsPageMobile,
		ThemeDarkModeSwitch,
		ThemePicker,
		ThemeSettingsList,
	}
});
