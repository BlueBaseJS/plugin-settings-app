import { Body1, Body2, Card, FormattedMessage, View } from '@bluebase/components';
import { Platform, TextStyle, ViewStyle } from 'react-native';
import { Theme, useComponent, useStyles } from '@bluebase/core';

import React from 'react';
import { SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageItemDesktopStyles {
	contentStyles: ViewStyle;
	descriptionStyles: TextStyle;
	root: ViewStyle;
	textColumn: ViewStyle;
	titleStyles: TextStyle;
}

export interface SettingsPageItemDesktopProps extends SettingsPageItemProps {
	styles?: Partial<SettingsPageItemDesktopStyles>;
}

const defaultStyles = (theme: Theme): SettingsPageItemDesktopStyles => ({
	contentStyles: {
		// backgroundColor: theme.palette.background.card,
		borderBottomWidth: Platform.select({ default: undefined, ios: 1 }),
		borderColor: Platform.select({ default: undefined, ios: theme.palette.divider }),
		borderTopWidth: Platform.select({ default: undefined, ios: 1 }),
		flex: 1,
	},
	descriptionStyles: {
		color: theme.palette.text.hint,
	},
	root: {
		backgroundColor: theme.palette.background.default,
		flexDirection: 'row',
		padding: theme.spacing.unit * 2,
	},
	textColumn: {
		paddingRight: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit * 2,
		width: '40%',
	},
	titleStyles: {
		// color: theme.palette.primary.main,
		paddingBottom: theme.spacing.unit,
		// fontWeight: theme.typography.fontWeightMedium,
	},
});

export const SettingsPageItemDesktop = (props: SettingsPageItemDesktopProps) => {
	const { description, descriptionStyle, title, titleStyle } = props;
	const ItemComponent = useComponent(props.component);

	const styles = useStyles('SettingsPageItemDesktop', props, defaultStyles);

	const titleNode = !!title ? (
		<FormattedMessage component={Body1} style={[styles.titleStyles, titleStyle]}>
			{title}
		</FormattedMessage>
	) : null;

	const descNode = !!description ? (
		<FormattedMessage component={Body2} style={[styles.descriptionStyles, descriptionStyle]}>
			{description}
		</FormattedMessage>
	) : null;

	return (
		<View style={styles.root}>
			<View style={styles.textColumn}>
				{titleNode}
				{descNode}
			</View>
			<Card style={styles.contentStyles}>
				<ItemComponent />
			</Card>
		</View>
	);
};

SettingsPageItemDesktop.displayName = 'SettingsPageItemDesktop';
export default SettingsPageItemDesktop;
