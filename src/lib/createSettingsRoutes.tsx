import { RouteConfig } from '@bluebase/components';
import { SettingsPageProps } from '../layouts/SettingsPage';
import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileRoutes } from './createMobileNavigator';
import { isMobile } from '@bluebase/core';

export interface CreateSettingsRoutesOptions {
	mainRoute: RouteConfig,
	pages?: SettingsPageProps[],
	filter?: string
}

export const createSettingsRoutes = (
	{ mainRoute, pages = [], filter = 'bluebase.plugin.setting-app' }: CreateSettingsRoutesOptions
) => {

	return isMobile()
	? createMobileRoutes({ mainRoute, pages, filter })
	: [{ ...mainRoute, navigator: createDesktopNavigator({ mainRoute, pages, filter }) }];
};