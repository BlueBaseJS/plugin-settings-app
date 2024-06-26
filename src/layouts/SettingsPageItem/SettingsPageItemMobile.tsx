import { Caption, List, View } from '@bluebase/components';
import { Theme, useBlueBase, useIntl, useStyles } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

import { SettingsPageItemProps } from '../SettingsPageItem';

export interface SettingsPageItemMobileStyles {
	contentStyles: ViewStyle;
	descriptionStyles: TextStyle;
	root: ViewStyle;
	titleStyles: TextStyle;
	header: ViewStyle;
}

export interface SettingsPageItemMobileProps extends SettingsPageItemProps {
	// isMobile?: boolean;

	styles?: Partial<SettingsPageItemMobileStyles>;
}

const defaultStyles = (theme: Theme, { danger }: SettingsPageItemMobileProps): SettingsPageItemMobileStyles => ({
	root: {
		flexGrow: 1
	},

	header: {
		paddingVertical: theme.spacing.unit,
	},

	descriptionStyles: {
		color: theme.palette.text.hint,
		paddingHorizontal: theme.spacing.unit * 2,
	},

	titleStyles: {
		color: danger ? 'rgba(239, 83, 80, 1)' : theme.palette.text.primary,
		paddingVertical: theme.spacing.unit,
	},

	contentStyles: {
		flexGrow: 1
	},
});

export const SettingsPageItemMobile = (props: SettingsPageItemMobileProps) => {
	const { description, descriptionStyle, title, titleStyle, style, children, component } = props;
	const { __ } = useIntl();
	const BB = useBlueBase();

	const ItemComponent = component ? BB.Components.resolveFromCache(component) : null;

	const styles = useStyles('SettingsPageItemDesktop', props, defaultStyles);

	const titleNode =
		typeof title === 'string' ? (
			<List.Subheader style={[titleStyle, styles.titleStyles]}>{__(title)}</List.Subheader>
		) : (
			title
		);

	const descNode =
		typeof description === 'string' ? (
			<Caption style={[styles.descriptionStyles, descriptionStyle]}>{__(description)}</Caption>
		) : (
			description
		);

	return (
		<View style={[styles.root, style]}>
			{titleNode || descNode ? (
				<View style={styles.header}>
					{titleNode}
					{descNode}
				</View>
			) : null}
			<View style={styles.contentStyles}>
				{ItemComponent ? <ItemComponent /> : children}
			</View>
		</View>
	);
};

SettingsPageItemMobile.displayName = 'SettingsPageItemMobile';

export default SettingsPageItemMobile;
