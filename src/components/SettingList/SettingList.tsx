import { Divider, View } from '@bluebase/components';

import React from 'react';
import { getComponent } from '@bluebase/core';

export interface SettingListProps {
	items: Array<string | React.ComponentType<any>>;
}

export const SettingList = ({ items }: SettingListProps) => {
	return (
		<View>
			{items.map((item, index) => {
				const Component = getComponent(item, 'EmptyState');
				return (
					<React.Fragment key={index}>
						<Component />
						{index < items.length - 1 ? <Divider inset /> : null}
					</React.Fragment>
				);
			})}
		</View>
	);
};
