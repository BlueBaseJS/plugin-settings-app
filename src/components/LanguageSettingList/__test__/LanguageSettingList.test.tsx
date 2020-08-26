import { BlueBaseApp, getComponent } from '@bluebase/core';

import JsonSchema from '@bluebase/plugin-json-schema-components';
import LanguageSetting from '../../../settings/LanguageSetting';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import TextDirectionSetting from '../../../settings/TextDirectionSetting';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const LanguageSettingList = getComponent('LanguageSettingList');

describe('LanguageSettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<LanguageSettingList />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SettingList');

		expect(wrapper.find(LanguageSetting).exists()).toBe(true);
		expect(wrapper.find(TextDirectionSetting).exists()).toBe(true);
		wrapper.unmount();
	});
});
