import { IntlContext, IntlContextData, getComponent } from '@bluebase/core';
import { List } from '@bluebase/components';
import React from 'react';

const DarkModeSwitch = getComponent('DarkModeSwitch');

export class DarkModeSetting extends React.PureComponent {

			static contextType = IntlContext;

			render() {
			const { __ }: IntlContextData = this.context;

			return (
			<List.Item
				key="dark-mode"
				left={<List.Icon name="brightness-3" />}
				title={__('Dark Mode')}
				description={__('Change to Dark Mode')}
				right={<DarkModeSwitch />}
			/>
		);
		}
}
