import { List } from '@bluebase/components';
import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import mockdate from 'mockdate';
import React from 'react';

import Plugin from '../../../index';

const CallSupportSetting = getComponent('CallSupportSetting');

describe('CallSupportSetting', () => {
	it('should render CallSupportSetting with closed status', async () => {
		mockdate.set('22 Dec 2019 11:12:00 GMT');

		const wrapper: any = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				configs={{
					'plugin.settings-app.support.call.closes': 12,
					'plugin.settings-app.support.call.days': [1, 2, 3, 4, 5],
					'plugin.settings-app.support.call.number': '+92-42-111-258-378',
					'plugin.settings-app.support.call.opens': 3,
				}}
			>
				<CallSupportSetting />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'CallSupportSetting');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Call');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('+92-42-111-258-378');

		expect(
			wrapper
				.find('Text[testID="call-status"]')
				.last()
				.text()
		).toBe('Closed');

		mockdate.reset();
		wrapper.unmount();
	});

	it('should render CallSupportSetting with open status', async () => {
		mockdate.set('23 Dec 2019 11:12:00 GMT');

		const wrapper: any = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				configs={{
					'plugin.settings-app.support.call.closes': 12,
					'plugin.settings-app.support.call.days': [1, 2, 3, 4, 5],
					'plugin.settings-app.support.call.number': '+92-42-111-258-378',
					'plugin.settings-app.support.call.opens': 3,
				}}
			>
				<CallSupportSetting />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, 'CallSupportSetting');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Call');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('+92-42-111-258-378');

		expect(
			wrapper
				.find('Text[testID="call-status"]')
				.last()
				.text()
		).toBe('Call Now');

		mockdate.reset();
		wrapper.unmount();
	});
});
