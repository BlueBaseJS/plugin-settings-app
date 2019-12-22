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
			<Dialog visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Available Themes')}</List.Subheader>
				<Divider />
				{themes.map(item => {
					return (
						<List.Item
							title={__(item[1].name)}
							onPress={select(item[0])}
							key={item[0]}
							selected={theme.name === item[0]}
						/>
					);
				})}
			</Dialog>
		</React.Fragment>
	);
};
