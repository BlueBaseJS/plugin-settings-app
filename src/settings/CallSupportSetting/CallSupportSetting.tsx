import { Body2, List } from '@bluebase/components';
import { Theme, getComponent, useConfig, useIntl } from '@bluebase/core';

import { LinkingSettingItemProps } from '../../components/exports';
import React from 'react';
import { TextStyle } from 'react-native';

export interface CallSupportSettingStyles {
	callNowText: TextStyle;
	callCenterClosedText: TextStyle;
}

export interface CallSupportSettingProps {
	styles?: Partial<CallSupportSettingStyles>;
}

const LinkingSettingItem = getComponent<LinkingSettingItemProps>('LinkingSettingItem');

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

	return (
		<LinkingSettingItem
			url={`tel:${phoneNumber}`}
			left={<List.Icon name="phone" />}
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
