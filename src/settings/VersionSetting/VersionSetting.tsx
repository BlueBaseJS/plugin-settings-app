import { List } from '@bluebase/components';
import { useConfig, useIntl } from '@bluebase/core';
import React from 'react';

export const VersionSetting = () => {
	const { __ } = useIntl();
	const [version] = useConfig('version');

	return (
		<List.Item
			title={__('Version')}
			description={__(version)}
			left={<List.Icon name="information" />}
		/>
	);
};
