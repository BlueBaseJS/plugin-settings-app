import { List } from '@bluebase/components';
import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

const ThemeSelectionSetting = getComponent('ThemeSelectionSetting');

describe('ThemeSelectionSetting', () => {
	it('should render ThemeSelectionSetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<ThemeSelectionSetting />
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
		).toBe('Themes');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('BlueBase Theme');
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
			.find('[title="BlueBase Theme"]')
			.first()
			.prop('onPress');

		select();

		await waitForElement(wrapper, '[title="BlueBase Theme"]');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('BlueBase Theme');
	});
});
