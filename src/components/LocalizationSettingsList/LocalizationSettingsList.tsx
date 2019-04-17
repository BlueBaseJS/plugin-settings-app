import { Divider, DynamicIcon, ListItem, View } from '@bluebase/components';
import { IntlContext, IntlContextData, getComponent } from '@bluebase/core';
import { Platform } from 'react-native';
import React from 'react';

const DirectionPicker = getComponent('DirectionPicker', 'Noop');
const LocalePicker = getComponent('LocalePicker', 'Noop');

export class LocalizationSettingsList extends React.PureComponent {

	static contextType = IntlContext;

	render() {

		const { __, rtl }: IntlContextData = this.context;

		return (
			<View>
				<ListItem
					left={<DynamicIcon type="icon" name="translate" size={24} />}
					title="Content Direction"
					description="Direction of the app's content"
					right={<DirectionPicker />}
				/>
				{Platform.OS !== 'android' && <Divider inset />}
				<ListItem
					left={
						<DynamicIcon
							type="icon"
							name={!!rtl ? 'format-textdirection-r-to-l' : 'format-textdirection-l-to-r'}
							size={24}
						/>
					}
					title={__('Language')}
					description={__('You can change the app\'s default language from here')}
					right={<LocalePicker />}
				/>
			</View>
		);
	}
}