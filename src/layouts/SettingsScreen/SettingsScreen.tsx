import { isMobile } from '@bluebase/core';
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
	if (isMobile()) {
		return <SettingsPageList {...props} />;
	}

	return <SettingsLayoutDesktop {...props} />;
};

SettingsScreen.displayName = 'SettingsScreen';

export default SettingsScreen;
