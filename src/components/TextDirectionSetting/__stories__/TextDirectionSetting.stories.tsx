import { FormattedMessage, H5 } from '@bluebase/components';
import React from 'react';
import { TextDirectionSetting } from '../TextDirectionSetting';
import { View } from 'react-native';
import storiesOf from '@bluebase/storybook-addon';

storiesOf('Localization', module)

.add('TextDirectionSetting', () => (
	<View>
		<TextDirectionSetting />
		<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
		<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
	</View>
))

;
