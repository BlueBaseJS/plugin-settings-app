import { BlueBaseApp, getComponent } from '@bluebase/core';

import DarkModeSetting from '../../../settings/DarkModeSetting';
import JsonSchema from '@bluebase/plugin-json-schema-components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import ThemeSelectionSetting from '../../../settings/ThemeSelectionSetting';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const AppearanceSettingList = getComponent('AppearanceSettingList');

describe('AppearanceSettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<AppearanceSettingList />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SettingList');

		expect(wrapper.find(DarkModeSetting).exists()).toBe(true);
		expect(wrapper.find(ThemeSelectionSetting).exists()).toBe(true);
		wrapper.unmount();
	});
});
