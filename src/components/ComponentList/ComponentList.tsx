import { BlueBase, BlueBaseContext } from '@bluebase/core';
import { Divider, ListItem, View } from '@bluebase/components';
import React from 'react';

export class ComponentList extends React.PureComponent {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const components = BB.Components.filter(p => !!p);

		return (
			<View>
				{Object.values(components).map((component, index) => (
					<React.Fragment>
						<ListItem
							title={component.key}
						/>
						{(index < Object.keys(components).length - 1) && <Divider />}
					</React.Fragment>
				))}
			</View>
		);
	}
}