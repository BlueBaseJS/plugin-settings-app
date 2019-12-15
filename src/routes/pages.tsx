import { IntlContextData } from '@bluebase/core';
import { SettingsPageProps } from '../layouts/SettingsPage';

export const pages: SettingsPageProps[] = [
	{
		name: 'GeneralSettingsPage',
		path: 'general',

		navigationOptions: (opts: any) => {
			const { __ }: IntlContextData = opts.screenProps.intl;
			return {
				drawerIcon: { type: 'icon', name: 'settings' },
				title: __('General'),
			};
		},

		items: [
			{
				component: 'ThemeSettingsList',
				description: 'All your theme related settings reside here.',
				name: 'theme-settings',
				title: 'Appearance',
			},
			{
				component: 'LocalizationSettingsList',
				description: 'Change your language settings here',
				name: 'language-settings',
				title: 'Language',
			},
		],
	},
	{
		name: 'AboutSettingsPage',
		path: 'about',

		navigationOptions: (opts: any) => {
			const { __ }: IntlContextData = opts.screenProps.intl;
			return {
				drawerIcon: { type: 'icon', name: 'information' },
				title: __('About'),
			};
		},

		items: [
			{
				component: 'AboutSettingsList',
				name: 'about-app',
				title: 'App Information',
			},
		],
	},
];
