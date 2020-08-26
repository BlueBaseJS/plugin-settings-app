import { Dialog, Divider, List } from '@bluebase/components';
import React, { useState } from 'react';
import { useBlueBase, useIntl, useTheme } from '@bluebase/core';

export const ThemeSelectionSetting = () => {
	const BB = useBlueBase();
	const { __ } = useIntl();
	const { theme, changeTheme } = useTheme();

	const themes = [...BB.Themes.entries()];

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	const select = (slug: string) => () => {
		changeTheme(slug);
		toggle();
	};

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="brush" />}
				title={__('Themes')}
				description={__(theme.name)}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Available Themes')}</List.Subheader>
				<Divider />
				{themes.map(([key, item]) => {
					return (
						<List.Item
							title={__(item.value.name)}
							onPress={select(key)}
							key={key}
							selected={theme.name === key}
						/>
					);
				})}
			</Dialog>
		</React.Fragment>
	);
};
