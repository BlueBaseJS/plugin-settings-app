import { H6, StackNavigationOptions, View } from '@bluebase/components';
import { Theme, useFilter, useIntl, useStyles } from '@bluebase/core';
import React from 'react';
import { ScrollView, TextStyle, ViewStyle } from 'react-native';

import { SettingsPageProps } from '../SettingsPage';
import { SettingsPageItemDesktop, SettingsPageItemDesktopStyles } from '../SettingsPageItem';

export interface SettingsPageDesktopStyles {
	header: ViewStyle;
	headerRight: ViewStyle;
	headerTitle: ViewStyle;
	title: TextStyle;
	root: ViewStyle;
	scrollView: ViewStyle;
	scrollViewContainer: ViewStyle;
	item: Partial<SettingsPageItemDesktopStyles>;
}

export type SettingsPageDesktopProps = SettingsPageProps & {
	styles?: Partial<SettingsPageDesktopStyles>;
};

const defaultStyles = (theme: Theme): SettingsPageDesktopStyles => {
	// const { height } = Dimensions.get('window');

	return {
		root: {
			flex: 1,
		},
		header: {
			flexDirection: 'row',
			marginVertical: theme.spacing.unit,
		},
		headerTitle: {
			flexGrow: 1
		},
		headerRight: {
			justifyContent: 'center',
		},
		scrollView: {
			flex: 1,
		},
		scrollViewContainer: {
			// height: height - theme.spacing.unit * 10,
		},
		title: {
			paddingHorizontal: theme.spacing.unit * 2,
			paddingTop: theme.spacing.unit * 2,
			paddingBottom: theme.spacing.unit,
		},
		item: {
			root: {
				marginBottom: theme.spacing.unit * 2,
			}
		}
	};
};

export const SettingsPageDesktop = (props: SettingsPageDesktopProps) => {
	const { filter, items } = props;
	const { __ } = useIntl();

	const styles = useStyles('SettingsPageDesktop', props, defaultStyles);
	const { value: filteredItems } = useFilter(`${filter}.page.desktop`, items, props);

	const { title, headerRight }: StackNavigationOptions = props.options || {};

	return (
		<ScrollView
			style={styles.scrollView}
			contentContainerStyle={styles.scrollViewContainer}
			showsVerticalScrollIndicator={false}
		>
			<View style={styles.root}>
				<View style={styles.header}>
					<View style={styles.headerTitle}>
						{title && <H6 style={styles.title}>{__(title)}</H6>}
					</View>
					<View style={styles.headerRight}>
						{headerRight ? headerRight({}) : null}
					</View>
				</View>
				{filteredItems.map(item => (
					<SettingsPageItemDesktop
						key={item.name}
						{...item}
						styles={styles.item}
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
