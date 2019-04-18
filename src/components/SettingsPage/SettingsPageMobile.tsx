import { SafeAreaView, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';
import React from 'react';
import { SettingsPageProps } from './SettingsPage';
import { View } from '@bluebase/components';

const SettingsPageItem = getComponent('SettingsPageItem');

export interface SettingsPageMobileStyles {
	root: StyleProp<ViewStyle>;
}

export interface SettingsPageMobileProps extends SettingsPageProps {
	styles?: Partial<SettingsPageMobileStyles>;
}

export class SettingsPageMobile extends React.PureComponent<SettingsPageMobileProps> {

	static defaultProps: Partial<SettingsPageMobileProps> = {};


	static defaultStyles = (_theme: Theme): SettingsPageMobileStyles => ({
		root: {
			// backgroundColor: Platform.OS === 'ios'
			// ? theme.palette.background.default
			// : theme.palette.background.card,
		},
	})

	render() {

		const items = this.props.items || [];
		const styles = this.props.styles as SettingsPageMobileStyles;

		return (
			<ScrollView>
				<SafeAreaView>
					<View style={styles.root}>
						{items.map((item, index) => (
							<SettingsPageItem
								key={item.name}
								isMobile={true}
								divider={index < items.length - 1}
								{...item}
							/>
						))}
					</View>
				</SafeAreaView>
			</ScrollView>
		);
	}
}

