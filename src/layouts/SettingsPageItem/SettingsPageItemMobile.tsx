import { Caption, FormattedMessage, List, View } from '@bluebase/components';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme, useComponent, useStyles } from '@bluebase/core';

import React from 'react';
import { SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageItemMobileStyles {
	contentStyles: StyleProp<ViewStyle>;
	descriptionStyles: StyleProp<TextStyle>;
	root: StyleProp<ViewStyle>;
	titleStyles: StyleProp<TextStyle>;
}

export interface SettingsPageItemMobileProps extends SettingsPageItemProps {
	// isMobile?: boolean;

	styles?: Partial<SettingsPageItemMobileStyles>;
}

const defaultStyles = (theme: Theme): SettingsPageItemMobileStyles => ({
	contentStyles: {},
	descriptionStyles: {
		color: theme.palette.text.hint,
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit * 2,
	},
	root: {},
	titleStyles: {
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit * 2,
	},
});

export const SettingsPageItemMobile = (props: SettingsPageItemMobileProps) => {
	const { description, descriptionStyle, title, titleStyle } = props;
	const ItemComponent = useComponent(props.component);

	const styles = useStyles('SettingsPageItemDesktop', props, defaultStyles);

	const titleNode = !!title ? (
		<FormattedMessage component={List.Subheader} style={[styles.titleStyles, titleStyle]}>
			{title}
		</FormattedMessage>
	) : null;

	const descNode = !!description ? (
		<FormattedMessage component={Caption} style={[styles.descriptionStyles, descriptionStyle]}>
			{description}
		</FormattedMessage>
	) : null;

	return (
		<View style={styles.root}>
			{titleNode}
			<View style={styles.contentStyles}>
				<ItemComponent />
			</View>
			{descNode}
		</View>
	);
};

SettingsPageItemMobile.displayName = 'SettingsPageItemMobile';

export default SettingsPageItemMobile;
