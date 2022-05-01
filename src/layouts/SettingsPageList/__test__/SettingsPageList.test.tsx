import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../../src';
import { SettingsPageList } from '../SettingsPageList';

jest.mock('expo-web-browser');

// const pages: any[] = [
// 	{
// 		name: 'GeneralSettingsPage',
// 		path: 'general',

// 		options: {
// 			drawerIcon: { type: 'icon', name: 'cog' },
// 			title: 'General',
// 		},

// 		items: [
// 			{
// 				component: 'AppearanceSettingList',
// 				description: 'All your theme related settings reside here.',
// 				name: 'appearance',
// 				title: 'Appearance',
// 			},
// 			{
// 				component: 'LanguageSettingList',
// 				description: 'Change your language settings here',
// 				name: 'language',
// 				title: 'Language',
// 			},
// 		],
// 	},
// 	{
// 		name: 'AboutSettingsPage',
// 		path: 'about',

// 		options: {
// 			drawerIcon: { type: 'icon', name: 'information' },
// 			title: 'About',
// 		},

// 		items: [
// 			{
// 				component: 'SupportSettingList',
// 				name: 'support',
// 				title: 'Support',
// 			},
// 			{
// 				component: 'InformationSettingList',
// 				name: 'information',
// 				title: 'Information',
// 			},
// 			{
// 				component: 'LegalSettingList',
// 				name: 'legal',
// 				title: 'Legal',
// 			},
// 		],
// 	},
// 	{
// 		browserParams: { windowFeatures: { width: 800 } },
// 		url: 'https://blueeast.com',
// 	},
// ];

describe('SettingsPageList', () => {
	// it('should return SettingsPageList', async () => {
	// 	const customOnPress = jest.fn();
	// 	const navigate = jest.fn();

	// 	const wrapper = mount(
	// 		<BlueBaseApp plugins={[Plugin, MUI]}>
	// 			<NavigationContext.Provider value={{ navigate, state: { params: { foo: 'bar' } } } as any}>
	// 				<SettingsPageList
	// 					name="Test"
	// 					pages={[...pages, { name: 'onPress', onPress: customOnPress, title: 'OnPress' }]}
	// 				/>
	// 			</NavigationContext.Provider>
	// 		</BlueBaseApp>
	// 	);
	// 	await waitForElement(wrapper, 'List');

	// 	expect(wrapper.find(List.Item)).toHaveLength(4);

	// 	// Navigate on Press
	// 	const onNavigate: any = wrapper
	// 		.find(List.Item)
	// 		.at(0)
	// 		.prop('onPress');

	// 	onNavigate();

	// 	expect(navigate).toHaveBeenCalledTimes(1);
	// 	expect(navigate).toHaveBeenLastCalledWith('GeneralSettingsPage', { foo: 'bar' });

	// 	// Fire custom onPress
	// 	const onPressItem: any = wrapper
	// 		.find(List.Item)
	// 		.at(3)
	// 		.prop('onPress');

	// 	onPressItem();

	// 	expect(customOnPress).toHaveBeenCalledTimes(1);

	// 	// Open browser for url items
	// 	const urlItem: any = wrapper
	// 		.find(List.Item)
	// 		.at(2)
	// 		.prop('onPress');

	// 	urlItem();

	// 	expect(openBrowserAsync).toHaveBeenCalledTimes(1);
	// 	expect(openBrowserAsync).toHaveBeenLastCalledWith('https://blueeast.com', {
	// 		windowFeatures: { width: 800 },
	// 	});
	// });
});

it('should return SettingsPageList with Icon name', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin, MUI]}>
			<SettingsPageList
				name="settings"
				pages={[
					{
						options: { drawerIcon: { name: 'domain', type: 'string' } },
						name: 'launcher',
						title: 'Launcher',
						path: '/',
					} as any,
				]}
			/>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, 'List');
	expect(
		wrapper
			.find('List')
			.first()
			.prop('children')
	).toBeDefined();
});

it('should return SettingsPageList with Icon as function', async () => {
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin, MUI]}>
			<SettingsPageList
				name="settings"
				pages={[
					{
						options: { drawerIcon: () => 'domain' },
						name: 'launcher',
						title: 'Launcher',
						path: '/',
					} as any,
				]}
			/>
		</BlueBaseApp>
	);
	await waitForElement(wrapper, 'List');
	expect(
		wrapper
			.find('List')
			.first()
			.prop('children')
	).toBeDefined();
});
