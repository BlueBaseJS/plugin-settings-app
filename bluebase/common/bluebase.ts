import { VERSION } from '../../src/version';
import { plugins } from './plugins';

export default {
	plugins,

	configs: {
		'plugin.settings-app.support.call.number': '+92-42-111-258-378',

		/** 8:00 am in Pakistan is 3:00 am in UTC */
		'plugin.settings-app.support.call.opens': 3,

		/** 5:00 pm in Pakistan is noon in UTC */
		'plugin.settings-app.support.call.closes': 12,

		'plugin.settings-app.support.email': 'humans@blueeast.com',

		developer: 'BlueEast',
		developerUrl: 'https://www.blueeast.com',
		version: VERSION,
	},
};
