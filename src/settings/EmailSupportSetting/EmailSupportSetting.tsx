import { getComponent, useConfig, useIntl } from '@bluebase/core';

import { LinkingSettingItemProps } from '../../components/exports';
import { List } from '@bluebase/components';
import React from 'react';

const LinkingSettingItem = getComponent<LinkingSettingItemProps>('LinkingSettingItem');

export const EmailSupportSetting = () => {
	const { __ } = useIntl();
	const [email] = useConfig('usermanagement.email');

	return (
		<LinkingSettingItem
			url={`mailto:${email}`}
			left={<List.Icon name="email" />}
			title={__('Email')}
			description={email}
		/>
	);
};
