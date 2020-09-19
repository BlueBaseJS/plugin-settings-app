// tslint:disable:no-console
import React from 'react';
import { SettingsPageProps } from '../';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

// const SettingsPage = getComponent('SettingsPage');
const SettingsPageDesktop = getComponent('SettingsPageDesktop');
const SettingsPageMobile = getComponent('SettingsPageMobile');

const item: SettingsPageProps = {
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	items: [
		{
			component: 'ThemeSettingsList',
			description: 'All your theme related settings reside here.',
			name: 'theme-settings-1',
			title: 'Theme',
		},
		{
			component: 'LocalizationSettingsList',
			description: 'Select you language settings here',
			name: 'theme-settings-2',
			title: 'Localization',
		},
	],

	options: {
		title: 'Appearance',
	},
};

storiesOf('SettingsPage', module)
	.add('Mobile View', () => <SettingsPageMobile {...item} />)

	.add('Desktop View', () => <SettingsPageDesktop {...item} isMobile={false} />);
