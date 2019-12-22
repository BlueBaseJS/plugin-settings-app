import { BlueBaseApp } from '@bluebase/core';
import CallSupportSetting from '../../../settings/CallSupportSetting';
import JsonSchema from '@bluebase/plugin-json-schema-components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { SettingList } from '../SettingList';
import { Text } from 'react-native';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const Test = () => <Text>Hello</Text>;

describe('SettingList', () => {
	it('should render nothing if there no developer configs', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI, JsonSchema]}>
				<SettingList items={['CallSupportSetting', Test, 'blah']} />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, SettingList);

		expect(wrapper.find(CallSupportSetting).exists()).toBe(true);
		expect(wrapper.find(Test).exists()).toBe(true);
		expect(wrapper.find('blah').exists()).toBe(false);

		wrapper.unmount();
	});
});
