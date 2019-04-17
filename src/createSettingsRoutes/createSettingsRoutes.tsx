import { RouteConfig } from '@bluebase/components';
import { SettingsPageProps } from '../components/SettingsPage';
import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileNavigator } from './createMobileNavigator';
import { isMobile } from '../isMobile';

export const createSettingsRoutes = (
	pages: SettingsPageProps[],

	route: RouteConfig
) => {

	if (isMobile()) {
		return [{
			name: 'Settings',
			path: '/',

			navigator: createMobileNavigator(pages, route),

			navigationOptions: {
				header: null,
			}
		}];
	}

	return [{
		...route,
		navigator: createDesktopNavigator(pages, route),
	}];
};