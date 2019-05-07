import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { Divider, List, } from '@bluebase/components';
import React from 'react';

const ThemeDarkModeSwitch = getComponent('ThemeDarkModeSwitch');
const ThemeSelectionSetting = getComponent('ThemeSelectionSetting', 'Noop');

export class ThemeSettingsList extends React.PureComponent {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const hasDarkMode = BB.Configs.getValue('plugin.settings-app.appearance.theme.dark-mode');
		const hasThemeSelection = BB.Configs.getValue('plugin.settings-app.appearance.theme.selection');

		const items = [
			hasDarkMode && (
				<List.Item
					left={<List.Icon name="brightness-3" />}
					title="Dark Mode"
					description="Change to Dark Mode"
					right={<ThemeDarkModeSwitch />}
				/>
			),
			hasThemeSelection && <ThemeSelectionSetting />,
		]
		.filter(x => !!x);

		return (
			<List>
				{items.map((item, index) => (
					<React.Fragment>
						{item}
						{(index < items.length - 1) ? <Divider inset /> : null}
					</React.Fragment>
				))}
			</List>
		);
	}
}