import { NavigatorProps } from '@bluebase/components';
import { SettingsPageProps } from '../components/SettingsPage';

export const createDesktopNavigator = (_pages: SettingsPageProps[]) => {

	const navigator: NavigatorProps = {
		drawerType: 'slide',
		drawerWidth: 175,
		open: true,
		// routes: pages.map(page => ({
		// 	...page,
		// 	screen: 'SettingsPage'
		// })),

		routes: [{
			name: 'Appearance',
			screen: 'SettingsPage',
			path: 'appearance',
		}],
		type: 'drawer',
	};

	return navigator;
};
