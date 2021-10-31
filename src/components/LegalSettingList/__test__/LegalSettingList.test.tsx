import { BlueBaseApp, getComponent } from '@bluebase/core';
import JsonSchema from '@bluebase/plugin-json-schema-components';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';
import PrivacyPolicySetting from '../../../settings/PrivacyPolicySetting';
import TermsOfServiceSetting from '../../../settings/TermsOfServiceSetting';

const LegalSettingList = getComponent('LegalSettingList');

describe('LegalSettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<LegalSettingList />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SettingList');

		expect(wrapper.find(TermsOfServiceSetting).exists()).toBe(true);
		expect(wrapper.find(PrivacyPolicySetting).exists()).toBe(true);
		wrapper.unmount();
	});
});
