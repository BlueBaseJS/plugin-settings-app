import { Divider, List, } from '@bluebase/components';
import { Platform } from 'react-native';
import React from 'react';
import { getComponent } from '@bluebase/core';

const ThemeDarkModeSwitch = getComponent('ThemeDarkModeSwitch');
const ThemePicker = getComponent('ThemePicker', 'Noop');

export const ThemeSettingsList = () => (
	<List>
		<List.Item
			left={<List.Icon name="brightness-3" />}
			title="Dark Mode"
			description="Change to Dark Mode"
			right={<ThemeDarkModeSwitch />}
		/>
		{Platform.OS !== 'android' && <Divider inset />}
		<List.Item
			left={<List.Icon name="brush" />}
			title="Theme"
			// description="Select theme here"
			right={<ThemePicker />}
		/>
	</List>
);