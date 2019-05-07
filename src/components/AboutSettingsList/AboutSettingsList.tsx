import { BlueBase, BlueBaseContext, Theme } from '@bluebase/core';
import { Divider, Icon, List, View } from '@bluebase/components';
import { ExternalLink } from '../ExternalLink';
import React from 'react';

export class AboutSettingsList extends React.PureComponent {

	static contextType = BlueBaseContext;

	static defaultStyles = (theme: Theme) => ({
		iconRight: {
			color: theme.palette.text.disabled
		}
	})

	renderVersion = () => {
		const BB: BlueBase = this.context;
		const version = BB.Configs.getValue('version');

		return version && <List.Item title="Version" description={version} />;
	}

	renderAuthor = () => {
		const BB: BlueBase = this.context;
		const { styles = {} } = this.props;

		const author = BB.Configs.getValue('author');
		const authorUrl = BB.Configs.getValue('authorUrl');

		// If there is not author, return null
		if (!author) {
			return null;
		}

		const props: any = {
			description: author,
			title: 'Developed by',
		};

		// If there is not authorUrl, only render name
		if (!authorUrl) {
			return <List.Item {...props} />;
		}

		props.right = <Icon name="open-in-new" style={styles.iconRight} />;


		return (
			<ExternalLink Component={List.Item} props={props} href={authorUrl} />
		);
	}

	render() {

		const items = [
			this.renderVersion(),
			this.renderAuthor(),
		]
		// Remove undefined items
		.filter(x => !!x);

		return (
			<View>
				{items.map((item, index) => (
					<React.Fragment>
						{item}
						{(index < items.length - 1) ? <Divider /> : null}
					</React.Fragment>
				))}
			</View>
		);
	}
}