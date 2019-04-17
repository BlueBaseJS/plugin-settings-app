import { Body2, Caption, View } from '@bluebase/components';
import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';
import React from 'react';
import { SettingsPageItemProps } from './SettingsPageItem';

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

export class SettingsPageItemMobile extends React.PureComponent<SettingsPageItemMobileProps> {

	static defaultProps: Partial<SettingsPageItemMobileProps> = {
		// isMobile: true,
	};

	private Component = (this.props.component && typeof this.props.component === 'string')
	? getComponent(this.props.component)
	: this.props.component;

	static defaultStyles = (theme: Theme): SettingsPageItemMobileStyles => ({
		contentStyles: {
			// backgroundColor: theme.palette.background.card,
			borderBottomWidth: Platform.OS === 'ios' ? 1 : undefined,
			borderColor: Platform.OS === 'ios' ? theme.palette.divider : undefined,
			borderTopWidth: Platform.OS === 'ios' ? 1 : undefined,
		},
		descriptionStyles: {
			color: theme.palette.text.hint,
			paddingHorizontal: theme.spacing.unit * 2,
			paddingVertical: theme.spacing.unit * 2,
		},
		root: {
			// backgroundColor: Platform.OS === 'ios'
			// ? theme.palette.background.default
			// : theme.palette.background.card,
		},
		titleStyles: {
			color: theme.palette.primary.main,
			paddingHorizontal: theme.spacing.unit * 2,
			paddingVertical: theme.spacing.unit * 2,
			// fontWeight: theme.typography.fontWeightMedium,
		},
	})

	render() {

		const { description, descriptionStyle, title, titleStyle, } = this.props;
		const ItemComponent = this.Component;

		const styles = this.props.styles as SettingsPageItemMobileStyles;

		const titleNode = !!title
		? <Body2 style={[styles.titleStyles, titleStyle]}>{title}</Body2>
		: null;

		const descNode = !!description
		? <Caption style={[styles.descriptionStyles, descriptionStyle]}>{description}</Caption>
		: null;

		const componentNode = !!ItemComponent
		? <View style={styles.contentStyles}><ItemComponent /></View>
		: null;

		return (
			<View style={styles.root}>
				{titleNode}
				{componentNode}
				{descNode}
			</View>
		);
	}
}

