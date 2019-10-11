import { BlueBase, BlueBaseContext, IntlConsumer, IntlContextData, Theme } from '@bluebase/core';
import { Divider, Icon, List, View } from '@bluebase/components';
import { I18nManager, TextStyle } from 'react-native';

import { ExternalLink } from '../ExternalLink';
import React from 'react';

export interface AboutSettingsListStyles {
	iconRight: TextStyle;
}

export interface AboutSettingsListProps {
	styles?: Partial<AboutSettingsListStyles>;
}

export class AboutList extends React.PureComponent<AboutSettingsListProps> {
	static contextType = BlueBaseContext;

	static defaultStyles = (theme: Theme) => ({
		iconRight: {
			color: theme.palette.text.disabled,
			transform: [{ scaleX: I18nManager.isRTL ? -1 : 1 }],
		},
	});

	renderVersion = ({ __ }: IntlContextData) => {
		const BB: BlueBase = this.context;
		const version = BB.Configs.getValue('version');

		return version && <List.Item title={__('Version')} description={__(version)} />;
	};

	renderAuthor = ({ __ }: IntlContextData) => {
		const BB: BlueBase = this.context;
		const { styles = {} } = this.props;

		const author = BB.Configs.getValue('author');
		const authorUrl = BB.Configs.getValue('authorUrl');

		// If there is not author, return null
		if (!author) {
			return null;
		}

		const props: any = {
			description: __(author),
			title: __('Developed by'),
		};

		// If there is not authorUrl, only render name
		if (!authorUrl) {
			return <List.Item {...props} />;
		}

		props.right = <Icon name="open-in-new" style={styles.iconRight} />;

		return <ExternalLink Component={List.Item} props={props} href={authorUrl} />;
	};

	render() {
		return (
			<IntlConsumer>
				{intl => {
					const items = [this.renderVersion(intl), this.renderAuthor(intl)]
						// Remove undefined items
						.filter(x => !!x);

					return (
						<View>
							{items.map((item, index) => (
								<React.Fragment key={index}>
									{item}
									{index < items.length - 1 ? <Divider /> : null}
								</React.Fragment>
							))}
						</View>
					);
				}}
			</IntlConsumer>
		);
	}
}
