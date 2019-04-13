import { StyleProp, ViewStyle, ScrollView, TextStyle } from 'react-native';
import { Theme, getComponent, resolveThunk } from '@bluebase/core';
import React from 'react';
import { SettingsPageProps } from './SettingsPage';
import { View, H6, Divider } from '@bluebase/components';

const SettingsPageItem = getComponent('SettingsPageItem');

export interface SettingsPageDesktopStyles {
	title: StyleProp<TextStyle>;
	root: StyleProp<ViewStyle>;
}

export interface SettingsPageDesktopProps extends SettingsPageProps {
	styles?: Partial<SettingsPageDesktopStyles>;
}

export class SettingsPageDesktop extends React.PureComponent<SettingsPageDesktopProps> {

	static defaultProps: Partial<SettingsPageDesktopProps> = {};


	static defaultStyles = (theme: Theme): SettingsPageDesktopStyles => ({
		root: {
			backgroundColor: theme.palette.background.default,
			flex: 1,
		},
		title: {
			padding: theme.spacing.unit * 2,
		},
	})

	render() {

		const items = this.props.items || [];
		const styles = this.props.styles as SettingsPageDesktopStyles;

		const navigationOptions = resolveThunk(this.props.navigationOptions || {});
		const title = navigationOptions.title || navigationOptions.headerTitle;

		return (
			<ScrollView>
				<View style={styles.root}>
					{title && (
						<React.Fragment>
							<H6 style={styles.title}>{title}</H6>
							<Divider />
						</React.Fragment>
					)}
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

