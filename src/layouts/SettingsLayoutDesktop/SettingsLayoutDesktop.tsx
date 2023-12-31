import { SafeAreaView, ScrollView, View } from '@bluebase/components';
import { useIntl, useStyles, useTheme } from '@bluebase/core';
import React from 'react';
import { ViewStyle } from 'react-native';

import { CreateSettingsRoutesOptions } from '../../lib';
import { SettingsPageDesktop } from '../SettingsPage';
import { SettingsPageList } from '../SettingsPageList';

export interface SettingsLayoutDesktopStyles {
	root: ViewStyle;
	menuColumn: ViewStyle;
	contentColumn: ViewStyle;
	contentWrapper: ViewStyle;
}

export interface SettingsLayoutDesktopProps extends CreateSettingsRoutesOptions {
	page?: string;
	groupSortOrder?: string[];
}

export const SettingsLayoutDesktop = (props: SettingsLayoutDesktopProps) => {
	const { pages, page, filter, mainRoute, groupSortOrder } = props;
	const { theme } = useTheme();
	const { rtl } = useIntl();

	const pageObj = pages.find(p => p.name === page);

	const styles = useStyles<SettingsLayoutDesktopStyles>('SettingsLayoutDesktop', props, {
		root: {
			flex: 1,
			flexDirection: 'row',
		},
		menuColumn: {
			backgroundColor: theme.palette.background.light,
			width: 275,
			borderRightWidth: rtl ? 0 : 1,
			borderLeftWidth: rtl ? 1 : 0,
			borderColor: theme.palette.divider,
		},
		contentColumn: {
			flexGrow: 1,
		},
		contentWrapper: {
			alignSelf: 'center',
			marginHorizontal: theme.spacing.unit * 2,
			width: 600,
		}
	});

	return (
		<View style={styles.root}>
			<View style={styles.menuColumn}>
				<ScrollView>
					<SafeAreaView>
						<SettingsPageList pages={pages} name={mainRoute.name} groupSortOrder={groupSortOrder} />
					</SafeAreaView>
				</ScrollView>
			</View>
			<ScrollView style={styles.contentColumn} contentContainerStyle={styles.contentWrapper}>
				<SafeAreaView>
					{pageObj ? <SettingsPageDesktop filter={filter} {...pageObj} {...props} /> : null}
				</SafeAreaView>
			</ScrollView>
		</View>
	);
};

SettingsLayoutDesktop.displayName = 'SettingsLayoutDesktop';

export default SettingsLayoutDesktop;
