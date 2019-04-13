// tslint:disable:no-console
import React from 'react';
import { SettingsPageProps } from '../';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const SettingsPage = getComponent('SettingsPage');

const item: SettingsPageProps = {

	name: 'AppearanceSettingsPage',
	path: 'appearance',

	items: [{
		component: 'ThemeSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-1',
		title: 'Theme',
	}, {
		component: 'ThemeSettingsList',
		description: 'All your theme related settings reside here.',
		name: 'theme-settings-2',
		title: 'Theme',
	}],

	navigationOptions: {
		title: 'Appearance'
	}
};

storiesOf('SettingsPage', module)

.add('Mobile View', () => (
	<SettingsPage {...item} />
))


.add('Desktop View', () => (
	<SettingsPage {...item} isMobile={false} />
))

;
