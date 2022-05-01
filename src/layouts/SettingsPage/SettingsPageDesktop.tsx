import { H6, StackNavigationOptions, View } from '@bluebase/components';
import { Theme, useFilter, useIntl, useStyles } from '@bluebase/core';
import React from 'react';
import { Dimensions, ScrollView, TextStyle, ViewStyle } from 'react-native';

import { SettingsPageProps } from '../SettingsPage';
import { SettingsPageItemDesktop } from '../SettingsPageItem';

export interface SettingsPageDesktopStyles {
	title: TextStyle;
	root: ViewStyle;
	scrollViewContainer: ViewStyle;
}

export type SettingsPageDesktopProps = SettingsPageProps & {
	styles?: Partial<SettingsPageDesktopStyles>;
};

const defaultStyles = (theme: Theme): SettingsPageDesktopStyles => {
	const { height } = Dimensions.get('window');

	return {
		root: {
			flex: 1,
		},
		scrollViewContainer: {
			height: height - theme.spacing.unit * 10,
		},
		title: {
			paddingHorizontal: theme.spacing.unit * 2,
			paddingTop: theme.spacing.unit * 2,
			paddingBottom: theme.spacing.unit,
		},
	};
};

export const SettingsPageDesktop = (props: SettingsPageDesktopProps) => {
	const { filter, items } = props;
	const { __ } = useIntl();

	const styles = useStyles('SettingsPageDesktop', props, defaultStyles);
	const { value: filteredItems } = useFilter(`${filter}.page.desktop`, items, props);

	const options: StackNavigationOptions = props.options || {};
	const title = options.title;

	return (
		<ScrollView
			style={{ flex: 1 }}
			contentContainerStyle={styles.scrollViewContainer}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.root}>
				{title && <H6 style={styles.title}>{__(title)}</H6>}
				{filteredItems.map(item => (
					<SettingsPageItemDesktop
						key={item.name}
						{...item}
						styles={{ root: { marginVertical: 8 } }}
					/>
				))}
			</View>
		</ScrollView>
	);
};

SettingsPageDesktop.displayName = 'SettingsPageDesktop';
SettingsPageDesktop.defaultProps = {
	items: [],
};
export default SettingsPageDesktop;
