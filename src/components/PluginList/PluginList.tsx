import { BlueBase, BlueBaseContext } from '@bluebase/core';
import { Divider, DynamicIcon, ListItem, PluginIcon, Switch, View } from '@bluebase/components';
import React from 'react';

export class PluginList extends React.PureComponent {

	static contextType = BlueBaseContext;

	render() {

		const BB: BlueBase = this.context;

		const plugins = BB.Plugins.filter(p => !!p);

		return (
			<View>
				{Object.values(plugins).map((plugin, index) => (
					<React.Fragment>
						<ListItem
							left={
								!!plugin.icon
								? <PluginIcon id={plugin.key} size={24} />
								: <DynamicIcon type="icon" name="build" size={24} />
							}
							title={plugin.name}
							description={plugin.key}
							right={
								<Switch
									checked={BB.Plugins.isEnabled(plugin.key)}
									onValueChange={
// tslint:disable-next-line: jsx-no-lambda
										(value) => !!value
										? BB.Plugins.enable(plugin.key)
										: BB.Plugins.disable(plugin.key)
									}
								/>
							}
						/>
						{(index < Object.keys(plugins).length - 1) && <Divider inset />}
					</React.Fragment>
				))}
			</View>
		);
	}
}