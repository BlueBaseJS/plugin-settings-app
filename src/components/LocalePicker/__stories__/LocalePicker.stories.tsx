import { FormattedMessage, H5 } from '@bluebase/components';
import { LocalePicker } from '../LocalePicker';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Localization', module)

.add('LocalePicker', () => (
	<View>
		<LocalePicker />
		<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
		<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
	</View>
))

;
