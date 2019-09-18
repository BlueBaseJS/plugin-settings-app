import { FormattedMessage, H5 } from '@bluebase/components';
import React from 'react';
import { ThemeSelectionSetting } from '../ThemeSelectionSetting';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Localization', module)

.add('ThemeSelectionSetting', () => (
	<View>
		<ThemeSelectionSetting />
		<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
		<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
	</View>
))

;
