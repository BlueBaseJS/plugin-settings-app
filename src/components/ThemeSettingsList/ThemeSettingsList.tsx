import { BlueBase, BlueBaseContext, Theme, getComponent } from '@bluebase/core';
import { Divider, List } from '@bluebase/components';
import { View, ViewStyle } from 'react-native';

import React from 'react';

const DarkModeSetting = getComponent('DarkModeSetting', 'Noop');
const ThemeSelectionSetting = getComponent('ThemeSelectionSetting', 'Noop');

export interface ThemeSettingStyles {
	/** Status text styles */
	ThemeButton: ViewStyle;
}

export interface ThemeSettingProps {
	/** Status text styles */
	styles: ThemeSettingStyles;
}

export class ThemeSettingsList extends React.PureComponent<ThemeSettingProps> {
	static contextType = BlueBaseContext;

	static defaultStyles = (_theme: Theme): ThemeSettingStyles => ({
		ThemeButton: {
			display: 'flex',
			flex: 1,
			paddingRight: 25,
		},
	})

	render() {
		const BB: BlueBase = this.context;

		const hasDarkMode = BB.Configs.getValue('plugin.settings-app.general.appearance.dark-mode');
		const hasThemeSelection = BB.Configs.getValue('plugin.settings-app.general.appearance.theme.selection');

		const items = [hasDarkMode && <DarkModeSetting />, hasThemeSelection && <ThemeSelectionSetting />].filter(x => !!x);

		return (
			<View style={this.props.styles.ThemeButton}>
				<List>
					{items.map((item, index) => (
						<React.Fragment key={index}>
							{item}
							{index < items.length - 1 ? <Divider inset /> : null}
						</React.Fragment>
					))}
				</List>
			</View>
		);
	}
}
