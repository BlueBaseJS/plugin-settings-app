import { Text } from '@bluebase/components';
import { useIntl, useNavigation } from '@bluebase/core';
import React, { useLayoutEffect } from 'react';

export const PrivacyPolicy = () => {
	const { __ } = useIntl();

	const { setOptions } = useNavigation();

	const title = __('Privacy Policy');

	useLayoutEffect(() => {
		setOptions({ title });
	}, [title]);

	return <Text>{__('Please add privacy Policies here')}</Text>;
};
