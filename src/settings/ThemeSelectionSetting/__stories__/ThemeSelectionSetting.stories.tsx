import { FormattedMessage, H5 } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { View } from 'react-native';

import { ThemeSelectionSetting } from '../ThemeSelectionSetting';

storiesOf('Localization', module)

	.add('ThemeSelectionSetting', () => (
		<View>
			<ThemeSelectionSetting />
			<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
			<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
		</View>
	))

;
