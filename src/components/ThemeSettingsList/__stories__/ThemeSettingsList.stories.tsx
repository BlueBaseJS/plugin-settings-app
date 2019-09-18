// tslint:disable:no-console
import React from 'react';
import { ThemeSettingsList } from '../ThemeSettingsList';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Themes', module)

.add('Theme Settings List', () => (
	<ThemeSettingsList />
))
;
