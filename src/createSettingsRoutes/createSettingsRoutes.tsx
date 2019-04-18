import { RouteConfig } from '@bluebase/components';
import { SettingsPageProps } from '../components/SettingsPage';
import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileRoutes } from './createMobileNavigator';
import { isMobile } from '../isMobile';

export const createSettingsRoutes = (pages: SettingsPageProps[], mainRoute: RouteConfig) => {

	return isMobile()
	? createMobileRoutes(pages, mainRoute)
	: [{ ...mainRoute, navigator: createDesktopNavigator(pages) }];
};