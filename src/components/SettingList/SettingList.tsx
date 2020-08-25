import { Divider, List } from '@bluebase/components';
import { getComponent, useBlueBase } from '@bluebase/core';

import React from 'react';

export interface SettingListProps {
	items: Array<string | React.ComponentType<any>>;
}

export const SettingList = (props: SettingListProps) => {
	const BB = useBlueBase();
	const [Items, setItems] = React.useState(props.items);
	React.useEffect(() => {
		setItems(props.items);
	}, [props.items]);

	const items = Items.map((name) => {
		if (typeof name === 'string') {
			return BB.Components.has(name) ? name : undefined;
		}

		return name;
	})
		.filter((x) => !!x) as Array<string | React.ComponentType<any>>;

	return (
		<List>
			{items.map((item, index) => {
				return (
					<React.Fragment key={index}>
						{React.createElement(getComponent(item, 'EmptyState'))}
						{index < items.length - 1 ? <Divider inset /> : null}
					</React.Fragment>
				);
			})}
		</List>
	);
};
