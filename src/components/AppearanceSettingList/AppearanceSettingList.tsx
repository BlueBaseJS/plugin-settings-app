import { getComponent } from '@bluebase/core';
import { JsonLayoutProps } from '@bluebase/plugin-json-schema-components';
import React from 'react';

const JsonLayout = getComponent<JsonLayoutProps>('JsonLayout');

export const AppearanceSettingList = () => {
	const items = ['DarkModeSetting', 'ThemeSelectionSetting'];

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
