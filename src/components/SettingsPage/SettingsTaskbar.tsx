import { ListItem, NavigationActionsObject } from '@bluebase/components';

import { NavigationActions, } from '@bluebase/core/dist/components';
import React from 'react';

export interface SettingsTaskbarProps {
	onPress: () => void;
	left: string;
}


export const SettingsTaskbar = (props: SettingsTaskbarProps) => {
	const { onPress, left } = props;
	return (
		<NavigationActions>
			{(navigation) => {
				console.log(navigation);
				return (
					<>
						<ListItem
							onPress={onPress}
							// selected={navigation.state.params.selected}
							left={left}
							title=""
							{...props}
						/>
					</>
				);
			}}
		</NavigationActions>
	);
}

SettingsTaskbar.navigationOptions = ({ navigation }: { navigation: NavigationActionsObject }) => {
	return navigation;
};

