import { StyleProp, TextStyle } from 'react-native';

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageItemObject {
	/**
	 * Name of the component, or the component itself to render.
	 */
	component: string | React.ComponentType<any>;

	/** A slug to identify the item */
	name: string;

	/** The title of the segment */
	title?: string;

	/** The description of the segment. This is only visible on desktop layout. */
	description?: string;

	/** Styles to apply to the title component */
	titleStyle?: StyleProp<TextStyle>;

	/** Styles to apply to the description component */
	descriptionStyle?: StyleProp<TextStyle>;
}