import { Dialog, Divider, List, Text, View } from '@bluebase/components';
import React, { useState } from 'react';
import { getComponent, useIntl } from '@bluebase/core';

const PrivacyPolicy = getComponent('PrivacyPolicy', 'EmptyState');

export const PrivacySetting = () => {
	const { __ } = useIntl();

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	return (
		<React.Fragment>
			<List.Item left={<List.Icon name="shield-check" />} title={__('Privacy')} onPress={toggle} />
			<Dialog visible={visible} onDismiss={toggle}>
				<View testID="test-listItem" style={{ padding: 8 }}>
					<Text style={{ paddingBottom: 4, fontWeight: 'bold' }}>{__('Privacy')}</Text>
					<Divider />
					<PrivacyPolicy />
				</View>
			</Dialog>
		</React.Fragment>
	);
};
