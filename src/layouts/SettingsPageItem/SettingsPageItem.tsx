import { isMobile } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { SettingsPageItemDesktop } from './SettingsPageItemDesktop';
import { SettingsPageItemMobile } from './SettingsPageItemMobile';

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageItemProps {
	/**
	 * Name of the component, or the component itself to render.
	 */
	component?: string | React.ComponentType<any>;

	/** A slug to identify the item */
	name?: string;

	/** The title of the segment */
	title?: React.ReactNode;

	/** The description of the segment. This is only visible on desktop layout. */
	description?: React.ReactNode;

	/** Styles to apply to the title component */
	titleStyle?: TextStyle;

	/** Styles to apply to the description component */
	descriptionStyle?: TextStyle;

	danger?: boolean;

	children?: React.ReactNode;
	style?: ViewStyle;
}

export const SettingsPageItem = (props: SettingsPageItemProps) => {

	if (isMobile()) {
		return <SettingsPageItemMobile {...props as any} />;
	}

	return <SettingsPageItemDesktop {...props as any} />;
};

SettingsPageItem.displayName = 'SettingsPageItem';
export default SettingsPageItem;
