import { ListItem, NavigationActions } from '@bluebase/components';
import React from 'react';
import { SettingsPageProps } from '../SettingsPage/SettingsPage';
import { resolveThunk } from '@bluebase/core';

export interface SettingsPageListProps {
	pages: SettingsPageProps[]
}

export class SettingsPageList extends React.PureComponent<SettingsPageListProps> {

	render() {
		return (
			<NavigationActions>
				{({ navigate }) => {

					return (this.props.pages || []).map(page => {
						const options = resolveThunk(page.navigationOptions || {});

						const title = options.title || options.headerTitle;
						const onPress = () => navigate(page.name);

						return (
							<ListItem
								key={page.name}
								onPress={onPress}
								title={title}
							/>
						);

					});

				}}
			</NavigationActions>
		);
	}
}