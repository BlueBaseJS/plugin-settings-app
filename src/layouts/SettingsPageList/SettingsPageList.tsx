import { Icon, List, NavigationOptions } from '@bluebase/components';
import {
	resolveThunk,
	useBlueBase,
	useComponent,
	useIntl,
	useNavigation,
	useTheme,
} from '@bluebase/core';

import React from 'react';
import { SettingsPageProps } from '../SettingsPage';
import { openBrowserAsync } from 'expo-web-browser';

export interface SettingsPageListProps {
	name: string;
	pages: SettingsPageProps[];
}

function getTitle(options: NavigationOptions) {
	return (options as any).drawerLabel || options.title || options.headerTitle;
}

function getIcon(options: NavigationOptions) {
	const icon = (options as any).drawerIcon;

	if (!icon) {
		return;
	}

	if (typeof icon === 'function') {
		return icon();
	}

	if (icon && typeof icon.type === 'string') {
		return <List.Icon {...icon} />;
	}
}

export const SettingsPageList = (props: SettingsPageListProps) => {
	const { name, pages } = props;

	const intl = useIntl();
	const BB = useBlueBase();
	const { theme } = useTheme();
	const navigation = useNavigation();
	const contextBundle = { navigation, screenProps: { BB, intl, theme } };

	const { __ } = intl;
	const { navigate, state } = navigation;

	const HeaderComponent = useComponent(`${name}RootPageHeader`, 'Noop');
	const FooterComponent = useComponent(`${name}RootPageFooter`, 'Noop');

	return (
		<React.Fragment>
			<HeaderComponent />
			<List>
				{pages.map(page => {
					const { name: pageName, browserParams, right, url } = page;

					const options = resolveThunk(page.options || {}, contextBundle);

					const title = getTitle(options);
					const left = getIcon(options);
					const onPress = page.onPress ? page.onPress : () => navigate(pageName, state.params);

					const openUrl = () => openBrowserAsync(url!, browserParams);
					const openUrlIcon = <Icon name="open-in-new" size={20} color={theme.palette.text.icon} />;

					return (
						<List.Item
							key={pageName}
							onPress={url ? openUrl : onPress}
							title={__(title)}
							left={left}
							right={url ? openUrlIcon : right}
						/>
					);
				})}
			</List>
			<FooterComponent />
		</React.Fragment>
	);
};

export default SettingsPageList;
