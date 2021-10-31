import { List } from '@bluebase/components';
import { BlueBaseApp, getComponent } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
import React from 'react';

import Plugin from '../../../index';

const LanguageSetting = getComponent('LanguageSetting');

describe('languageSetting', () => {
	it('should return languageSetting with rtl true', async () => {
		// mount components

		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI]}>
				<LanguageSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'Dialog');

		const onPress: any = wrapper
			.find(List.Item)
			.first()
			.prop('onPress');

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('title')
		).toBe('Language');
		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('English');
		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(false);

		onPress();
		wrapper.update();

		expect(
			wrapper
				.find('Dialog')
				.first()
				.prop('visible')
		).toBe(true);

		const select: any = wrapper
			.find(List.Item)
			.find('[title="اُردُو"]')
			.first()
			.prop('onPress');

		select();
		wrapper.update();

		expect(
			wrapper
				.find(List.Item)
				.first()
				.prop('description')
		).toBe('اُردُو');
		wrapper.unmount();
	});
});
