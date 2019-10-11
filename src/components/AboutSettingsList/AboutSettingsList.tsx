// import { BlueBase, BlueBaseContext, IntlConsumer, IntlContextData, Theme } from '@bluebase/core';
// import { Divider, Icon, List, View } from '@bluebase/components';
// import { I18nManager, TextStyle } from 'react-native';

// import { ExternalLink } from '../ExternalLink';
import { BlueBase, BlueBaseContext, getComponent } from '@bluebase/core';
import { Divider, List } from '@bluebase/components';
import React from 'react';

const TextDirectionSetting = getComponent('TextDirectionSetting', 'Noop');
const LanguageSetting = getComponent('LanguageSetting', 'Noop');

export class AboutSettingsList extends React.PureComponent {
	static contextType = BlueBaseContext;

	render() {
		const BB: BlueBase = this.context;

		const hasLanguageSetting = BB.Configs.getValue(
			'plugin.settings-app.general.language.selection'
		);
		const hasTextDirection = BB.Configs.getValue(
			'plugin.settings-app.general.language.text-direction'
		);

		const items = [
			hasLanguageSetting && <LanguageSetting />,
			hasTextDirection && <TextDirectionSetting />,
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
