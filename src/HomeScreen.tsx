import { ScrollView, StatusBar, View } from 'react-native';
import { Button } from '@bluebase/components';
import React from 'react';
// tslint:disable: jsx-no-lambda max-line-length

export class HomeScreen extends React.Component<any> {
	render() {
		return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
				<ScrollView style={{ flex: 1 }}>
					<Button
						title="Settings"
						onPress={() => this.props.navigation.navigate('Settings')}
					/>
				</ScrollView>
      </View>
		);
	}
}
