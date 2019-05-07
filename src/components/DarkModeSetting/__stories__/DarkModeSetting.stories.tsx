// tslint:disable:no-console
import { DarkModeSetting } from '../DarkModeSetting';
import React from 'react';
import { View } from 'react-native';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Themes', module)

.add('Theme Dark Mode Switch', () => (
	<View>
		<DarkModeSetting />
	</View>
))
;
