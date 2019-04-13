// tslint:disable:no-console
import React from 'react';
import { ThemeDemo } from './ThemeDemo';
import { ThemePicker } from '../ThemePicker';
import { View } from 'react-native';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Themes', module)

.add('Theme Picker', () => (
	<View>
		<ThemePicker />
		<ThemeDemo />
	</View>
))
;
