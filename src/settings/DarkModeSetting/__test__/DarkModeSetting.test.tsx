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
	it('DarkModeSetting', async () => {
		// mount component
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<DarkModeSetting />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'DarkModeSetting');
		const node = wrapper.find(List.Item).first();
		const onPress: any = node.prop('onPress');

		expect(node.prop('title')).toBe('Dark Mode');
		expect(
			node
				.find('Switch')
				.first()
				.prop('checked')
		).toBe(false);

		await onPress();

		await waitForElement(wrapper, 'Switch[testID="bluebase-dark"]');

		expect(
			wrapper
				.find('Switch')
				.first()
				.prop('checked')
		).toBe(true);
		wrapper.unmount();
	});
});
