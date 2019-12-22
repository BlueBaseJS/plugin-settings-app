import { BlueBaseApp, getComponent } from '@bluebase/core';

import { List } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const TextDirectionSetting = getComponent('TextDirectionSetting');

describe('TextDirectionSetting', () => {
	it('should render TextDirectionSetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<TextDirectionSetting />
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
		).toBe('Text Direction');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('Text Direction will automatically changed based on selected language.');
		expect(
			wrapper
				.find(List.Item)
				.find(List.Icon)
				.first()
				.prop('name')
		).toBe('format-textdirection-l-to-r');
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
			.find('[title="Right to Left"]')
			.first()
			.prop('onPress');

		select();

		await waitForElement(wrapper, '[title="Right to Left"]');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('Text will be displayed from Right to Left');

		expect(
			wrapper
				.find(List.Item)
				.find(List.Icon)
				.first()
				.prop('name')
		).toBe('format-textdirection-r-to-l');
		wrapper.unmount();
	});
});
