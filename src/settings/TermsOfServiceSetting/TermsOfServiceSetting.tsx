import { Dialog, Divider, List, View } from '@bluebase/components';
import { getComponent, useIntl, useTheme } from '@bluebase/core';
import React, { useState } from 'react';

const TermsOfService = getComponent('TermsOfService', 'EmptyState');

export const TermsOfServiceSetting = () => {
	const { __ } = useIntl();
	const { theme } = useTheme();

	const [visible, setVisible] = useState(false);

	const toggle = () => setVisible(!visible);

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="file-document" />}
				title={__('Terms of Service')}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<View testID="test-listItem">
					<List.Subheader>{__('Terms of Service')}</List.Subheader>
					<Divider />
					<View style={{ padding: theme.spacing.unit * 2 }}>
						<TermsOfService />
					</View>
				</View>
			</Dialog>
		</React.Fragment>
	);
};
