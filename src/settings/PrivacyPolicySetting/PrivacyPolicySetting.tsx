import { Dialog, Divider, List, View } from '@bluebase/components';
import { getComponent, useIntl, useTheme } from '@bluebase/core';
import React, { useState } from 'react';

const PrivacyPolicy = getComponent('PrivacyPolicy', 'EmptyState');

export const PrivacyPolicySetting = () => {
	const { __ } = useIntl();
	const { theme } = useTheme();

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="shield-check" />}
				title={__('Privacy Policy')}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<View testID="test-listItem">
					<List.Subheader>{__('Privacy Policy')}</List.Subheader>
					<Divider />
					<View style={{ padding: theme.spacing.unit * 2 }}>
						<PrivacyPolicy />
					</View>
				</View>
			</Dialog>
		</React.Fragment>
	);
};
