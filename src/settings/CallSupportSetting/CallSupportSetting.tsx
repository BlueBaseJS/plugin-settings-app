import { Body2, List } from '@bluebase/components';
import { Linking, TextStyle } from 'react-native';
import { Theme, useConfig, useIntl } from '@bluebase/core';

import React from 'react';

export interface CallSupportSettingStyles {
	callNowText: TextStyle;
	callCenterClosedText: TextStyle;
}

export interface CallSupportSettingProps {
	styles?: Partial<CallSupportSettingStyles>;
}

export const CallSupportSetting = ({ styles = {} }: CallSupportSettingProps) => {
	const { __ } = useIntl();

	const [opens] = useConfig<number>('usermanagement.call-center.opens');
	const [closes] = useConfig<number>('usermanagement.call-center.closes');
	const [phoneNumber] = useConfig('usermanagement.call-center.number');

	const currentHour = new Date().getHours();
	const canCall = currentHour >= opens && currentHour <= closes ? true : false;

	const description = canCall ? (
		<Body2 style={styles.callNowText}>{__('Call Now')}</Body2>
	) : (
		<Body2 style={styles.callCenterClosedText}>{__('Call Center Closed')}</Body2>
	);

	const onPress = () => Linking.openURL(`tel:${phoneNumber}`);

	return (
		<List.Item
			left={<List.Icon name="phone" />}
			onPress={onPress}
			title={__('Call Support')}
			description={description}
			disabled={!canCall}
		/>
	);
};

CallSupportSetting.defaultStyles = (theme: Theme): CallSupportSettingStyles => ({
	callCenterClosedText: {
		color: theme.palette.error.main,
		textTransform: 'uppercase',
	},
	callNowText: {
		color: theme.palette.success.main,
		textTransform: 'uppercase',
	},
});
