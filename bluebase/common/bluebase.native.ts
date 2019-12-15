import Launcher from '@bluebase/plugin-launcher';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../src';
import ReactNativePaperPlugin from '@bluebase/plugin-react-native-paper';
import ReactNavigationPlugin from '@bluebase/plugin-react-navigation';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';

export default {
	plugins: [
		MaterialCommunityIcons,
		Launcher,
		ResponsiveGrid,
		ReactNativePaperPlugin,
		ReactNavigationPlugin,
		Plugin,
	],

	configs: {
		author: 'BlueEast',
		authorUrl: 'https://www.blueeast.com',
		version: '2.3.1',
	},
};
