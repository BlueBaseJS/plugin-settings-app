// import { BlueBaseApp } from '@bluebase/core';
// import MUI from '@bluebase/plugin-material-ui';
// import Plugin from '../../src'
// import React from 'react';
import { createDesktopNavigator } from './createDesktopNavigator';
import { createMobileRoutes } from './createMobileNavigator';
import { createDesktopNavigator as navigator } from '../createSettingsRoutes/createDesktopNavigator';

// import { mount } from 'enzyme';
// import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
export let Component: any;
describe('SettingsPageList', () => {
    const Desktop: any = createDesktopNavigator;
    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = Desktop({ pages: [{ title: 'setting' }] });
        data.routes[0].screen();

    });
    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = navigator({ pages: [{ title: 'setting' }] as any });
        data.routes[0].screen();

    });

    it('should return SettingsPageList', async () => {
        require('../index');

        const data: any = createMobileRoutes({ mainRoute: { name: 'screen' } as any, pages: [{ title: 'setting' }] as any });
        data[0].screen();
        data[1].screen();

    });


});


