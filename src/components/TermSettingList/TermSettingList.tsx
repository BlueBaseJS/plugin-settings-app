import { Dialog, Divider, List, View, Text } from '@bluebase/components';
import { IntlContext, IntlContextData } from '@bluebase/core';
import { Terms } from '../Terms';
import React from 'react';
import Privacy from '../Privacy';

export class TermSettingList extends React.PureComponent {
	static contextType = IntlContext;

	readonly state = {
		visible: false,
		message: '',
	};

	private values = [
		{
			description: 'Click here for terms and conditions.',
			label: 'Terms',
			value: 'auto',
		},
	];

	toggleDialog = (value: any) => this.setState({ visible: !this.state.visible, message: value });

	onPress = (value: string) => () => {
		const { changeDirection }: IntlContextData = (this as any).context;

		changeDirection(value as any);
		this.toggleDialog('');
	};
	renderDialog = () => {
		return (
			<Dialog visible={this.state.visible} onDismiss={() => this.toggleDialog('')}>
				{this.values.map(item => {
					return (
						<View testID="test-listItem" key={item.value} style={{ padding: 10 }}>
							<Text style={{ paddingBottom: 20, fontWeight: 'bold' }}>{this.state.message}</Text>
							<Divider />
							{this.state.message === 'Terms and Conditions' ? <Terms /> : <Privacy />}
						</View>
					);
				})}
			</Dialog>
		);
	};
	render() {
		const { __, direction }: IntlContextData = (this as any).context;
		const current = this.values.find(v => v.value === direction) || this.values[0];

		return (
			<React.Fragment>
				{this.renderDialog()}
				<List.Item
					left={<List.Icon name={'file-document'} />}
					title={__('Terms and Conditions')}
					description={__(current.description)}
					onPress={() => this.toggleDialog('Terms and Conditions')}
				/>
				<List.Item
					left={<List.Icon name={'shield-check'} />}
					title={__('Privacy')}
					description={__('Click here for privacy settings')}
					onPress={() => this.toggleDialog('Privacy')}
				/>
			</React.Fragment>
		);
	}
}
