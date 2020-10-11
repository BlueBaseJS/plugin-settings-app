import { BlueBaseApp } from '@bluebase/core';
import BootOptions from '../bluebase';
import React from 'react';

export const decorators = [
	(Story) => (
		<BlueBaseApp {...BootOptions}>
			<Story />
		</BlueBaseApp>
	),
];
