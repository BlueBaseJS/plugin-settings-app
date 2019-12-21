import { Divider, View } from '@bluebase/components';

import { CallSupportSetting } from '../../settings/CallSupportSetting';
import { EmailSupportSetting } from '../../settings/EmailSupportSetting';
import React from 'react';

export const SupportSettingList = () => {
	const items = [<CallSupportSetting key="call" />, <EmailSupportSetting key="email" />]
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
