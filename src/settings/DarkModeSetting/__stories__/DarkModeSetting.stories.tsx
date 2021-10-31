// tslint:disable:no-console
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { View } from 'react-native';

import { DarkModeSetting } from '../DarkModeSetting';

storiesOf('Themes', module)

	.add('Theme Dark Mode Switch', () => (
		<View>
			<DarkModeSetting />
		</View>
	))
;
