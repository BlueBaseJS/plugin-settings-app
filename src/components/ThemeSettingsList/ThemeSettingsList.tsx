import { Divider, ListItem, View } from '@bluebase/components';
import { Platform } from 'react-native';
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
		{Platform.OS !== 'android' && <Divider />}
		<ListItem
			title="Theme"
			// description="Select theme here"
			right={<ThemePicker />}
		/>
	</View>
);