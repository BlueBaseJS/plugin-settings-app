import { RouteConfig } from '@bluebase/components';
import { SettingsPageProps } from '../layouts/SettingsPage';
import { createDesktopRoutes } from './createDesktopRoutes';
import { createMobileRoutes } from './createMobileRoutes';
import { isMobile } from '@bluebase/core';

export interface CreateSettingsRoutesOptions {
	mainRoute: RouteConfig;
	pages: SettingsPageProps[];
	filter?: string;
}

export const createSettingsRoutes = ({
	mainRoute,
	pages,
	filter = 'bluebase.plugin.setting-app',
}: CreateSettingsRoutesOptions) => {
	return isMobile()
		? createMobileRoutes({ mainRoute, pages, filter })
		: createDesktopRoutes({ mainRoute, pages, filter });
};
