import { BlueBase, BlueBaseContext, Theme, isMobile } from '@bluebase/core';
import { Body1, Body2, Card, Container, H5, List, ListItem, View } from '@bluebase/components';
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

/**
 * This component shows the support list
 * for user to contact user can call only
 * in opening hours and some other lists.
 */

export class Support extends React.PureComponent<SupportListProps> {
	static contextType = BlueBaseContext;

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

	// Call Support
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

	openEmailLink = () => {
		const BB: BlueBase = this.context;
		const email = BB.Configs.getValue('usermanagement.email');

		Linking.openURL(`mailto:${email}`);
	};

	callSupport = (liking: LinkingStatic, phoneNumber: string) => {
		liking.openURL(`tel:${phoneNumber}`);
	};

	render() {
		const { onPress, canCall, description } = this.getCallSupportValues();
		const BB: BlueBase = this.context;
		const email = BB.Configs.getValue('usermanagement.email');

		const styles = this.props.styles as any;
		const Component = !isMobile() ? Card : View;

		return (
			<Container>
				<Component style={styles.component}>
					<View style={styles.pageContainer}>
						{isMobile() ? null : (
							<>
								<View style={styles.rowStyles}>
									<H5 style={styles.headerStyles}>Contact Us / Support</H5>
								</View>
							</>
						)}

						<View style={styles.textContainer}>
							<Body1 style={styles.p1}>
								We are here to provide you with more information, answer any questions you may have
								and create an effective solution for your instructional needs.
							</Body1>
						</View>
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
								title={'sdfsdfs'}
								description={email}
								disabled={!canCall}
							/>
						</List>
					</View>
				</Component>
			</Container>
		);
	}
}
