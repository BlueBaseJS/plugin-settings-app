// tslint:disable:no-console
import { LocalizationSettingsList } from '../LocalizationSettingsList';
import React from 'react';

import storiesOf from '@bluebase/storybook-addon';

storiesOf('Localization', module)

.add('LocalizationSettingsList', () => (
	<LocalizationSettingsList />
))
;
