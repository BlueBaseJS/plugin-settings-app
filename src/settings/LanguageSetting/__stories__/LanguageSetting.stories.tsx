import { FormattedMessage, H5 } from '@bluebase/components';
import storiesOf from '@bluebase/storybook-addon';
import React from 'react';
import { View } from 'react-native';

import { LanguageSetting } from '../LanguageSetting';

storiesOf('Localization', module)

	.add('LanguageSetting', () => (
		<View>
			<LanguageSetting />
			<FormattedMessage component={H5}>Hello! 👋</FormattedMessage>
			<FormattedMessage style={{ color: 'blue' }}>How are you?</FormattedMessage>
		</View>
	))

;
