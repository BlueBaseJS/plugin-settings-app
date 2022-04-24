import { Text } from '@bluebase/components';
import { useIntl } from '@bluebase/core';
import React from 'react';

export const TermsOfService = () => {
	const { __ } = useIntl();
	return <Text>{__('Please add terms and conditions here')}</Text>;
};
