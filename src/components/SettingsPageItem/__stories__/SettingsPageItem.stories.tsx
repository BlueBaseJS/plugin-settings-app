// tslint:disable:no-console
import React from 'react';
import { SettingsPageItemObject } from '../../../typings';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const SettingsPageItem = getComponent('SettingsPageItem');

const item: SettingsPageItemObject = {
	component: 'ThemeSettingsList',
	description: 'All your theme related settings reside here.',
	name: 'theme-settings',
	title: 'Theme',
};

storiesOf('SettingsPageItem', module)

.add('Mobile View', () => (
	<SettingsPageItem {...item} />
))

.add('Mobile View (Multiple)', () => (
	<React.Fragment>
		<SettingsPageItem {...item} />
		<SettingsPageItem {...item} />
	</React.Fragment>
))

.add('Desktop View', () => (
	<SettingsPageItem {...item} isMobile={false} />
))


;
