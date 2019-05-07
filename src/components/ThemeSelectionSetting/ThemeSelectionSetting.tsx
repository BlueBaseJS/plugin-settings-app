import {
	BlueBase,
	BlueBaseConsumer,
	BlueBaseContext,
	IntlConsumer,
	RenderPropChildren,
	ThemeConsumer,
	renderChildrenWithProps,
} from '@bluebase/core';
import { Dialog, List } from '@bluebase/components';
import React from 'react';

const AllBlueBase = ({ children }: { children: RenderPropChildren }) => (
	<BlueBaseConsumer>
	{(BB: BlueBase) => (
		<ThemeConsumer>
		{(theme) => (
			<IntlConsumer>
			{(intl) => renderChildrenWithProps(children, { BB, theme, intl })}
			</IntlConsumer>
		)}
		</ThemeConsumer>
	)}
	</BlueBaseConsumer>
);

export class ThemeSelectionSetting extends React.PureComponent {

	static contextType = BlueBaseContext;

	readonly state = {
		visible: false
	};

	toggleDialog = () => this.setState({ visible: !this.state.visible });

	renderDialog = () => {

		const BB: BlueBase = this.context;
		const themes = [...BB.Themes.entries()];

		return (
			<AllBlueBase>
			{({ intl, theme }) => (
				<Dialog
					visible={this.state.visible}
					onDismiss={this.toggleDialog}
				>
					<List>
						<List.Subheader>{intl.__('Available Themes')}</List.Subheader>
						{themes.map(item => {

							const onPress = () => {
								theme.changeTheme(item[0]);
								this.toggleDialog();
							};
							return (
								<List.Item
									title={intl.__(item[1].name)}
									onPress={onPress}
									key={item[0]}
									selected={BB.Configs.getValue('theme.name') === item[0]}
								/>
							);
						})}
					</List>
				</Dialog>
			)}
			</AllBlueBase>
		);
	}
	render() {
		return (
			<AllBlueBase>
			{({ intl, theme }) => (
				<React.Fragment>
					{this.renderDialog()}
					<List.Item
						left={<List.Icon name="brush" />}
						title={intl.__('Theme')}
						description={intl.__(theme.theme.name)}
						onPress={this.toggleDialog}
					/>
				</React.Fragment>
			)}
			</AllBlueBase>
		);
	}
}
