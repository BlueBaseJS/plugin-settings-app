import { Divider, DynamicIcon, ListItem, View } from '@bluebase/components';
import { Platform } from 'react-native';
import React from 'react';
import { getComponent } from '@bluebase/core';

const ThemeDarkModeSwitch = getComponent('ThemeDarkModeSwitch');
const ThemePicker = getComponent('ThemePicker', 'Noop');

export const ThemeSettingsList = () => (
	<View>
		<ListItem
			left={<DynamicIcon type="icon" name="brightness-3" size={24} />}
			title="Dark Mode"
			description="Change to Dark Mode"
			right={<ThemeDarkModeSwitch />}
		/>
		{Platform.OS !== 'android' && <Divider inset />}
		<ListItem
			left={<DynamicIcon type="icon" name="brush" size={24} />}
			title="Theme"
			// description="Select theme here"
			right={<ThemePicker />}
		/>
	</View>
);