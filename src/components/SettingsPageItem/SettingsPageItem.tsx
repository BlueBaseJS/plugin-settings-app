import React from 'react';
import { SettingsPageItemObject } from '../../typings';
import { getComponent } from '@bluebase/core';

const SettingsPageItemMobile = getComponent('SettingsPageItemMobile');
const SettingsPageItemDesktop = getComponent('SettingsPageItemDesktop');


export interface SettingsPageItemProps extends SettingsPageItemObject {
	isMobile?: boolean;
}

export const SettingsPageItem = ({ isMobile, ...rest }: SettingsPageItemProps) =>
isMobile === true
? <SettingsPageItemMobile {...rest} />
: <SettingsPageItemDesktop {...rest} />;

SettingsPageItem.defaultProps = {
	isMobile: true,
};