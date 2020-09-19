import { Divider, H6, NavigationOptions, View } from '@bluebase/components';
import { ScrollView, TextStyle, ViewStyle } from 'react-native';
import { Theme, resolveThunk, useFilter, useIntl, useStyles } from '@bluebase/core';

import React from 'react';
import { SettingsPageItemDesktop } from '../SettingsPageItem';
import { SettingsPageProps } from '../SettingsPage';
import get from 'lodash.get';
import { useScreenProps } from '../../hooks';

export interface SettingsPageDesktopStyles {
	title: TextStyle;
	root: ViewStyle;
}

export interface SettingsPageDesktopProps extends SettingsPageProps {
	styles?: Partial<SettingsPageDesktopStyles>;
}

const defaultStyles = (theme: Theme): SettingsPageDesktopStyles => ({
	root: {
		backgroundColor: theme.palette.background.default,
		flex: 1,
	},
	title: {
		padding: theme.spacing.unit * 2,
	},
});

export const SettingsPageDesktop = (props: SettingsPageDesktopProps) => {
	const { filter, items } = props;
	const { __ } = useIntl();

	const screenProps = useScreenProps();
	const styles = useStyles('SettingsPageDesktop', props, defaultStyles);
	const { value: filteredItems } = useFilter(`${filter}.page.desktop`, items, props);

	const options: NavigationOptions = resolveThunk(get(props, 'options', {}), screenProps);
	const title = get(options, 'title', options.headerTitle) as string;

	return (
		<ScrollView>
			<View style={styles.root}>
				{title && (
					<React.Fragment>
						<H6 style={styles.title}>{__(title)}</H6>
						<Divider />
					</React.Fragment>
				)}
				{filteredItems.map((item, index) => (
					<React.Fragment key={item.name}>
						<SettingsPageItemDesktop {...item} />
						{index < filteredItems.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</View>
		</ScrollView>
	);
};

SettingsPageDesktop.displayName = 'SettingsPageDesktop';
export default SettingsPageDesktop;
