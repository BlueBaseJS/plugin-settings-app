// tslint:disable: radix
import { Body2, List } from '@bluebase/components';
import React, { useEffect, useState } from 'react';
import { Theme, getComponent, useConfig, useIntl } from '@bluebase/core';

import { LinkingSettingItemProps } from '../../components/exports';
import { TextStyle } from 'react-native';
import { isSupportOpen } from './isSupportOpen';

export interface CallSupportSettingStyles {
	callNowText: TextStyle;
	closedText: TextStyle;
}

export interface CallSupportSettingProps {
	styles?: Partial<CallSupportSettingStyles>;
}

const LinkingSettingItem = getComponent<LinkingSettingItemProps>('LinkingSettingItem');

export const CallSupportSetting = ({ styles = {} }: CallSupportSettingProps) => {
	const { __ } = useIntl();

	const [days] = useConfig('plugin.settings-app.support.call.days');
	const [opens] = useConfig('plugin.settings-app.support.call.opens');
	const [closes] = useConfig('plugin.settings-app.support.call.closes');
	const [phoneNumber] = useConfig('plugin.settings-app.support.call.number');

	const checkCanCall = () => isSupportOpen(new Date(), days, parseInt(opens), parseInt(closes));

	const [canCall, setCanCall] = useState(checkCanCall());

	// Update every minute
	useEffect(() => {
		const id = setInterval(() => {
			setCanCall(checkCanCall());
		}, 60000);
		return () => clearInterval(id);
	});

	return (
		<LinkingSettingItem
			url={`tel:${phoneNumber}`}
			left={<List.Icon name="phone" />}
			right={
				canCall ? (
					<Body2 style={styles.callNowText} testID="call-status">
						{__('Call Now')}
					</Body2>
				) : (
					<Body2 style={styles.closedText} testID="call-status">
						{__('Closed')}
					</Body2>
				)
			}
			title={__('Call')}
			description={phoneNumber}
			disabled={!canCall}
		/>
	);
};

CallSupportSetting.defaultStyles = (theme: Theme): CallSupportSettingStyles => ({
	callNowText: {
		color: theme.palette.success.main,
		textTransform: 'uppercase',
	},

	closedText: {
		color: theme.palette.error.main,
		textTransform: 'uppercase',
	},
});
