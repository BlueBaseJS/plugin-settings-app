import { RouteConfig } from '@bluebase/components';
import { SettingsPageItemProps } from '../SettingsPageItem';

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageProps extends RouteConfig {
	items: SettingsPageItemProps[];
}

export * from './SettingsPageDesktop';
export * from './SettingsPageMobile';
