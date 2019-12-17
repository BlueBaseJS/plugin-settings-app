import Launcher from '@bluebase/plugin-launcher';
import { MaterialCommunityIcons } from '@bluebase/plugin-vector-icons';
import MaterialUIPLugin from '@bluebase/plugin-material-ui';
import Plugin from '../../src';
import ReactRouterPlugin from '@bluebase/plugin-react-router';
import ResponsiveGrid from '@bluebase/plugin-responsive-grid';

export default {
	plugins: [MaterialCommunityIcons, Launcher, ResponsiveGrid, Plugin, MaterialCommunityIcons],

	configs: {
		// 'mevris.user.accessToken': 'dummy-token-123',

		'usermanagement.call-center.opens': 8,
		'usermanagement.call-center.closes': 21,
		'usermanagement.email': 'humans@blueeast.com',
		'usermanagement.call-center.number': '042-111-258-378',

		'plugin.user.management.facebook.appId': '549524105530640',
		// tslint:disable-next-line:max-line-length
		'plugin.user.management.google.iosClientId':
			'585191277176-cc9jce9pr6q9to1i6dutvsbmks1rv634.apps.googleusercontent.com',
		'plugin.user.management.google.androidClientId':
			'10745795480-1mhkqkhmiulgparh9unprefet5m3vl64.apps.googleusercontent.com',
		'plugin.user.management.google.webClientId':
			'10745795480-g8l7ft9mhdp7fihp3iv16ut68gd2s55k.apps.googleusercontent.com',
		author: 'BlueEast',
		authorUrl: 'https://www.blueeast.com',
		version: '2.3.1',

		'plugin.apollo.httpLinkOptions': {
			uri: 'http://api-qa.mevris.io:9090/graphql',
		},

		'mevris.plugin.user-management.blacklist': ['HomeScreen'],
	},
};
