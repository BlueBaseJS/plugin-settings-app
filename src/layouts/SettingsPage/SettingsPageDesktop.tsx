import { H6, NavigationOptions, View } from '@bluebase/components';
import {
	resolveThunk,
	Theme,
	useFilter,
	useIntl,
	useStyles
} from '@bluebase/core';
import get from 'lodash.get';
import React from 'react';
import { Dimensions, ScrollView, TextStyle, ViewStyle } from 'react-native';

import { useScreenProps } from '../../hooks';
import { SettingsPageProps } from '../SettingsPage';
import { SettingsPageItemDesktop } from '../SettingsPageItem';

export interface SettingsPageDesktopStyles {
	title: TextStyle;
	root: ViewStyle;
	scrollViewContainer: ViewStyle;
}

export interface SettingsPageDesktopProps extends SettingsPageProps {
	styles?: Partial<SettingsPageDesktopStyles>;
}

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
			padding: theme.spacing.unit * 2,
		},
	};
};

export const SettingsPageDesktop = (props: SettingsPageDesktopProps) => {
	const { filter, items } = props;
	const { __ } = useIntl();

	const screenProps = useScreenProps();
	const styles = useStyles('SettingsPageDesktop', props, defaultStyles);
	const { value: filteredItems } = useFilter(`${filter}.page.desktop`, items, props);

	const options: NavigationOptions = resolveThunk(get(props, 'options', {}), screenProps);
	const title = get(options, 'title', options.headerTitle) as string;

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
