// tslint:disable:no-console
import React from 'react';
import { SettingsPageItemProps } from '../';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const SettingsPageItemDesktop = getComponent('SettingsPageItemDesktop');
const SettingsPageItemMobile = getComponent('SettingsPageItemMobile');

const item: SettingsPageItemProps = {
	component: 'AppearanceSettingList',
	description: 'All your theme related settings reside here.',
	name: 'appearance',
	title: 'Appearance',
};

storiesOf('Layouts / SettingsPageItem', module)
	.add('Mobile View', () => <SettingsPageItemMobile {...item} />)

	.add('Mobile View (Multiple)', () => (
		<React.Fragment>
			<SettingsPageItemMobile {...item} />
			<SettingsPageItemMobile {...item} />
		</React.Fragment>
	))

	.add('Desktop View', () => <SettingsPageItemDesktop {...item} isMobile={false} />)

	.add('Desktop View (Multiple)', () => (
		<React.Fragment>
			<SettingsPageItemDesktop {...item} isMobile={false} />
			<SettingsPageItemDesktop {...item} isMobile={false} />
		</React.Fragment>
	));
