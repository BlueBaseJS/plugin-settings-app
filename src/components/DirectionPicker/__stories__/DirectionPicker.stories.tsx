// import { BlueBaseApp, IntlMessages } from '@bluebase/core';
import { FormattedMessage, H5 } from '@bluebase/components';
import { DirectionPicker } from '../DirectionPicker';
import { LocalePicker } from '../../LocalePicker';
import React from 'react';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

// const filters = {
// 	'bluebase.intl.messages.ur': (messages: IntlMessages) => ({
// 		...messages,
// 		'Hello! 👋': 'ہیلو! 👋'
// 	})
// };

storiesOf('Localization', module)


.add('DirectionPicker', () => (
	<View>
		<DirectionPicker />
		<LocalePicker />
		<View style={{ flexDirection: 'row' }}>
			<View style={{ flex: 1, backgroundColor: 'green' }}>
				<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
			</View>
			<View style={{ flex: 2, backgroundColor: 'yellow' }}>
				<FormattedMessage>How are you?</FormattedMessage>
			</View>
		</View>
	</View>
))
;
