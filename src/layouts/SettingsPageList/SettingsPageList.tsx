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
	groupSortOrder?: string[];
}

// function getTitle(options: StackNavigationOptions) {
// 	return (options as any).drawerLabel || options.title || options.headerTitle;
// }

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

	const { __, locale } = intl;
	const { navigate, route } = navigation;

	const HeaderComponent = useComponent(`${name}RootPageHeader`, 'Noop');
	const FooterComponent = useComponent(`${name}RootPageFooter`, 'Noop');

	const listItems = pages.map(page => {
		const { name: pageName, browserParams, right, url } = page;

		const options: any = resolveThunk(page.options || {}, contextBundle);

		const title = options.title;
		const left = getIcon(options);
		const onPress = page.onPress ? page.onPress : () => navigate('Root', {
			screen: pageName,
			params: route.params,
		});

		const openUrl = () => openBrowserAsync(url!, browserParams);
		const openUrlIcon = <Icon name="open-in-new" size={20} color={theme.palette.text.icon} />;

		return {
			Component: List.Item,
			key: pageName,
			left,
			onPress: url ? openUrl : onPress,
			right: url ? openUrlIcon : right,
			title,
			group: page.group,
		};
	});

	const { loading, value: items, error } = useFilter(`${name}.settings.list.items`, listItems);

	// Make groups
	const groupSortOrder = props.groupSortOrder || [];
	const groups: any[][] = groupSortOrder.map(() => []);
	const ungrouped: any[] = [];

	items.forEach((item: any) => {
		if (item.group) {
			// Find group index based on sortOrder, if not found, push group in sortOrder and use that index
			let index = groupSortOrder.indexOf(item.group);
			if (index === -1) {
				groupSortOrder.push(item.group);
				groups.push([]);
				index = groupSortOrder.length - 1;
			}

			groups[index].push(item);
		}
		else {
			ungrouped.push(item);
		}
	});

	return (
		<React.Fragment>
			<HeaderComponent />
			<StatefulComponent loading={loading} error={error} data={items}>
				<List key={locale}>
					{ungrouped.map(({ Component, key, title, ...rest }, index) => (
						<Component key={key || index} title={__(title)} {...rest} />
					))}

					{groupSortOrder.map((group, index) => groups[index].length > 0 && (
						<React.Fragment key={group}>
							<List.Subheader>{__(group)}</List.Subheader>
							{groups[index].map(({ Component, key, title, ...rest }: any, index: number) => (
								<Component key={key || index} title={__(title)} {...rest} />
							))}
						</React.Fragment>
					))}
				</List>
			</StatefulComponent>
			<FooterComponent />
		</React.Fragment>
	);
};

export default SettingsPageList;
