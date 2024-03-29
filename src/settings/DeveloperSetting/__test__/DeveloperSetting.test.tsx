import { Icon, List } from '@bluebase/components';
import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

const DeveloperSetting = getComponent('DeveloperSetting');

describe('DeveloperSetting', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]} configs={{ developer: null }}>
				<DeveloperSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'DeveloperSetting');

		expect(wrapper.find(List.Item).exists()).toBe(false);
		wrapper.unmount();
	});

	it('should render unpressable list item if developerUrl is null', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]} configs={{ developer: 'BlueEast', developerUrl: null }}>
				<DeveloperSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper as any, 'DeveloperSetting');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('BlueEast');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('onPress')
		).toBe(undefined);
		wrapper.unmount();
	});

	it('should render pressable list item if developerUrl is not null', async () => {
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				configs={{ developer: 'BlueEast', developerUrl: 'www.blueeast.com' }}
			>
				<DeveloperSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper as any, 'DeveloperSetting');

		expect(
			(wrapper
				.find(Icon)
				.last()
				.prop('style') as any).transform
		).toStrictEqual([{ scaleX: 1 }]);

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('BlueEast');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('onPress')
		).toBeTruthy();
		wrapper.unmount();
	});

	it('should render inverted right icon on rtl layout', async () => {
		const wrapper = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				configs={{ developer: 'BlueEast', developerUrl: 'www.blueeast.com', locale: 'ur' }}
			>
				<DeveloperSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper as any, 'DeveloperSetting');

		expect(
			(wrapper
				.find(Icon)
				.last()
				.prop('style') as any).transform
		).toStrictEqual([{ scaleX: -1 }]);
		wrapper.unmount();
	});
});
