
const mockGetDimensions = jest.fn().mockReturnValue({
	height: 800,
	width: 300,
});
jest.mock('expo', () => ({}));
jest.mock('react-native/Libraries/Utilities/Dimensions', () => {
	const DimensionsActual = require.requireActual('react-native/Libraries/Utilities/Dimensions');
	return class extends DimensionsActual {
		static get = mockGetDimensions;
	};
});

import * as React from 'react';

import { BlueBaseApp, getComponent } from '@bluebase/core';

import { Linking } from 'react-native';
import Plugin from '../../../index';
// import { Support as SupportList } from '../Support';
import { SupportListProps } from '../index';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const Support = getComponent<SupportListProps>('Support');
// jest.mock('expo', () => null);

it('Component should be render successfully', async () => {
	const wrapper = mount(
		<BlueBaseApp
			plugins={[Plugin, require('@bluebase/plugin-material-ui'), require('@bluebase/plugin-responsive-grid')]}
			configs={{ 'mevris.user.accessToken': 'token', 'mevris.user.id': 'id' }}
		>
			<Support />
		</BlueBaseApp>
	);

	await waitForElement(wrapper, Support);
	expect(Support).toBeDefined();
});

it('should call & email on class methods', async () => {
	jest.mock('expo', () => null);
	mockGetDimensions.mockReturnValue({
		height: 1300,
		width: 1200,
	});
	const wrapper = mount(
		<BlueBaseApp
			configs={{
				'usermanagement.call-center.opens': 8,
				'usermanagement.call-center.closes': 21,
				'mevris.user.accessToken': 'token',
				'usermanagement.email': 'abc@gmail.com',
			}}
			plugins={[Plugin, require('@bluebase/plugin-material-ui'), require('@bluebase/plugin-responsive-grid')]}
		>
			<Support />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, 'ListItem');
	const support = wrapper.find('Support').last();

	const ins = support.instance() as any;
	Linking.openURL = jest.fn();

	ins.context = {
		Configs: {
			getValue: jest.fn((key: any) => {
				if (key === 'usermanagement.email') {
					return 'abc@gmail.com';
				}
				return 'defaultEmail';
			}),
		},
	};
	ins.openEmailLink();
	const mock = {
		openURL: jest.fn(),
	};
	ins.callSupport(mock, '03231234567');

	expect(mock.openURL).toBeCalledWith('tel:03231234567');
	expect(Linking.openURL).toBeCalledWith('mailto:abc@gmail.com');
});

it('should call on pressing call button', async () => {
	jest.mock('Platform', () => {
		const Platform = require.requireActual('Platform');
		Platform.OS = 'web';
		return Platform;
	});
	mockGetDimensions.mockReturnValue({
		height: 800,
		width: 300,
	});

	const wrapper = mount(
		<BlueBaseApp
			configs={{
				'usermanagement.call-center.opens': 8,
				'usermanagement.call-center.closes': 21,
				'mevris.user.accessToken': 'token',
				'usermanagement.email': 'abc@gmail.com',
			}}
			plugins={[Plugin, require('@bluebase/plugin-material-ui'), require('@bluebase/plugin-responsive-grid')]}
		>
			<Support />
		</BlueBaseApp>
	);
	await waitForElement(wrapper, 'ListItem');
	const ins: any = wrapper
		.find('Support')
		.last()
		.instance();
	Linking.openURL = jest.fn();
	const mock = {
		openURL: jest.fn(),
	};
	ins.callSupport(mock, '03231234567');
	const onPress: any = wrapper
		.find('ListItem[title="Call Support Center"]')
		.last()
		.prop('onPress');
	onPress();
	wrapper.update();

	expect(mock.openURL).toBeCalledWith('tel:03231234567');
});
