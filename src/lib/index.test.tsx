import { Noop } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React, { createElement } from 'react';
import { View } from 'react-native';

import Plugin from '../';
import { SettingsLayoutDesktop } from '../layouts/SettingsLayoutDesktop';
import { SettingsPageMobile, SettingsPageProps } from '../layouts/SettingsPage';
import { SettingsPageList } from '../layouts/SettingsPageList';
import { createDesktopRoutes } from '.';
import { createMobileRoutes } from './createMobileRoutes';
import { createSettingsRoutes } from './createSettingsRoutes';

export const pages: SettingsPageProps[] = [
	{
		name: 'GeneralSettingsPage',
		path: 'general',

		options: {
			drawerIcon: { type: 'icon', name: 'cog' },
			title: 'General',
		},

		items: [
			{
				component: 'AppearanceSettingList',
				description: 'All your theme related settings reside here.',
				name: 'appearance',
				title: 'Appearance',
			},
			{
				component: 'LanguageSettingList',
				description: 'Change your language settings here',
				name: 'language',
				title: 'Language',
			},
		],
	},
	{
		name: 'AboutSettingsPage',
		path: 'about',

		options: {
			drawerIcon: { type: 'icon', name: 'information' },
			title: 'About',
		},

		items: [
			{
				component: 'SupportSettingList',
				name: 'support',
				title: 'Support',
			},
			{
				component: 'InformationSettingList',
				name: 'information',
				title: 'Information',
			},
			{
				component: 'LegalSettingList',
				name: 'legal',
				title: 'Legal',
			},
		],
	} as any,
];

describe('SettingsPageList', () => {
	it('createMobileRoutes', async () => {
		const mobileRoutes: any = createMobileRoutes({
			mainRoute: { name: 'screen' } as any,
			pages: pages,
		});

		expect(mobileRoutes).toHaveLength(3);

		// First Page
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				{createElement(mobileRoutes[0].screen)}
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsPageList);
		expect(wrapper.find(SettingsPageList).exists()).toBe(true);

		// Detail Page
		const wrapper2 = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				{createElement(mobileRoutes[1].screen)}
			</BlueBaseApp>
		);

		await waitForElement(wrapper2, SettingsPageMobile);
		expect(wrapper2.find(SettingsPageMobile).exists()).toBe(true);
	});

	it('createDesktopRoutes', async () => {
		const desktopRoutes: any = createDesktopRoutes({
			mainRoute: { name: 'screen' } as any,
			pages: pages,
		});

		expect(desktopRoutes).toHaveLength(3);

		// First Page
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				{createElement(desktopRoutes[0].screen)}
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsLayoutDesktop);
		expect(wrapper.find(SettingsLayoutDesktop).exists()).toBe(true);

		// Detail Page
		const wrapper2 = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				{createElement(desktopRoutes[2].screen)}
			</BlueBaseApp>
		);

		await waitForElement(wrapper2, SettingsLayoutDesktop);
		expect(wrapper2.find(SettingsLayoutDesktop).exists()).toBe(true);
	});

	it('createSettingsRoutes', async () => {
		const mobileRoutes: any = createSettingsRoutes({
			mainRoute: { name: 'screen' } as any,
			pages: pages,
		});

		expect(mobileRoutes).toHaveLength(3);
	});
});
