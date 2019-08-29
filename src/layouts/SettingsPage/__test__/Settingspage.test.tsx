import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src'
import React from 'react';
import { SettingsPageDesktop } from '../SettingsPageDesktop';
import { SettingsPageMobile } from '../SettingsPageMobile';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('SettingsPageDesktop', () => {
    const item = {

        name: 'AppearanceSettingsPage',
        path: 'appearance',

        items: [{
            component: 'ThemeSettingsList',
            description: 'All your theme related settings reside here.',
            name: 'theme-settings-1',
            title: 'Theme',
        }, {
            component: 'LocalizationSettingsList',
            description: 'Select you language settings here',
            name: 'theme-settings-2',
            title: 'Localization',
        }],

        navigationOptions: {
            title: 'Appearance'
        }
    };

    it('should return SettingsPageDesktop', async () => {
        // mount componentz
        require('../../../components/index.web.ts');
        require('../index.ts');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageDesktop {...item} isMobile={false} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'FormattedMessage');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });

    it('should return SettingsPageDesktop', async () => {
        // mount componentz
        require('../../../components/index.web.ts');
        require('../index.ts');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageDesktop {...item} isMobile={false} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'FormattedMessage');
        // const placeGridInstance = wrapper
        // .find('SettingsPageDesktop')
        // .last()
        // .instance();

        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });


    it('should return SettingsMobileDesktop', async () => {
        // mount componentz
        require('../../../createSettingsRoutes/createDesktopNavigator');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageMobile {...item} isMobile={false} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'SettingsPageItemMobile');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });
});


