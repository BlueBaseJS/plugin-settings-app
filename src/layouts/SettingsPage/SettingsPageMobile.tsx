import { BlueBaseFilter, Divider, View } from '@bluebase/components';
import { SafeAreaView, ScrollView, StyleProp, ViewStyle } from 'react-native';
import { Theme, getComponent } from '@bluebase/core';

import React from 'react';
import { SettingsPageItemProps } from '../SettingsPageItem';
import { SettingsPageProps } from '../SettingsPage';

const SettingsPageItemMobile = getComponent('SettingsPageItemMobile');

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
	});

	renderLayout = (items: SettingsPageItemProps[]) => {
		const styles = this.props.styles as SettingsPageMobileStyles;

		return (
			<ScrollView>
				<SafeAreaView>
					<View style={styles.root}>
						{items.map((item, index) => (
							<React.Fragment key={item.name}>
								<SettingsPageItemMobile {...item} />
								{index < items.length - 1 && <Divider />}
							</React.Fragment>
						))}
					</View>
				</SafeAreaView>
			</ScrollView>
		);
	};

	render() {
		const { filter, items = [] } = this.props;

		return (
			<BlueBaseFilter filter={`${filter}.page.mobile`} value={items} args={this.props}>
				{filteredItems => this.renderLayout(filteredItems)}
			</BlueBaseFilter>
		);
	}
}

export default SettingsPageMobile;
