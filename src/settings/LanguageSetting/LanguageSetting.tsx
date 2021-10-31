import { Dialog, Divider, List, View } from '@bluebase/components';
import { useConfig, useIntl } from '@bluebase/core';
import React, { useState } from 'react';

export const LanguageSetting = () => {
	const { __, locale, changeLocale } = useIntl();
	const [localeOptions] = useConfig('locale.options');

	const [visible, setVisible] = useState(false);
	const toggle = () => setVisible(!visible);

	const select = (value: string) => () => {
		changeLocale(value);
		toggle();
	};

	return (
		<React.Fragment>
			<List.Item
				left={<List.Icon name="translate" />}
				title={__('Language')}
				description={localeOptions[locale]}
				onPress={toggle}
			/>
			<Dialog dismissable visible={visible} onDismiss={toggle}>
				<List.Subheader>{__('Language')}</List.Subheader>

				{Object.keys(localeOptions).map(localeKey => (
					<View testID="test-listItem" key={localeKey}>
						<Divider />
						<List.Item
							title={localeOptions[localeKey]}
							onPress={select(localeKey)}
							key={localeKey}
							selected={locale === localeKey}
						/>
					</View>
				))}
			</Dialog>
		</React.Fragment>
	);
};
