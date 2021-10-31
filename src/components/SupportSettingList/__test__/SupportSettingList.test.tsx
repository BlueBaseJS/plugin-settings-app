import { BlueBaseApp, getComponent } from '@bluebase/core';
import JsonSchema from '@bluebase/plugin-json-schema-components';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import CallSupportSetting from '../../../settings/CallSupportSetting';
import EmailSupportSetting from '../../../settings/EmailSupportSetting';

const SupportSettingList = getComponent('SupportSettingList');

describe('SupportSettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<SupportSettingList />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SettingList');

		expect(wrapper.find(CallSupportSetting).exists()).toBe(true);
		expect(wrapper.find(EmailSupportSetting).exists()).toBe(true);
		wrapper.unmount();
	});
});
