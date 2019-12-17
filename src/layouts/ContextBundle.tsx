import { BlueBase, IntlContextData, Theme, useBlueBase, useIntl, useTheme } from '@bluebase/core';
import { NavigationActions, NavigationActionsObject } from '@bluebase/components';

import React from 'react';

export interface ContextBundleData {
	navigation: NavigationActionsObject;
	screenProps: {
		BB: BlueBase;
		intl: IntlContextData;
		theme: Theme;
	};
}

export interface ContextBundleProps {
	children: (opts: ContextBundleData) => React.ReactElement;
}

export const ContextBundle = ({ children }: ContextBundleProps) => {
	const BB = useBlueBase();
	const intl = useIntl();
	const { theme } = useTheme();

	return (
		<NavigationActions>
			{navigation => children({ navigation, screenProps: { BB, intl, theme } })}
		</NavigationActions>
	);
};
