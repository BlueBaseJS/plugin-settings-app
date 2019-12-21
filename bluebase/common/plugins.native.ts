import JsonSchemaComponents from '@bluebase/plugin-json-schema-components';
import Launcher from '@bluebase/plugin-launcher';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../src';
import ReactNativePaperPlugin from '@bluebase/plugin-react-native-paper';
import ReactNavigationPlugin from '@bluebase/plugin-react-navigation';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';

export const plugins = [
	Launcher,
	MaterialCommunityIcons,
	ReactNativePaperPlugin,
	ReactNavigationPlugin,
	ResponsiveGrid,
	JsonSchemaComponents,
	Plugin,
];
