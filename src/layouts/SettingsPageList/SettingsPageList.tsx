import { Icon, List, StackNavigationOptions, StatefulComponent } from '@bluebase/components';
import {
	resolveThunk,
	useBlueBase,
	useComponent,
	useFilter,
	useIntl,
	useNavigation,
	useTheme,
} from '@bluebase/core';
import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';

import { SettingsPageProps } from '../SettingsPage';

export interface SettingsPageListProps {
	filter?: string;
	name: string;
	pages: SettingsPageProps[];
}

function getTitle(options: StackNavigationOptions) {
	return (options as any).drawerLabel || options.title || options.headerTitle;
}

function getIcon(options: StackNavigationOptions) {
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
	const { navigate, route } = navigation;

	const HeaderComponent = useComponent(`${name}RootPageHeader`, 'Noop');
	const FooterComponent = useComponent(`${name}RootPageFooter`, 'Noop');

	const listItems = pages.map(page => {
		const { name: pageName, browserParams, right, url } = page;

		const options = resolveThunk(page.options || {}, contextBundle);

		const title = getTitle(options);
		const left = getIcon(options);
		const onPress = page.onPress ? page.onPress : () => navigate(pageName, route.params);

		const openUrl = () => openBrowserAsync(url!, browserParams);
		const openUrlIcon = <Icon name="open-in-new" size={20} color={theme.palette.text.icon} />;

		return {
			Component: List.Item,
			key: pageName,
			left,
			onPress: url ? openUrl : onPress,
			right: url ? openUrlIcon : right,
			title: __(title),
		};
	});

	const { loading, value: items, error } = useFilter(`${name}.settings.list.items`, listItems);

	return (
		<React.Fragment>
			<HeaderComponent />
			<StatefulComponent loading={loading} error={error} data={items}>
				<List>
					{items.map(({ Component, key, ...rest }, index) => (
						<Component key={key || index} {...rest} />
					))}
				</List>
			</StatefulComponent>
			<FooterComponent />
		</React.Fragment>
	);
};

export default SettingsPageList;
