import { Noop } from '@bluebase/components';

import { BlueBaseApp } from '@bluebase/core';
import DarkModeSetting from '../../../settings/DarkModeSetting';
import React from 'react';
import SettingsPageDesktop from '../SettingsPageDesktop';
import { SettingsPageItemDesktop } from '../../SettingsPageItem';
import ThemeSelectionSetting from '../../../settings/ThemeSelectionSetting';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const item = {
	name: 'AppearanceSettingsPage',
	path: 'appearance',

	items: [
		{
			component: DarkModeSetting,
			description: 'All your theme related settings reside here.',
			name: 'theme-settings-1',
			title: 'Theme',
		},
		{
			component: ThemeSelectionSetting,
			description: 'Select you language settings here',
			name: 'theme-settings-2',
			title: 'Localization',
		},
	],

	options: {
		title: 'Appearance',
	},
};

describe('SettingsPageDesktop', () => {
	it('should return SettingsPageDesktop', async () => {
		const wrapper = mount(
			<BlueBaseApp components={{ Card: Noop, Divider: Noop, Dialog: Noop, ListItem: Noop }}>
				<SettingsPageDesktop title="settings" {...item} isMobile={false} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageDesktop);

		expect(wrapper.find(SettingsPageItemDesktop)).toHaveLength(2);
	});
});
