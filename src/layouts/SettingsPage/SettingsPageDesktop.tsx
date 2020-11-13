import { H6, NavigationOptions, View } from '@bluebase/components';
import { TextStyle, ViewStyle } from 'react-native';
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
	);
};

SettingsPageDesktop.displayName = 'SettingsPageDesktop';
SettingsPageDesktop.defaultProps = {
	items: [],
};
export default SettingsPageDesktop;
