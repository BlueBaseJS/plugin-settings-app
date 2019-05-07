import { SettingsPageDesktop, SettingsPageMobile } from './layout/SettingsPage';
import { SettingsPageItemDesktop, SettingsPageItemMobile } from './layout/SettingsPageItem';
import { AboutSettingsList } from './components/AboutSettingsList';
import { DarkModeSetting } from './components/DarkModeSetting';
import { DarkModeSwitch } from './components/DarkModeSwitch';
import { LanguageSetting } from './components/LanguageSetting';
import { LocalizationSettingsList } from './components/LocalizationSettingsList';
import { SettingsAppIcon } from './components/SettingsAppIcon';
import { SettingsPageList } from './layout/SettingsPageList';
import { TextDirectionSetting } from './components/TextDirectionSetting';
import { ThemeSelectionSetting } from './components/ThemeSelectionSetting';
import { ThemeSettingsList } from './components/ThemeSettingsList';
import { createPlugin, BlueBase } from '@bluebase/core';
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
		DarkModeSetting,
		DarkModeSwitch,
		LanguageSetting,
		LocalizationSettingsList,
		TextDirectionSetting,
		ThemeSelectionSetting,
		ThemeSettingsList,
	},

	routes: async (BB: BlueBase) => {

		return createSettingsRoutes(
			{
				filter: 'bluebase.plugin.setting-app',
				pages: await BB.Filters.run('bluebase.plugin.setting-app.pages', pages),

				mainRoute: {
					name: 'SettingsApp',
					path: '',

					navigationOptions: {
						title: 'Settings',
					}
				},
			}
		);
	},

	filters: {
		...lang,
	}
});
