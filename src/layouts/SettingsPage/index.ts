import { RouteConfig } from '@bluebase/components';
import { WebBrowserOpenOptions } from 'expo-web-browser';
import { ReactNode } from 'react';

import { SettingsPageItemProps } from '../SettingsPageItem';

/**
 * A UI item displayed on a settings details page
 */
export type SettingsPageProps = RouteConfig & {
	filter?: string;
	group?: string;
	items: SettingsPageItemProps[];

	onPress?: () => void;
	right?: ReactNode;

	url?: string;
	browserParams?: WebBrowserOpenOptions;
};

export * from './SettingsPageDesktop';
export * from './SettingsPageMobile';
