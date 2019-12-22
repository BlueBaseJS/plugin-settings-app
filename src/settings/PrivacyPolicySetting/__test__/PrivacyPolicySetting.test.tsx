import { BlueBaseApp, getComponent } from '@bluebase/core';

import { List } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const PrivacyPolicySetting = getComponent('PrivacyPolicySetting');

describe('PrivacyPolicySetting', () => {
	it('should render PrivacyPolicySetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<PrivacyPolicySetting />
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
		).toBe('Privacy Policy');
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

		expect(wrapper.find('PrivacyPolicy').exists()).toBe(true);
	});
});
