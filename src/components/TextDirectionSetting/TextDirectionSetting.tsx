import { Dialog, Divider, List, View } from '@bluebase/components';
import { IntlContext, IntlContextData } from '@bluebase/core';

import React from 'react';

export class TextDirectionSetting extends React.PureComponent {

			static contextType = IntlContext;

			readonly state = {
			visible: false
		};

			private values = [{
			description: 'Text Direction will automatically changed based on selected language.',
			label: 'Auto',
			value: 'auto',
		}, {
			description: 'Text will be displayed from Left to Right',
			label: 'Left to Right',
			value: 'ltr',
		}, {
			description: 'Text will be displayed from Right to Left',
			label: 'Right to Left',
			value: 'rtl',
		}];

			toggleDialog = () => this.setState({ visible: !this.state.visible });

			onPress = (value: string) => () => {
			const { changeDirection }: IntlContextData = (this as any).context;

			changeDirection(value as any);
			this.toggleDialog();
		}
			renderDialog = () => {
			const { __, direction }: IntlContextData = (this as any).context;

			return (
			<Dialog
				visible={this.state.visible}
				onDismiss={this.toggleDialog}
			>
				<List.Subheader>{__('Text Direction')}</List.Subheader>

				{this.values.map(item => {


					return (
						<View testID="test-listItem" key={item.value}>
							<Divider />
							<List.Item
								title={__(item.label)}
								description={__(item.description)}
								onPress={this.onPress(item.value)}
								selected={direction === item.value}
							/>
						</View>
					);
				})}
			</Dialog>
		);
		}
			render() {
			const { __, direction, rtl }: IntlContextData = (this as any).context;

			const current = this.values.find(v => v.value === direction) || this.values[0];

			return (
			<React.Fragment>
				{this.renderDialog()}
				<List.Item
					left={<List.Icon name={!!rtl ? 'format-textdirection-r-to-l' : 'format-textdirection-l-to-r'} />}
					title={__('Text Direction')}
					description={__(current.description)}
					onPress={this.toggleDialog}
				/>
			</React.Fragment>
		);
		}
}
