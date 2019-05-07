import { SettingsPageDesktop, SettingsPageMobile } from './layout/SettingsPage';
import { SettingsPageItemDesktop, SettingsPageItemMobile } from './layout/SettingsPageItem';
import { AboutSettingsList } from './components/AboutSettingsList';
import { DirectionPicker } from './components/DirectionPicker';
import { LanguageSetting } from './components/LanguageSetting';
import { LocalePicker } from './components/LocalePicker';
import { LocalizationSettingsList } from './components/LocalizationSettingsList';
import { SettingsAppIcon } from './components/SettingsAppIcon';
import { SettingsPageList } from './layout/SettingsPageList';
import { TextDirectionSetting } from './components/TextDirectionSetting';
import { ThemeDarkModeSwitch } from './components/ThemeDarkModeSwitch';
import { ThemePicker } from './components/ThemePicker';
import { ThemeSelectionSetting } from './components/ThemeSelectionSetting';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createPlugin } from '@bluebase/core';
import { createSettingsRoutes } from './routes';
import { defaultConfigs } from './configs';
import { lang } from './lang';
import { pages } from './pages';

export { createSettingsRoutes } from './routes';

export default createPlugin({
	description: 'A settings app for the BlueBase framework!',
	key: 'settings',
	name: 'Settings',
	version: '1.0.0',

	icon: {
		component: 'SettingsAppIcon',
		type: 'component',
	},

	defaultConfigs,

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
		...lang,
	}
});
