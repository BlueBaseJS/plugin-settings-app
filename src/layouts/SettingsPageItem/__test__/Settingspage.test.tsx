import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src';
import React from 'react';
import { SettingsPageItemMobile } from '../SettingsPageItemMobile';
import { getComponent } from '@bluebase/core';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
jest.mock('expo', () => {});

const SettingsPageItemDesktop = getComponent('SettingsPageItemDesktop');
describe('SettingsPageDesktop', () => {
	const item = {
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

		navigationOptions: {
			title: 'Appearance',
		},
	};

	it('should return SettingsPageDesktop', async () => {
		// mount components
		require('../../index.ts');
		require('../../index.web.ts');
		// require('../../../lang/ur.ts');
		// require('../../../lang/ur-roman.ts');
		require('../../../lang/index.web.ts');
		require('../../../lang/index.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemDesktop
					description="settings"
					title="settings"
					component="View"
					{...item}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('Card')
				.first()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		// mount components

		require('../../index.ts');
		require('../../index.web.ts');
		require('../../../lang/ur.ts');
		require('../../../lang/ur-roman.ts');
		require('../../../lang/index.web.ts');
		require('../../../lang/index.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemDesktop {...item} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		jest.mock('react-native/Libraries/Utilities/Platform', () => {
			const Platform = require.requireActual('react-native/Libraries/Utilities/Platform');
			Platform.OS = 'android';
			return Platform;
		});

		// Platform.OS = 'web';
		require('../../index.ts');
		require('../../index.web.ts');
		require('../../../lang/ur.ts');
		require('../../../lang/ur-roman.ts');
		require('../../../lang/index.web.ts');
		require('../../../lang/index.ts');
		require('../index.ts');
		// ur({ title: 'string' });
		// roman({ title: 'string' });
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemDesktop {...item} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemMobile component="View" {...item} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});
	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemMobile {...item} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemMobile
					description="settings"
					title="settings"
					component="View"
					{...item}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemMobile description="settings" {...item} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageItemDesktop
					description="settings"
					title="settings"
					component="View"
					{...item}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'View');
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});
});
