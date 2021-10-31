import { List } from '@bluebase/components';
import { getComponent, useConfig, useIntl } from '@bluebase/core';
import React from 'react';

import { LinkingSettingItemProps } from '../../components/exports';

const LinkingSettingItem = getComponent<LinkingSettingItemProps>('LinkingSettingItem');

export const EmailSupportSetting = () => {
	const { __ } = useIntl();
	const [email] = useConfig('plugin.settings-app.support.email');

	return (
		<LinkingSettingItem
			url={`mailto:${email}`}
			left={<List.Icon name="email" />}
			title={__('Email')}
			description={email}
		/>
	);
};
