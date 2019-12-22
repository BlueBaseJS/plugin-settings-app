import { BlueBaseApp, getComponent } from '@bluebase/core';

import JsonSchema from '@bluebase/plugin-json-schema-components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import VersionSetting from '../../../settings/VersionSetting';
import DeveloperSetting from '../../../settings/DeveloperSetting';

const InformationSettingList = getComponent('InformationSettingList');

describe('InformationSettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<InformationSettingList />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'SettingList');

		expect(wrapper.find(VersionSetting).exists()).toBe(true);
		expect(wrapper.find(DeveloperSetting).exists()).toBe(true);
		wrapper.unmount();
	});
});
