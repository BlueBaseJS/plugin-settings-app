import { BlueBase, BlueBaseContext, IntlContext, IntlContextData } from '@bluebase/core';
import { Picker } from '@bluebase/components';
import React from 'react';

export class DirectionPicker extends React.PureComponent {

	static contextType = BlueBaseContext;

	render() {
		const BB: BlueBase = (this as any).context;

		return (
			<IntlContext.Consumer>
			{({ changeDirection }: IntlContextData) => (
				<Picker
					selectedValue={BB.Configs.getValue('direction')}
					style={{ width: 150 }}
					onValueChange={changeDirection}
				>
					<Picker.Item label="Auto" value="auto" />
					<Picker.Item label="Left to Right" value="ltr" />
					<Picker.Item label="Right to Left" value="rtl" />
				</Picker>
			)}
			</IntlContext.Consumer>
		);
	}
}
