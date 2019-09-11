import { ListItem, NavigationActionsObject } from '@bluebase/components';

import React from 'react';

export interface SettingsTaskbarProps {
	onPress: () => void;
	left: string;
	navigation: NavigationActionsObject
}


export interface SettingsTaskbarState {

}

export const SettingsPageTaskbarItem = (props: SettingsTaskbarProps) => {
	// console.log('props', props);

	// activeRoute = (pathname:string) => {

	// 	return (this.props.navigation.navigate.state.source.location.pathname.indexOf(routeName) > -1 ? true : false
	// 	);
	// }

	const { onPress, left } = props;

	// render() {
	return (
		<>
			<ListItem
				onPress={onPress}
				selected={this.activeRoute(prop.navigation.source.location.pathname)}
				left={left}
				title=""
				{...props}
			/>
		</>

	);
	// }
}


