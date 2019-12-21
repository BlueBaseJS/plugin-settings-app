import { Icon, List } from '@bluebase/components';
import { useConfig, useIntl, useTheme } from '@bluebase/core';

import React from 'react';
import { openBrowserAsync } from 'expo-web-browser';

export const DeveloperSetting = () => {
	const { __, rtl } = useIntl();
	const { theme } = useTheme();

	const [author] = useConfig('author');
	const [authorUrl] = useConfig('authorUrl');

	// If there is not author, return null
	if (!author) {
		return null;
	}

	const onPress = authorUrl ? () => openBrowserAsync(authorUrl) : undefined;

	return (
		<List.Item
			title={__('Developed by')}
			description={__(author)}
			left={<List.Icon name="domain" />}
			onPress={onPress}
			right={
				authorUrl ? (
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
