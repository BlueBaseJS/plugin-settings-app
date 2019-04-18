import { List, NavigationActions, Noop } from '@bluebase/components';
import { getComponent, resolveThunk } from '@bluebase/core';
import React from 'react';
import { SettingsPageProps } from '../SettingsPage/SettingsPage';

export interface SettingsPageListProps {
	name: string;
	pages: SettingsPageProps[];
}


export class SettingsPageList extends React.PureComponent<SettingsPageListProps> {

	private HeaderComponent?: React.ComponentType<any>;
	private FooterComponent?: React.ComponentType<any>;

	componentWillMount() {
		const { name } = this.props;

		if (name) {
			this.HeaderComponent = getComponent(`${name}RootPageHeader`, 'Noop');
			this.FooterComponent = getComponent(`${name}RootPageFooter`, 'Noop');
		}
	}

	render() {

		const HeaderComponent = this.HeaderComponent || Noop;
		const FooterComponent = this.FooterComponent || Noop;

		return (
			<React.Fragment>
				<HeaderComponent />
				<List>
					<NavigationActions>
						{({ navigate }) => (this.props.pages || []).map(page => {
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
				<FooterComponent />
			</React.Fragment>
		);
	}
}
