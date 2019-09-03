import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const LanguageSetting = getComponent('LanguageSetting');
jest.mock('expo', () => { });


describe('languageSetting', () => {

	it('should return languageSetting with rtl true', async () => {
		// mount components


		const wrapper: any = mount(
			<BlueBaseApp plugins={[Plugin, MUI,]}>
				<LanguageSetting />
			</BlueBaseApp>
		);
		await waitForElement(wrapper, 'Dialog');

		// wrapper.context = {
		// 	rtl: true, changeDirection: () => ''
		// };
		const wrappers: any = wrapper
			.find('LanguageSetting')
			.last()
			.instance();
		wrappers.toggleDialog();
		const wrapperss: any = wrapper
			.find('ListItem')
			.first()
			.prop('onPress');
		wrapperss();
		// expect(wrapper.find('Dialog').first().prop('visible')).toBe(false);


	});

});


