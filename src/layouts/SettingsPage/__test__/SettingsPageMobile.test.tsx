import { BlueBaseApp } from '@bluebase/core';
import DarkModeSetting from '../../../settings/DarkModeSetting';
import { Noop } from '@bluebase/components';
import React from 'react';
import { SettingsPageItemMobile } from '../../SettingsPageItem';
import SettingsPageMobile from '../SettingsPageMobile';
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

describe('SettingsPageMobile', () => {
	it('should return SettingsPageMobile', async () => {
		const wrapper = mount(
			<BlueBaseApp
				components={{
					Card: Noop,
					Dialog: Noop,
					Divider: Noop,
					ListItem: Noop,
					ListSubheader: Noop,
				}}
			>
				<SettingsPageMobile title="settings" {...item} isMobile={false} />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageMobile);

		expect(wrapper.find(SettingsPageItemMobile)).toHaveLength(2);
	});
});
