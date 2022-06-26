import { Body1, Body2, View } from '@bluebase/components';
import { Theme, useBlueBase, useIntl, useStyles } from '@bluebase/core';
import React from 'react';
import { Platform, TextStyle, ViewStyle } from 'react-native';

import { SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageItemDesktopStyles {
	content: ViewStyle;
	descriptionStyles: TextStyle;
	root: ViewStyle;
	header: ViewStyle;
	titleStyles: TextStyle;
}

export interface SettingsPageItemDesktopProps extends SettingsPageItemProps {
	styles?: Partial<SettingsPageItemDesktopStyles>;
}

const defaultStyles = (theme: Theme): SettingsPageItemDesktopStyles => ({
	root: {
		backgroundColor: theme.palette.background.card,
		borderColor: theme.palette.divider,
		borderRadius: theme.shape.borderRadius * 2,
		borderWidth: 1,
		overflow: 'hidden',
	},

	header: {
		borderBottomColor: theme.palette.divider,
		borderBottomWidth: 1,
		paddingHorizontal: theme.spacing.unit * 2,
		paddingVertical: theme.spacing.unit,
	},

	titleStyles: {
		paddingVertical: theme.spacing.unit / 2,
	},

	descriptionStyles: {
		color: theme.palette.text.hint,
		paddingVertical: theme.spacing.unit / 2,
	},

	content: {
		// backgroundColor: theme.palette.background.card,
		borderBottomWidth: Platform.select({ default: undefined, ios: 1 }),
		borderColor: Platform.select({ default: undefined, ios: theme.palette.divider }),
		borderTopWidth: Platform.select({ default: undefined, ios: 1 }),
		flex: 1,
	},
});

export const SettingsPageItemDesktop = (props: SettingsPageItemDesktopProps) => {
	const { description, descriptionStyle, title, titleStyle, style, component, children } = props;
	const { __ } = useIntl();
	const BB = useBlueBase();

	const ItemComponent = component ? BB.Components.resolveFromCache(component) : null;

	const styles = useStyles('SettingsPageItemDesktop', props, defaultStyles);

	const titleNode =
		typeof title === 'string' ? (
			<Body1 style={[styles.titleStyles, titleStyle]}>{__(title)}</Body1>
		) : (
			title
		);

	const descNode =
		typeof description === 'string' ? (
			<Body2 style={[styles.descriptionStyles, descriptionStyle]}>{__(description)}</Body2>
		) : (
			description
		);

	return (
		<View style={[styles.root, style]}>
			{titleNode || descNode
				? (
					<View style={styles.header}>
						{titleNode}
						{descNode}
					</View>
				)
				: null
			}

			<View style={styles.content}>
				{ItemComponent ? <ItemComponent /> : children}
			</View>
		</View>
	);
};

SettingsPageItemDesktop.displayName = 'SettingsPageItemDesktop';
export default SettingsPageItemDesktop;
