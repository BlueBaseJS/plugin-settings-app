import { getComponent, useBlueBase } from '@bluebase/core';

import { JsonLayoutProps } from '@bluebase/plugin-json-schema-components';
import React from 'react';

const JsonLayout = getComponent<JsonLayoutProps>('JsonLayout');

export const InformationSettingList = () => {
	const BB = useBlueBase();

	const items = ['VersionSetting', 'DeveloperSetting']
		.map(name => (BB.Components.has(name) ? name : undefined))
		.filter(x => !!x);

	return (
		<JsonLayout
			schema={{
				component: 'SettingList',
				props: {
					items,
				},
			}}
		/>
	);
};
