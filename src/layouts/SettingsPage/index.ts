import { RouteConfig } from '@bluebase/components';
import { SettingsPageItemProps } from '../SettingsPageItem';
import { WebBrowserOpenOptions } from 'expo-web-browser';

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageProps extends RouteConfig {
	items: SettingsPageItemProps[];
	onPress?: () => void;
	right?: React.ReactNode;

	url?: string;
	browserParams?: WebBrowserOpenOptions;
}

export * from './SettingsPageDesktop';
export * from './SettingsPageMobile';
