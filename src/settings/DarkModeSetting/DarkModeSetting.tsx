import { Dialog, Divider, List } from '@bluebase/components';
import React, { useState } from 'react';
import { useConfig, useIntl, useTheme } from '@bluebase/core';

import { Configs } from '@bluebase/core/dist/Configs';

const ModeName: { [key: string]: string } = {
	auto: 'Light',
	light: 'Light',
	dark: 'Dark',
};

export const DarkModeSetting = () => {
	const { __ } = useIntl();
	const { changeMode } = useTheme();
	const [themeMode] = useConfig('theme.mode');

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	const changeModeSetting = (mode: Configs['theme.mode']) => () => changeMode(mode);


	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="brightness-3" />}
				title={ModeName[themeMode] === 'Dark' ? __('Dark Mode') : __('Light Mode')}
				description={__(ModeName[themeMode])}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Mode')}</List.Subheader>
				<Divider />
				<List.Item
					title={__(ModeName.light)}
					onPress={changeModeSetting('light')}
					selected={themeMode === ('light')}
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
