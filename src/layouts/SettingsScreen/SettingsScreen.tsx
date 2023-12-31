import { isMobile, useConfig } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

import { CreateSettingsRoutesOptions } from '../../lib';
import { SettingsLayoutDesktop } from '../SettingsLayoutDesktop';
import { SettingsPageList } from '../SettingsPageList';

export interface SettingsScreenStyles {
	root: ViewStyle;
	menuColumn: ViewStyle;
	contentColumn: ViewStyle;
	contentWrapper: ViewStyle;
}

export interface SettingsScreenProps extends CreateSettingsRoutesOptions {
	page?: string;
	name: string;
}

export const SettingsScreen = (props: SettingsScreenProps) => {

	const [groupSortOrder] = useConfig('plugin.settings-app.group-sort-order');
	// const sortKeys = ['General', 'Appearance', 'Account', 'Advanced', 'About'];

	if (isMobile()) {
		return <SettingsPageList groupSortOrder={groupSortOrder} {...props} />;
	}

	return <SettingsLayoutDesktop groupSortOrder={groupSortOrder} {...props} />;
};

SettingsScreen.displayName = 'SettingsScreen';

export default SettingsScreen;
