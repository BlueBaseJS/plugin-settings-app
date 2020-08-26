import { Body1, Body2, Noop } from '@bluebase/components';

import { BlueBaseApp } from '@bluebase/core';
import DarkModeSetting from '../../../settings/DarkModeSetting';
import React from 'react';
import SettingsPageItemDesktop from '../SettingsPageItemDesktop';
import { Text } from 'react-native';
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

	navigationOptions: {
		title: 'Appearance',
	},
};

describe('SettingsPageItemDesktop', () => {
	it('should return SettingsPageItemDesktop', async () => {
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
				<SettingsPageItemDesktop {...item} title="settings" description="desc" component="View" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageItemDesktop);

		expect(wrapper.find(Body1).text()).toBe('settings');
		expect(wrapper.find(Body2).text()).toBe('desc');
	});

	it('should return SettingsPageItemDesktop without title or description', async () => {
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
				<SettingsPageItemDesktop {...item} component="View" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageItemDesktop);

		expect(wrapper.find(Body1).exists()).toBe(false);
		expect(wrapper.find(Body2).exists()).toBe(false);
	});
});
