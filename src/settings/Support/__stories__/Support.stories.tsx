import React from 'react';
import { getComponent } from '@bluebase/core';
import storiesOf from '@bluebase/storybook-addon';

const Support = getComponent('Support');

storiesOf('Support', module).add('Support', () => <Support />);
