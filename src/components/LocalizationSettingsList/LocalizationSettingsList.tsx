import { BlueBase, BlueBaseContext } from '@bluebase/core';
import { Divider, List } from '@bluebase/components';

import LanguageSetting from '../../settings/LanguageSetting';
import React from 'react';
import TextDirectionSetting from '../../settings/TextDirectionSetting';

export class LocalizationSettingsList extends React.PureComponent {
	static contextType: React.Context<BlueBase> = BlueBaseContext;

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
