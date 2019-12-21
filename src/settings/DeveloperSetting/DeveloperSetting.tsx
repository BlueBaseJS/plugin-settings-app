import { Icon, List } from '@bluebase/components';
import { useConfig, useIntl, useTheme } from '@bluebase/core';

import ExternalLink from '../../components/ExternalLink';
import React from 'react';

export const DeveloperSetting = () => {
	const { __, rtl } = useIntl();
	const { theme } = useTheme();

	const [author] = useConfig('author');
	const [authorUrl] = useConfig('authorUrl');

	// If there is not author, return null
	if (!author) {
		return null;
	}

	const props: any = {
		description: __(author),
		title: __('Developed by'),
	};

	// If there is not authorUrl, only render name
	if (!authorUrl) {
		return <List.Item {...props} />;
	}

	props.right = (
		<Icon
			name="open-in-new"
			style={{
				color: theme.palette.text.disabled,
				transform: [{ scaleX: rtl ? -1 : 1 }],
			}}
		/>
	);
	props.left = <List.Icon name="domain" />;

	return <ExternalLink Component={List.Item} props={props} href={authorUrl} />;
};
