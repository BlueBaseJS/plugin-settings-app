import { RouteConfig } from '@bluebase/components';
import { SettingsPageProps } from '../components/SettingsPage';
import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileRoutes } from './createMobileNavigator';
import { isMobile } from '../isMobile';

export const createSettingsRoutes = (mainRoute: RouteConfig, pages: SettingsPageProps[]) => {

	return isMobile()
	? createMobileRoutes(mainRoute, pages)
	: [{ ...mainRoute, navigator: createDesktopNavigator(pages) }];
};