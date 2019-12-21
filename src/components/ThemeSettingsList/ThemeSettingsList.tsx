import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { Divider, List } from '@bluebase/components';

import DarkModeSetting from '../../settings/DarkModeSetting';
import React from 'react';

const ThemeSelectionSetting = getComponent('ThemeSelectionSetting', 'Noop');

export class ThemeSettingsList extends React.PureComponent {
	static contextType: React.Context<BlueBase> = BlueBaseContext;

	render() {
		const BB: BlueBase = this.context;

		const hasDarkMode = BB.Configs.getValue('plugin.settings-app.general.appearance.dark-mode');
		const hasThemeSelection = BB.Configs.getValue(
			'plugin.settings-app.general.appearance.theme.selection'
		);

		const items = [
			hasDarkMode && <DarkModeSetting />,
			hasThemeSelection && <ThemeSelectionSetting />,
		].filter(x => !!x);

		return (
			<List>
				{items.map((item, index) => (
					<React.Fragment key={index}>
						{item}
						{index < items.length - 1 ? <Divider inset /> : null}
					</React.Fragment>
				))}
			</List>
		);
	}
}
