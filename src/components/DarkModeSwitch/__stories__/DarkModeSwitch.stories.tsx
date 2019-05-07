// tslint:disable:no-console
import { DarkModeSwitch } from '../DarkModeSwitch';
import React from 'react';
import { ThemeDemo } from './ThemeDemo';
import { View } from 'react-native';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Themes', module)

.add('Theme Dark Mode Switch', () => (
	<View>
		<DarkModeSwitch />
		<ThemeDemo />
	</View>
))
;
