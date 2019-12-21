import { Divider, View } from '@bluebase/components';

import { DeveloperSetting } from '../../settings/DeveloperSetting';
import React from 'react';
import { VersionSetting } from '../../settings/VersionSetting';

export const AboutList = () => {
	const items = [<VersionSetting key="version" />, <DeveloperSetting key="developer" />]
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
