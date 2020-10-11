import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../..';
import React from 'react';
import { SettingsLayoutDesktop } from '../SettingsLayoutDesktop';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => {});
describe('SettingsLayoutDesktop', () => {
	it('should return SettingsLayoutDesktop', async () => {
		// mount componentz
		require('../index');
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsLayoutDesktop
					name=""
					pages={[{ name: 'launcher', title: 'Launcher', path: '/' } as any]}
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
});

it('should return SettingsLayoutDesktop with Icon name', async () => {
	// mount componentz
	require('../index');
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin, MUI]}>
			<SettingsLayoutDesktop
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

it('should return SettingsLayoutDesktop with Icon  as function', async () => {
	// mount componentz
	require('../index');
	const wrapper = mount(
		<BlueBaseApp plugins={[Plugin, MUI]}>
			<SettingsLayoutDesktop
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
