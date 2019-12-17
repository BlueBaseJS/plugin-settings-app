import { BootOptions, merge } from '@bluebase/core';

import commonBootOptions from '../common/bluebase';

/**
 * Add your platform specific configs here.
 * We keep all the universal (cross platform) configs in
 * the common folder, and extend them here.
 */
const bootOptions: Partial<BootOptions> = {
	// config: {
	// 	wallpaper: {
	// 		backgroundColor: 'white',
	// 		resizeMode: 'cover',
	// 		source: require('./../../assets/web/wallpaper.png'),
	// 	},
	// }
};

export default merge(commonBootOptions, bootOptions);
