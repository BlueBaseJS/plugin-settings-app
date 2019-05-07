import Launcher from '@bluebase/plugin-launcher';
import { MaterialIcons } from '@bluebase/plugin-vector-icons';
import Plugin from '../../src';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';

export default {
	plugins: [MaterialIcons, Launcher, ResponsiveGrid, Plugin],

	configs: {
		author: 'BlueEast',
		authorUrl: 'https://www.blueeast.com',
		version: '2.3.1',
	}
};
