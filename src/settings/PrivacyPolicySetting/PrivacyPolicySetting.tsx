import { List } from '@bluebase/components';
import { useIntl, useNavigation } from '@bluebase/core';
import React, { useCallback } from 'react';

export const PrivacyPolicySetting = () => {
	const { __ } = useIntl();
	const { navigate } = useNavigation();

	const goToPrivacyPolicy = useCallback(() => {
		navigate('PrivacyPolicy');
	}, [navigate]);

	return (
		<List.Item
			left={<List.Icon name="shield-check" />}
			title={__('Privacy Policy')}
			onPress={goToPrivacyPolicy}
		/>
	);
};
