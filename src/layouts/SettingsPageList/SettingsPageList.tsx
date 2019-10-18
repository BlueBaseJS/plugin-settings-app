import { IntlContext, IntlContextData, getComponent, resolveThunk } from '@bluebase/core';
import { List, NavigationActions, NavigationOptions, Noop } from '@bluebase/components';

import React from 'react';
import { SettingsPageProps } from '../SettingsPage';

export interface SettingsPageListProps {
	name: string;
	pages: SettingsPageProps[];
}

export class SettingsPageList extends React.PureComponent<SettingsPageListProps> {
	static contextType = IntlContext;

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
		const { __ }: IntlContextData = this.context;

		const HeaderComponent = this.HeaderComponent || Noop;
		const FooterComponent = this.FooterComponent || Noop;

		return (
			<React.Fragment>
				<HeaderComponent />
				<List>
					<NavigationActions>
						{({ navigate, state }) =>
							(this.props.pages).map(page => {
								const options = resolveThunk(page.navigationOptions || {});

								const title = getTitle(options);
								const left = getIcon(options);
								const onPress = () => navigate(page.name, state.params);

								return (
									<List.Item key={page.name} onPress={onPress} title={__(title)} left={left} />
								);
							})
						}
					</NavigationActions>
				</List>
				<FooterComponent />
			</React.Fragment>
		);
	}
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

export default SettingsPageList;