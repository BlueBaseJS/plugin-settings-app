import { H6, Noop } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import DarkModeSetting from '../../../settings/DarkModeSetting';
import ThemeSelectionSetting from '../../../settings/ThemeSelectionSetting';
import { SettingsPageItemDesktop } from '../../SettingsPageItem';
import SettingsPageDesktop from '../SettingsPageDesktop';

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
				<SettingsPageDesktop {...item} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageDesktop);

		expect(wrapper.find(H6).text()).toBe('Appearance');
		expect(wrapper.find(SettingsPageItemDesktop)).toHaveLength(2);
	});
});
