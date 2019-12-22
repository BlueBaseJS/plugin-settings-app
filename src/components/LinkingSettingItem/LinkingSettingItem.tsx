import { List, ListItemProps } from '@bluebase/components';
import React, { useEffect, useState } from 'react';

import { Linking } from 'react-native';

export interface LinkingSettingItemProps extends ListItemProps {
	url: string;
}

export const LinkingSettingItem = ({ url, ...rest }: LinkingSettingItemProps) => {
	const [canOpen, setCanOpen] = useState(false);

	useEffect(() => {
		let cancelled = false;
		(async () => {
			const result = await Linking.canOpenURL(url);

			if (!cancelled) {
				setCanOpen(result);
			}
		})();

		return () => {
			cancelled = true;
		};
	});

	const onPress = canOpen ? () => Linking.openURL(url) : undefined;

	return <List.Item onPress={onPress} disabled={!canOpen || !!rest.disabled} {...rest} />;
};
