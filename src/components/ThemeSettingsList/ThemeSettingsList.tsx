import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { Divider, List, } from '@bluebase/components';

import React from 'react';
import { View } from 'react-native';

const DarkModeSetting = getComponent('DarkModeSetting', 'Noop');
const ThemeSelectionSetting = getComponent('ThemeSelectionSetting', 'Noop');

export class ThemeSettingsList extends React.PureComponent {

			static contextType = BlueBaseContext;

			render() {

			const BB: BlueBase = this.context;

			const hasDarkMode = BB.Configs.getValue('plugin.settings-app.general.appearance.dark-mode');
			const hasThemeSelection = BB.Configs.getValue('plugin.settings-app.general.appearance.theme.selection');

			const items = [
			hasDarkMode && <DarkModeSetting />,
			hasThemeSelection && <ThemeSelectionSetting />,
		]
		.filter(x => !!x);

			return (
			<View style={{ display:'flex',flex:1,paddingRight:25}}>
			<List >
				{items.map((item, index) => (
					<React.Fragment key={index}>
						{item}
						{(index < items.length - 1) ? <Divider inset /> : null}
					</React.Fragment>
				))}
			</List>
			</View>
		);
		}
}