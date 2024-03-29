import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

const SettingsAppIcon = getComponent('SettingsAppIcon');
jest.mock('expo', () => {});
describe('SettingsAppIcon', () => {
	it('SettingsAppIcon with size 50', async () => {
		// mount componentz
		const wrapper = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<SettingsAppIcon size={50} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'DynamicIcon');
		expect(
			wrapper
				.find('DynamicIcon')
				.first()
				.prop('size')
		).toBe(37.5);
		wrapper.unmount();
	});
});
