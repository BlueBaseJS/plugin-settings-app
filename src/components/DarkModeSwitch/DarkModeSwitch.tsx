import { BlueBase, BlueBaseContext, ThemeContext, ThemeContextData } from '@bluebase/core';

import React from 'react';
import { Switch } from '@bluebase/components';

export class DarkModeSwitch extends React.PureComponent {
	static contextType: React.Context<BlueBase> = BlueBaseContext;

	toggleDarkMode = (changeTheme: ThemeContextData['changeTheme'], BB: BlueBase) => async () => {
		const theme = BB.Configs.getValue('theme.name');
		const altTheme = await BB.Themes.resolveAlternate(theme);
		changeTheme(altTheme.key);
	};

	render() {
		const BB: BlueBase = (this as any).context;

		return (
			<ThemeContext.Consumer>
				{({ changeTheme, theme }: ThemeContextData) => (
					<Switch
						// label="Dark Mode"
						// labelPlacement="start"
						checked={theme.mode === 'dark'}
						onValueChange={this.toggleDarkMode(changeTheme, BB)}
					/>
				)}
			</ThemeContext.Consumer>
		);
	}
}
