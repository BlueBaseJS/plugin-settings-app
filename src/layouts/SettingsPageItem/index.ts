import React from 'react';
import { TextStyle } from 'react-native';

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageItemProps {
	/**
	 * Name of the component, or the component itself to render.
	 */
	component: string | React.ComponentType<any>;

	/** A slug to identify the item */
	name: string;

	/** The title of the segment */
	title?: React.ReactNode;

	/** The description of the segment. This is only visible on desktop layout. */
	description?: React.ReactNode;

	/** Styles to apply to the title component */
	titleStyle?: TextStyle;

	/** Styles to apply to the description component */
	descriptionStyle?: TextStyle;
}

export * from './SettingsPageItemDesktop';
export * from './SettingsPageItemMobile';
