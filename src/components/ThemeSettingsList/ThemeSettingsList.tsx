import { Divider, ListItem, View } from '@bluebase/components';
import React from 'react';
import { getComponent } from '@bluebase/core';

const ThemeDarkModeSwitch = getComponent('ThemeDarkModeSwitch');
const ThemePicker = getComponent('ThemePicker', 'Noop');

export const ThemeSettingsList = () => (
	<View>
		<ListItem
			title="Dark Mode"
			description="Change to Dark Mode"
			right={<ThemeDarkModeSwitch />}
		/>
		<Divider />
		<ListItem
			title="Theme"
			// description="Select theme here"
			right={<ThemePicker />}
		/>
	</View>
);