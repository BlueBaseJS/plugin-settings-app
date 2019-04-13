import { Platform, StyleProp, ViewStyle, ScrollView } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';
import React from 'react';
import { SettingsPageProps } from './SettingsPage';
import { View } from '@bluebase/components';

const SettingsPageItem = getComponent('SettingsPageItem');

export interface SettingsPageDesktopStyles {
	root: StyleProp<ViewStyle>;
}

export interface SettingsPageDesktopProps extends SettingsPageProps {
	styles?: Partial<SettingsPageDesktopStyles>;
}

export class SettingsPageDesktop extends React.PureComponent<SettingsPageDesktopProps> {

	static defaultProps: Partial<SettingsPageDesktopProps> = {};


	static defaultStyles = (theme: Theme): SettingsPageDesktopStyles => ({
		root: {
			backgroundColor: Platform.OS === 'ios'
			? theme.palette.background.default
			: theme.palette.background.card,
			flex: 1,
		},
	})

	render() {

		const items = this.props.items || [];
		const styles = this.props.styles as SettingsPageDesktopStyles;

		return (
			<ScrollView>
				<View style={styles.root}>
					{items.map((item, index) => (
						<SettingsPageItem
							key={item.name}
							isMobile={false}
							divider={index < items.length - 1}
							{...item}
						/>
					))}
				</View>
			</ScrollView>
		);
	}
}

