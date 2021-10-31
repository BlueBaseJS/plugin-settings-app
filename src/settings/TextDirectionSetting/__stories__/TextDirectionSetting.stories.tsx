import { FormattedMessage, H5 } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { View } from 'react-native';

import { TextDirectionSetting } from '../TextDirectionSetting';

storiesOf('Localization', module)

	.add('TextDirectionSetting', () => (
		<View>
			<TextDirectionSetting />
			<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
			<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
		</View>
	))

;
