// tslint:disable:no-console
import React from 'react';
import { SettingsPageItemProps } from '../';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const SettingsPageItem = getComponent('SettingsPageItem');

const item: SettingsPageItemProps = {
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

.add('Desktop View (Multiple)', () => (
	<React.Fragment>
		<SettingsPageItem {...item} isMobile={false} />
		<SettingsPageItem {...item} isMobile={false} />
	</React.Fragment>
))

;
