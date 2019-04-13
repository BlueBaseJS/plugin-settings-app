// tslint:disable:no-console
import React from 'react';
import { ThemeDarkModeSwitch } from '../ThemeDarkModeSwitch';
import { ThemeDemo } from './ThemeDemo';
import { View } from 'react-native';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Themes', module)

.add('Theme Dark Mode Switch', () => (
	<View>
		<ThemeDarkModeSwitch />
		<ThemeDemo />
	</View>
))
;
