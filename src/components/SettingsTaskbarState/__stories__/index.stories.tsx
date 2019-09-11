import BBMemoryPlugin from '@bluebase/plugin-react-router/memory-router';
import { BlueBaseApp } from '@bluebase/core';
import { List } from "@bluebase/components"
import MUIPlugin from '@bluebase/plugin-material-ui';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../../index';
import React from 'react';
import storiesOf from '@bluebase/storybook-addon';

const stories = storiesOf('DesktopTaskbar', module);
stories.add('should show DesktopTaskbar', () => (
	<BlueBaseApp

		filters={{
			'mevris.plugin.taskbar.list.first': (schema: any, ctx: any) => {
				return {
					...schema,
					children: [
						...schema.children,
						{
							component: 'SettingsPage',
							props: {
								options: [
									{
										left: <List.Icon name="lightbulb-outline" />,
										onPress: () => ctx.navigation.navigate('ThingsApp'),
									},
									{
										left: <List.Icon name="lightbulb-outline" />,
										onPress: () => ctx.navigation.navigate('PlacesApp'),
									}]

							},
						},
					],
				};
			}

		}}
		plugins={[MaterialCommunityIcons, Plugin, MUIPlugin, BBMemoryPlugin]}
	>
		{}
	</BlueBaseApp>
));