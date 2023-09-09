import { List } from '@bluebase/components';
import { useIntl, useNavigation } from '@bluebase/core';
import React, { useCallback } from 'react';

export const TermsOfServiceSetting = () => {
	const { __ } = useIntl();
	const { navigate } = useNavigation();

	const goToTermsOfService = useCallback(() => {
		navigate('TermsOfService');
	}, [navigate]);

	return (
		<List.Item
			left={<List.Icon name="file-document" />}
			title={__('Terms of Service')}
			onPress={goToTermsOfService}
		/>
	);
};
