import { Dialog, Divider, List, Text, View } from '@bluebase/components';
import React, { useState } from 'react';
import { getComponent, useIntl } from '@bluebase/core';

const TermsOfService = getComponent('TermsOfService', 'Noop');

export const TermsOfServiceSetting = () => {
	const { __ } = useIntl();

	const [visible, setVisible] = useState(false);

	const toggle = () => setVisible(!visible);

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="file-document" />}
				title={__('Terms of Service')}
				onPress={toggle}
			/>
			<Dialog visible={visible} onDismiss={toggle}>
				<View testID="test-listItem" style={{ padding: 8 }}>
					<Text style={{ paddingBottom: 4, fontWeight: 'bold' }}>{__('Terms of Service')}</Text>
					<Divider />
					<TermsOfService />
				</View>
			</Dialog>
		</React.Fragment>
	);
};
