import { Body1, View } from '@bluebase/components';
import { Theme, ThemeContext } from '@bluebase/core';
import React from 'react';

export interface ThemeDemoProps {
	children?: React.ReactNode;
}

export class ThemeDemo extends React.PureComponent<ThemeDemoProps> {

	render() {
		const { children } = this.props;

		return (
			<ThemeContext.Consumer children={({ theme }: { theme: Theme }) => {

				const mainStyle = {
					backgroundColor: theme.palette.background.default,
					padding: theme.spacing.unit
				};

				return (
					<View style={mainStyle}>
						<Body1>
							{theme.name}
						</Body1>
						{children}
					</View>
				);
			}} />
		);
	}
}
