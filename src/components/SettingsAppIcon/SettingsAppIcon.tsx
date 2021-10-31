import { DynamicIcon, View } from '@bluebase/components';
import { Theme } from '@bluebase/core';
import React from 'react';
import { TextStyle, ViewStyle } from 'react-native';

export interface SettingsAppIconStyles {
	iconColor: { color: TextStyle['color'] };
	root: ViewStyle;
}

export interface SettingsAppIconProps {
	size: number;
	styles?: Partial<SettingsAppIconStyles>;
}

export const SettingsAppIcon = ({ size, styles: _styles }: SettingsAppIconProps) => {
	const styles = _styles as SettingsAppIconStyles;

	return (
		<View style={[styles.root, { height: size, width: size }]}>
			<DynamicIcon type="icon" name="cog" color={styles.iconColor.color} size={size * 0.75} />
		</View>
	);
};

SettingsAppIcon.defaultStyles = (_theme: Theme) => ({
	iconColor: {
		color: '#FFF',
	},
	root: {
		alignItems: 'center',
		backgroundColor: '#6E90A1',
		borderRadius: 10,
		justifyContent: 'center',
	},
});
