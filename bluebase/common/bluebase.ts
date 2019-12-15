import Launcher from '@bluebase/plugin-launcher';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import MaterialUIPLugin from '@bluebase/plugin-material-ui';
import Plugin from '../../src';
import ReactRouterPlugin from '@bluebase/plugin-react-router';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';

export default {
	plugins: [
		MaterialCommunityIcons,
		Launcher,
		ResponsiveGrid,
		MaterialUIPLugin,
		ReactRouterPlugin,
		Plugin,
	],

	configs: {
		author: 'BlueEast',
		authorUrl: 'https://www.blueeast.com',
		version: '2.3.1',
	},
};
