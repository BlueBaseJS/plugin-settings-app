import { BlueBase, BlueBaseContext, Theme, isMobile } from '@bluebase/core';
import { Body2, Card, H5, List, ListItem, View } from '@bluebase/components';
import { Linking, LinkingStatic, Platform, StyleProp, TextStyle, ViewStyle } from 'react-native';

import React from 'react';

export interface SupportListStyles {
	root: StyleProp<ViewStyle>;
	callNowText: StyleProp<TextStyle>;
	callCenterClosedText: StyleProp<TextStyle>;
	pageContainer: ViewStyle;
	rowStyles: ViewStyle;
	headerStyles: ViewStyle;
	closeButton: ViewStyle;
	p1: ViewStyle;
	h2: ViewStyle;
	component: ViewStyle;
	textContainer: ViewStyle;
}

export interface SupportListItem {
	description?: string | any;
	leftIcon: string;
	rightIcon?: string;
	title: string;
	disabled?: boolean;
	href: string;
}

export interface SupportListProps {
	supportList?: SupportListItem[];
	styles?: Partial<SupportListStyles>;
}

export class SupportSettingList extends React.PureComponent<SupportListProps> {
	static contextType = BlueBaseContext;

	readonly state = {
		visible: false,
	};

	private values = [
		{
			description: 'Click here for support.',
			label: 'Support',
			value: 'auto',
		},
	];

	static defaultStyles = (theme: Theme) => ({
		callCenterClosedText: {
			color: theme.palette.error.main,
		},
		callNowText: {
			color: theme.palette.success.main,
		},
		component: {
			paddingTop: 30,
		},
		h2: {
			paddingBottom: 10,
			paddingTop: 11,
		},
		p1: {
			flexWrap: 'wrap',
			padding: 16,
		},

		headerStyles: {
			display: 'flex',
			flex: 1,
		},
		pageContainer: {
			marginBottom: 10,
		},
		root: {},
		rowStyles: {
			display: 'flex',
			flexDirection: 'row',
			padding: 16,
		},
		textContainer: {
			width: isMobile() ? (Platform.OS === 'web' ? '100vw' : '100%') : '100%',
		},
	});

	getCallSupportValues = () => {
		const BB: BlueBase = this.context;
		const styles = this.props.styles! as SupportListStyles;

		const opens = BB.Configs.getValue('usermanagement.call-center.opens');
		const closes = BB.Configs.getValue('usermanagement.call-center.closes');
		const phoneNumber = BB.Configs.getValue('usermanagement.call-center.number');

		const currentHour = new Date().getHours();

		const canCall = currentHour >= opens && currentHour <= closes ? true : false;

		const description = canCall ? (
			<Body2 style={styles.callNowText}>CALL NOW</Body2>
		) : (
			<Body2 style={styles.callCenterClosedText}>CALL CENTER CLOSED</Body2>
		);

		const onPress = () => this.callSupport(Linking, phoneNumber);
		return { onPress, canCall, description };
	};
	callSupport = (liking: LinkingStatic, phoneNumber: string) => {
		liking.openURL(`tel:${phoneNumber}`);
	};
	openEmailLink = () => {
		const BB: BlueBase = this.context;
		const email = BB.Configs.getValue('usermanagement.email');

		Linking.openURL(`mailto:${email}`);
	};
	render() {
		const { onPress, canCall, description } = this.getCallSupportValues();
		const BB: BlueBase = this.context;
		const email = BB.Configs.getValue('usermanagement.email');
		const styles = this.props.styles as any;
		const Component = !isMobile() ? Card : View;

		return (
			<React.Fragment>
				{this.values.map(item => {
					return (
						<View testID="test-listItem" key={item.value}>
							<Component>
								<View style={styles.pageContainer}>
									{isMobile() ? null : (
										<>
											<View style={styles.rowStyles}>
												<H5 style={styles.headerStyles}>Contact Us / Support</H5>
											</View>
										</>
									)}
									<List>
										<ListItem
											left={<List.Icon name={'phone'} />}
											onPress={onPress}
											title={'Call Support Center'}
											description={description}
											disabled={!canCall}
										/>

										<ListItem
											left={<List.Icon name={'email'} />}
											onPress={this.openEmailLink}
											title={'Email'}
											description={email}
											disabled={!canCall}
										/>
									</List>
								</View>
							</Component>
						</View>
					);
				})}
			</React.Fragment>
		);
	}
}
