import { ListItem } from '@bluebase/components';
import { NavigationActions } from '@bluebase/core/dist/components';
import React from 'react';

export interface ListItemProps {
	onPress: () => void;
	left: string;
}
export interface ListItemState {
	title: string
}


export class SettingsTaskbar extends React.PureComponent<ListItemProps, ListItemState> {

	constructor(props: ListItemProps) {
		super(props);
		this.state = {
			title: '',
		};

	}

	render() {
		const { onPress, left } = this.props;
		return (
			<NavigationActions>
				{(navigation) => {
					return (
						<>
							<ListItem
								onPress={onPress}
								// selected={navigation.state.params.selected}
								left={left}
								title={this.state.title}
								{...this.props}
							/>
						</>
					);
				}}
			</NavigationActions>
		);
	}
}

