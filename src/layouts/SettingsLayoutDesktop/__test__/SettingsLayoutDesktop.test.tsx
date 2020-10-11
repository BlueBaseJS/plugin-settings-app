import { Icon, Noop } from '@bluebase/components';
import { SettingsPageDesktop, SettingsPageProps } from '../../SettingsPage';

import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../..';
import React from 'react';
import { SettingsLayoutDesktop } from '../SettingsLayoutDesktop';
import { SettingsPageList } from '../../SettingsPageList';
import { View } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

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

	{
		name: 'AccountSettings',
		path: 'account',
		right: <Icon name="open-in-new" size={20} />,

		options: {
			drawerIcon: { type: 'icon', name: 'account' },

			title: 'Account',
		},
	},
];

describe('SettingsLayoutDesktop', () => {
	it('should render SettingsLayoutDesktop', async () => {
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				<SettingsLayoutDesktop
					mainRoute={{ name: 'test' } as any}
					pages={pages}
					page="GeneralSettingsPage"
				/>
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsLayoutDesktop);

		expect(wrapper.find(SettingsPageList).exists()).toBe(true);

		expect(wrapper.find(SettingsPageDesktop).exists()).toBe(true);
	});

	it('should not render SettingsPageDesktop when page is not fpund', async () => {
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				components={{ Container: View, Row: View, Column: View, JsonLayout: Noop }}
			>
				<SettingsLayoutDesktop mainRoute={{ name: 'test' } as any} pages={pages} page="unknown" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, SettingsLayoutDesktop);

		expect(wrapper.find(SettingsPageList).exists()).toBe(true);

		expect(wrapper.find(SettingsPageDesktop).exists()).toBe(false);
	});
});
