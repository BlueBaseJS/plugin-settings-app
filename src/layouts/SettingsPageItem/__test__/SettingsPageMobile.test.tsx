import { Caption, List, Noop } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Text } from 'react-native';

import DarkModeSetting from '../../../settings/DarkModeSetting';
import ThemeSelectionSetting from '../../../settings/ThemeSelectionSetting';
import SettingsPageItemMobile from '../SettingsPageItemMobile';

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

describe('SettingsPageItemMobile', () => {
	it('should return SettingsPageItemMobile', async () => {
		const wrapper = mount(
			<BlueBaseApp
				components={{
					Card: Noop,
					Dialog: Noop,
					Divider: Noop,
					ListItem: Noop,
					ListSubheader: Text,
				}}
			>
				<SettingsPageItemMobile {...item} title="settings" description="desc" component="View" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageItemMobile);

		expect(wrapper.find(List.Subheader).text()).toBe('settings');
		expect(wrapper.find(Caption).text()).toBe('desc');
	});

	it('should return SettingsPageItemMobile without title or description', async () => {
		const wrapper = mount(
			<BlueBaseApp
				components={{
					Card: Noop,
					Dialog: Noop,
					Divider: Noop,
					ListItem: Noop,
					ListSubheader: Text,
				}}
			>
				<SettingsPageItemMobile {...item} component="View" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageItemMobile);

		expect(wrapper.find(List.Subheader).exists()).toBe(false);
		expect(wrapper.find(Caption).exists()).toBe(false);
	});
});
