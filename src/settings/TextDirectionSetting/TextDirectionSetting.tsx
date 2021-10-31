import { Dialog, Divider, List, View } from '@bluebase/components';
import { useIntl } from '@bluebase/core';
import React, { useState } from 'react';

const values = [
	{
		description: 'Text Direction will automatically changed based on selected language.',
		label: 'Auto',
		value: 'auto',
	},
	{
		description: 'Text will be displayed from Left to Right',
		label: 'Left to Right',
		value: 'ltr',
	},
	{
		description: 'Text will be displayed from Right to Left',
		label: 'Right to Left',
		value: 'rtl',
	},
];

export const TextDirectionSetting = () => {
	const { __, direction, rtl, changeDirection } = useIntl();

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	const current = values.find(v => v.value === direction) || values[0];

	const select = (value: string) => () => {
		changeDirection(value as any);
		toggle();
	};

	return (
		<React.Fragment>
			<List.Item
				left={
					<List.Icon name={rtl ? 'format-textdirection-r-to-l' : 'format-textdirection-l-to-r'} />}
				title={__('Text Direction')}
				description={__(current.description)}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Text Direction')}</List.Subheader>

				{values.map(item => {
					return (
						<View testID="test-listItem" key={item.value}>
							<Divider />
							<List.Item
								title={__(item.label)}
								description={__(item.description)}
								onPress={select(item.value)}
								selected={direction === item.value}
							/>
						</View>
					);
				})}
			</Dialog>
		</React.Fragment>
	);
};
