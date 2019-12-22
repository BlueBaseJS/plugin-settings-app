import { List, Switch } from '@bluebase/components';
import { useBlueBase, useConfig, useIntl, useTheme } from '@bluebase/core';

import React from 'react';

export const DarkModeSetting = () => {
	const { __ } = useIntl();
	const { theme, changeTheme } = useTheme();
	const [themeName] = useConfig('theme.name');
	const BB = useBlueBase();

	async function toggleDarkMode() {
		const altTheme = await BB.Themes.resolveAlternate(themeName);
		changeTheme(altTheme.key);
	}

	return (
		<List.Item
			left={<List.Icon name="brightness-3" />}
			title={__('Dark Mode')}
			description={__('Change to Dark Mode')}
			onPress={toggleDarkMode}
			right={
				<Switch checked={theme.mode === 'dark'} onValueChange={toggleDarkMode} testID={themeName} />
			}
		/>
	);
};

DarkModeSetting.displayName = 'DarkModeSetting';
