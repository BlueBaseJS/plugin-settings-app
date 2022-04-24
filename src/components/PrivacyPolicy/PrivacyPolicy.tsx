import { Text } from '@bluebase/components';
import { useIntl } from '@bluebase/core';
import React from 'react';

export const PrivacyPolicy = () => {
	const { __ } = useIntl();
	return <Text>{__('Please add privacy Policies here')}</Text>;
};
