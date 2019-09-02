import { BlueBaseFilter, Divider, FormattedMessage, H6, View } from '@bluebase/components';
import { ScrollView, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { Theme, getComponent, resolveThunk } from '@bluebase/core';

import React from 'react';
import { SettingsPageItemProps } from '../SettingsPageItem';
import { SettingsPageProps } from '../SettingsPage';

const SettingsPageItemDesktop = getComponent('SettingsPageItemDesktop');

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

			renderLayout = (items: SettingsPageItemProps[]) => {
			const styles = this.props.styles as SettingsPageDesktopStyles;

			const navigationOptions = resolveThunk(this.props.navigationOptions || {});
			const title = navigationOptions.title || navigationOptions.headerTitle;

			return (
			<ScrollView>
				<View style={styles.root}>
					{title && (
						<React.Fragment>
							<FormattedMessage component={H6} style={styles.title}>
								{title}
							</FormattedMessage>
							<Divider />
						</React.Fragment>
					)}
					{items.map((item, index) => (
						<React.Fragment key={item.name}>
							<SettingsPageItemDesktop {...item} />
							{index < items.length - 1 && <Divider />}
						</React.Fragment>
					))}
				</View>
			</ScrollView>
		);
		}

			render() {
			const { filter, items } = this.props;

			return (
			<BlueBaseFilter filter={`${filter}.page.desktop`} value={items} args={this.props}>
				{filteredItems => this.renderLayout(filteredItems)}
			</BlueBaseFilter>
		);
		}
}

export default SettingsPageDesktop;
