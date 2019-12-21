import { useConfig, useIntl } from '@bluebase/core';

import { Linking } from 'react-native';
import { List } from '@bluebase/components';
import React from 'react';

export const EmailSupportSetting = () => {
	const { __ } = useIntl();
	const [email] = useConfig('usermanagement.email');

	const onPress = () => Linking.openURL(`mailto:${email}`);
	return (
		<List.Item
			left={<List.Icon name="email" />}
			onPress={onPress}
			title={__('Email')}
			description={email}
		/>
	);
};
