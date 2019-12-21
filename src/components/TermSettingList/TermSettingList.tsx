import { Divider, View } from '@bluebase/components';

import { PrivacySetting } from '../../settings/PrivacySetting';
import React from 'react';
import { TermsOfServiceSetting } from '../../settings/TermsOfServiceSetting';

export const TermSettingList = () => {
	const items = [<TermsOfServiceSetting key="terms" />, <PrivacySetting key="privacy" />]
		// Remove undefined items
		.filter(x => !!x);

	return (
		<View>
			{items.map((item, index) => (
				<React.Fragment key={index}>
					{item}
					{index < items.length - 1 ? <Divider inset /> : null}
				</React.Fragment>
			))}
		</View>
	);
};
