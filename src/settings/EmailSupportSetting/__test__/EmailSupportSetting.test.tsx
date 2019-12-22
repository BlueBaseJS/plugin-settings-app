import { BlueBaseApp, getComponent } from '@bluebase/core';

import { List } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const EmailSupportSetting = getComponent('EmailSupportSetting');

describe('EmailSupportSetting', () => {
	it('should render EmailSupportSetting', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp
				plugins={[Plugin, MUI]}
				configs={{ 'plugin.settings-app.support.email': 'test@blueeast.com' }}
			>
				<EmailSupportSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'EmailSupportSetting');

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
				.prop('description')
		).toBe('test@blueeast.com');
		wrapper.unmount();
	});
});
