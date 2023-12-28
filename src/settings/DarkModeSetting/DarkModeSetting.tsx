import { Dialog, Divider, List } from '@bluebase/components';
import { useConfig, useIntl, useTheme } from '@bluebase/core';
import { Configs } from '@bluebase/core/dist/Configs';
import React, { useState } from 'react';

const ModeName: { [key: string]: string } = {
	auto: 'Auto',
	dark: 'Dark',
	light: 'Light',
};

export const DarkModeSetting = () => {
	const { __ } = useIntl();
	const { changeMode } = useTheme();
	const [themeMode] = useConfig('theme.mode');

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	const changeModeSetting = (mode: Configs['theme.mode']) => () => changeMode(mode);

	let title = 'User Preferences';
	let description = 'Appearance is detected automatically based on your device settings.';

	if (themeMode === 'dark') {
		title = 'Dark Mode';
		description = 'Dark mode is always on.';
	}

	if (themeMode === 'light') {
		title = 'Light Mode';
		description = 'Light mode is always on.';
	}

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="brightness-3" />}
				title={__(title)}
				description={__(description)}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Mode')}</List.Subheader>
				<Divider />
				<List.Item
					title={__(ModeName.auto)}
					onPress={changeModeSetting('auto')}
					selected={themeMode === 'auto'}
				/>
				<List.Item
					title={__(ModeName.light)}
					onPress={changeModeSetting('light')}
					selected={themeMode === 'light'}
				/>
				<List.Item
					title={__(ModeName.dark)}
					onPress={changeModeSetting('dark')}
					selected={themeMode === 'dark'}
				/>
			</Dialog>
		</React.Fragment>
	);
};

DarkModeSetting.displayName = 'DarkModeSetting';
