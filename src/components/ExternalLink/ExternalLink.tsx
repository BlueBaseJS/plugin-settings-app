import { Linking, Platform } from 'react-native';

import React from 'react';
import { Text } from '@bluebase/components';

export interface ExternalLinkProps {
	Component: React.ComponentType<any>;
	props: any;
	href: string;
}

/**
 * Applies external link to a component
 * @param param
 */
export const ExternalLink = ({ Component, props, href }: ExternalLinkProps) => {

	// We want to have hover styles on the web
	props.onPress = () => { return; };

	// Link author on the web
	if (Platform.OS === 'web') {
		return (
			<Text href={href} accessibilityRole="link" target="_blank">
				<Component {...props} />
			</Text>
		);
	}

	props.onPress = () => Linking.openURL(href);

	// Linking on native
	return <Component {...props} />;
};