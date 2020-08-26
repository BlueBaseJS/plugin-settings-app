import { BlueBaseApp } from '@bluebase/core';
import { DarkModeSetting } from '..';
import { List } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
// import wait from 'waait';
import { waitForElement } from 'enzyme-async-helpers';

describe('DarkModeSetting', () => {
	it('should render ThemeSelectionSetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<DarkModeSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'Dialog');

		const onPress: any = wrapper
			.find(List.Item)
			.first()
			.prop('onPress');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Dark Mode');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('System');

		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(false);

		onPress();
		wrapper.update();

		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(true);

		const select: any = wrapper
			.find(List.Item)
			.find('[title="Dark"]')
			.first()
			.prop('onPress');

		select();

		await waitForElement(wrapper, '[title="Dark Mode"]');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('Dark');

		wrapper.unmount();
	});
});
