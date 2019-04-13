import React from 'react';
import { RouteConfig } from '@bluebase/components';
import { SettingsPageItemProps } from '../SettingsPageItem';
import { getComponent } from '@bluebase/core';
import { isMobile as isMobileFn } from '../../isMobile';

const SettingsPageMobile = getComponent('SettingsPageMobile');
const SettingsPageDesktop = getComponent('SettingsPageDesktop');

/**
 * A UI item displayed on a settings details page
 */
export interface SettingsPageProps extends RouteConfig {
	items: SettingsPageItemProps[]
}

export const SettingsPage =
({ isMobile, ...rest }: SettingsPageProps & { isMobile?: boolean }) =>
isMobile === true
? <SettingsPageMobile {...rest} />
: <SettingsPageDesktop {...rest} />;

SettingsPage.defaultProps = {
	isMobile: isMobileFn(),
};