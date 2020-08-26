import { BlueBaseApp, getComponent } from '@bluebase/core';

import BlueBaseJsonSchemaPlugin from '@bluebase/plugin-json-schema-components';
// import { HeaderTitle } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const SettingsPageDesktop = getComponent('SettingsPageDesktop');
const SettingsPageMobile = getComponent('SettingsPageMobile');

jest.mock('react-native/Libraries/Utilities/Platform', () => {
	const Platform = require.requireActual('react-native/Libraries/Utilities/Platform');
	Platform.OS = 'ios';
	return Platform;
});

jest.mock('expo', () => {});
describe('SettingsPageDesktop', () => {
	const item = {
		name: 'AppearanceSettingsPage',
		path: 'appearance',

		items: [
			{
				component: 'DarkModeSetting',
				description: 'All your theme related settings reside here.',
				name: 'theme-settings-1',
				title: 'Theme',
			},
			{
				component: 'ThemeSelectionSetting',
				description: 'Select you language settings here',
				name: 'theme-settings-2',
				title: 'Localization',
			},
		],

		navigationOptions: {
			title: 'Appearance',
		},
	};

	const items = {
		name: 'AppearanceSettingsPage',
		path: 'appearance',

		items: [
			{
				component: 'AppearanceSettingList',
				description: 'All your theme related settings reside here.',
				name: 'theme-settings-1',
				title: 'Theme',
			},
			{
				component: 'LanguageSettingList',
				description: 'Select you language settings here',
				name: 'theme-settings-2',
				title: 'Localization',
			},
		],
	};

	it('should return SettingsPageDesktop', async () => {
		// mount componentz
		require('../../../components/index.web.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageDesktop title="settings" {...item} isMobile={false} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'FormattedMessage');
		expect(
			wrapper
				.find('FormattedMessage')
				.first()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		// mount componentz
		require('../../../components/index.web.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageDesktop title="settings" {...item} isMobile={false} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'FormattedMessage');
		expect(
			wrapper
				.find('FormattedMessage')
				.first()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		// mount componentz
		require('../../../components/index.web.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageDesktop
					title="settings"
					filter="settings"
					{...item}
					navigationOptions={{ title: 'title', headerTitle: 'settings' }}
					isMobile={false}
				/>
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'FormattedMessage');

		expect(
			wrapper
				.find('FormattedMessage')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		// mount componentz
		require('../../../components/index.web.ts');
		require('../index.ts');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI, BlueBaseJsonSchemaPlugin]}>
				<SettingsPageDesktop title="settings" filter="settings" {...items} isMobile={false} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'FormattedMessage');

		expect(
			wrapper
				.find('FormattedMessage')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		require('../../../createSettingsRoutes/createDesktopNavigator');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageMobile />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SafeAreaView');
		const placeGridInstance: any = wrapper
			.find('SettingsPageMobile')
			.last()
			.instance();
		placeGridInstance.renderLayout([{ title: 'string' }]);

		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsMobileDesktop', async () => {
		// mount componentz
		require('../../../createSettingsRoutes/createDesktopNavigator');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageMobile filter={'filter'} items={[]} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SafeAreaView');
		const placeGridInstance: any = wrapper
			.find('SettingsPageMobile')
			.last()
			.instance();
		placeGridInstance.renderLayout([{ title: 'string' }]);

		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});

	it('should return SettingsPageDesktop', async () => {
		// mount componentz
		require('../../../createSettingsRoutes/createDesktopNavigator');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsPageMobile filter={'filter'} items={[]} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SafeAreaView');
		const placeGridInstance: any = wrapper
			.find('SettingsPageMobile')
			.last()
			.instance();
		placeGridInstance.renderLayout([{ title: 'string' }]);
		expect(
			wrapper
				.find('View')
				.last()
				.prop('children')
		).toBeDefined();
	});
});
