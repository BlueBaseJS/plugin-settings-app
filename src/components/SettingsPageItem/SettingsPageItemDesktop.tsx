import { Body1, Body2, Card, View } from '@bluebase/components';
import { Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';
import React from 'react';
import { SettingsPageItemProps } from './SettingsPageItem';

export interface SettingsPageItemDesktopStyles {
	contentStyles: StyleProp<ViewStyle>;
	descriptionStyles: StyleProp<TextStyle>;
	root: StyleProp<ViewStyle>;
	textColumn: StyleProp<ViewStyle>;
	titleStyles: StyleProp<TextStyle>;
}

export interface SettingsPageItemDesktopProps extends SettingsPageItemProps {
	styles?: Partial<SettingsPageItemDesktopStyles>;
}

export class SettingsPageItemDesktop extends React.PureComponent<SettingsPageItemDesktopProps> {

	static defaultProps: Partial<SettingsPageItemDesktopProps> = {
		// isMobile: true,
	};

	private Component = (this.props.component && typeof this.props.component === 'string')
	? getComponent(this.props.component)
	: this.props.component;

	static defaultStyles = (theme: Theme): SettingsPageItemDesktopStyles => ({
		contentStyles: {
			// backgroundColor: theme.palette.background.card,
			borderBottomWidth: Platform.OS === 'ios' ? 1 : undefined,
			borderColor: Platform.OS === 'ios' ? theme.palette.divider : undefined,
			borderTopWidth: Platform.OS === 'ios' ? 1 : undefined,
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
			width: '30%',
		},
		titleStyles: {
			// color: theme.palette.primary.main,
			paddingBottom: theme.spacing.unit,
			// fontWeight: theme.typography.fontWeightMedium,
		},
	})

	render() {

		const { description, descriptionStyle, title, titleStyle, } = this.props;
		const ItemComponent = this.Component;

		const styles = this.props.styles as SettingsPageItemDesktopStyles;

		const titleNode = !!title
		? <Body1 style={[styles.titleStyles, titleStyle]}>{title}</Body1>
		: null;

		const descNode = !!description
		? <Body2 style={[styles.descriptionStyles, descriptionStyle]}>{description}</Body2>
		: null;

		const componentNode = !!ItemComponent
		? <Card style={styles.contentStyles}><ItemComponent /></Card>
		: null;

		return (
			<View style={styles.root}>
				<View style={styles.textColumn}>
					{titleNode}
					{descNode}
				</View>
				{componentNode}
			</View>
		);
	}
}

