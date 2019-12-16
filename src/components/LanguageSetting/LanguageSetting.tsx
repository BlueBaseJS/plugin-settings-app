import { BlueBase, BlueBaseContext, IntlContext, IntlContextData } from '@bluebase/core';
import { Dialog, List } from '@bluebase/components';

import React from 'react';

export class LanguageSetting extends React.PureComponent {
	static contextType: React.Context<BlueBase> = BlueBaseContext;

	readonly state = {
		visible: false,
	};

	toggleDialog = () => this.setState({ visible: !this.state.visible });

	renderDialog = () => {
		const BB: BlueBase = (this as any).context;
		const localeOptions = BB.Configs.getValue('locale.options');

		return (
			<IntlContext.Consumer>
				{({ changeLocale, locale }: IntlContextData) => (
					<Dialog visible={this.state.visible} onDismiss={this.toggleDialog}>
						<List>
							{Object.keys(localeOptions).map(localeKey => {
								const onPress = () => changeLocale(localeKey);
								return (
									<List.Item
										title={localeOptions[localeKey]}
										onPress={onPress}
										key={localeKey}
										selected={locale === localeKey}
									/>
								);
							})}
						</List>
					</Dialog>
				)}
			</IntlContext.Consumer>
		);
	}
	render() {
		const BB: BlueBase = (this as any).context;
		const localeOptions = BB.Configs.getValue('locale.options');

		return (
			<IntlContext.Consumer>
				{({ __, locale }: IntlContextData) => (
					<React.Fragment>
						{this.renderDialog()}
						<List.Item
							left={<List.Icon name="translate" />}
							title={__('Language')}
							description={localeOptions[locale]}
							onPress={this.toggleDialog}
						/>
					</React.Fragment>
				)}
			</IntlContext.Consumer>
		);
	}
}
