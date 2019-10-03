import { Dialog, Divider, List, View, Text } from '@bluebase/components';
import { IntlContext, IntlContextData } from '@bluebase/core';
import { Terms } from '../Terms';
import React from 'react';

export class TermSettingList extends React.PureComponent {

			static contextType = IntlContext;

			readonly state = {
			visible: false
			};

			private values = [{
				description: 'Click here for terms and conditions.',
				label: 'Terms',
				value: 'auto', 
			}];

			toggleDialog = () => this.setState({ visible: !this.state.visible });

			onPress = (value: string) => () => {
			const { changeDirection }: IntlContextData = (this as any).context;

			changeDirection(value as any);
			this.toggleDialog();
			}
			renderDialog = () => {

			return (
			<Dialog
				visible={this.state.visible}
				onDismiss={this.toggleDialog}
			>

				{this.values.map(item => {


					return (
						<View testID="test-listItem" key={item.value} style={{padding: 10}}>
							<Text style={{paddingBottom: 4, fontWeight: 'bold'}}>Terms</Text>
							<Divider/>
							<Terms/>
						</View>
					);
				})}
			</Dialog>
		);
		}
			render() {
			const { __, direction }: IntlContextData = (this as any).context;
			const current = this.values.find(v => v.value === direction) || this.values[0];

			return (
			<React.Fragment>
				{this.renderDialog()}
				<List.Item
					left={<List.Icon name={'file-document'} />}
					title={__('Terms')}
					description={__(current.description)}
					onPress={this.toggleDialog}
				/>
			</React.Fragment>
		);
		}
}
