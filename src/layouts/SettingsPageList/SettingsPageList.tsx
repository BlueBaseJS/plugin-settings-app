import { List, NavigationOptions } from '@bluebase/components';
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
					const options = resolveThunk(page.options || {}, contextBundle);

					const title = getTitle(options);
					const left = getIcon(options);
					const onPress = page.onPress ? page.onPress : () => navigate(page.name, state.params);

					return (
						<List.Item
							key={page.name}
							onPress={onPress}
							title={__(title)}
							left={left}
							right={page.right}
						/>
					);
				})}
			</List>
			<FooterComponent />
		</React.Fragment>
	);
};

export default SettingsPageList;
