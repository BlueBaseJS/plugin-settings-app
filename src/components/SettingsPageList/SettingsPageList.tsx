import { List, NavigationActions } from '@bluebase/components';
import { getComponent, resolveThunk } from '@bluebase/core';
import React from 'react';
import { SettingsPageProps } from '../SettingsPage/SettingsPage';

const SettingsPageListHeader = getComponent('SettingsPageListHeader', 'Noop');
const SettingsPageListFooter = getComponent('SettingsPageListFooter', 'Noop');

export interface SettingsPageListProps {
	pages: SettingsPageProps[]
}

export const SettingsPageList = (props: SettingsPageListProps) => (
	<React.Fragment>
		<SettingsPageListHeader />
		<SettingsPageListContent {...props} />
		<SettingsPageListFooter />
	</React.Fragment>
);

export const SettingsPageListContent = (props: SettingsPageListProps) => (
	<List>
		<NavigationActions>
			{({ navigate }) => (props.pages || []).map(page => {
				const options = resolveThunk(page.navigationOptions || {});

				const title = options.title || options.headerTitle;
				const onPress = () => navigate(page.name);

				return (
					<List.Item
						key={page.name}
						onPress={onPress}
						title={title}
					/>);
			})}
		</NavigationActions>
	</List>
);
