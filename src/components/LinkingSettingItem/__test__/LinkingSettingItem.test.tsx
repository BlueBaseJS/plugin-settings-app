import { List } from '@bluebase/components';
import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
// import wait from 'waait';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';
import { Linking } from 'react-native';

import Plugin from '../../../index';
import { LinkingSettingItem } from '..';

describe('LinkingSettingItem', () => {
	it('LinkingSettingItem', async () => {
		jest.spyOn(Linking, 'canOpenURL');
		jest.spyOn(Linking, 'openURL');

		// mount component
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<LinkingSettingItem url="mailto:abc@example.com" title="Email" />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, List.Item);

		expect(Linking.openURL).toHaveBeenCalledTimes(0);

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Email');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('disabled')
		).toBe(false);

		const onPress: any = wrapper
			.find(List.Item)
			.first()
			.prop('onPress');

		onPress();

		expect(Linking.openURL).toHaveBeenCalledTimes(1);
		wrapper.unmount();
	});
});
