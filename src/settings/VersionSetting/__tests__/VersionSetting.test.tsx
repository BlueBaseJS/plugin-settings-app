import * as React from 'react';

import { BlueBaseApp } from '@bluebase/core';
import BlueBaseMaterialUI from '@bluebase/plugin-material-ui';
import { List } from '@bluebase/components';
import { VersionSetting } from '../VersionSetting';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

describe('VersionSetting', () => {
	it('Component should be render successfully', async () => {
		const wrapper = mount(
			<BlueBaseApp plugins={[BlueBaseMaterialUI]} configs={{ version: '5.1.6' }}>
				<VersionSetting />
			</BlueBaseApp>
		);

		await waitForElement(wrapper, VersionSetting);
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('5.1.6');
	});
});
