import { Text } from '@bluebase/components';
import { useIntl, useNavigation } from '@bluebase/core';
import React, { useLayoutEffect } from 'react';

export const TermsOfService = () => {
	const { __ } = useIntl();
	const { setOptions } = useNavigation();

	const title = __('Terms of Service');

	useLayoutEffect(() => {
		setOptions({ title });
	}, [title]);

	return <Text>{__('Please add terms and conditions here')}</Text>;
};
