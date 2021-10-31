import { Icon, List } from '@bluebase/components';
import { useConfig, useIntl, useTheme } from '@bluebase/core';
import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';

export const DeveloperSetting = () => {
	const { __, rtl } = useIntl();
	const { theme } = useTheme();

	const [developer] = useConfig('developer');
	const [developerUrl] = useConfig('developerUrl');

	// If there is not developer, return null
	if (!developer) {
		return null;
	}

	const onPress = developerUrl ? () => openBrowserAsync(developerUrl) : undefined;

	return (
		<List.Item
			title={__('Developed by')}
			description={__(developer)}
			left={<List.Icon name="domain" />}
			onPress={onPress}
			right={
				developerUrl ? (
					<Icon
						name="open-in-new"
						style={{
							color: theme.palette.text.disabled,
							transform: [{ scaleX: rtl ? -1 : 1 }],
						}}
					/>
				) : (
					undefined
				)
			}
		/>
	);
};
