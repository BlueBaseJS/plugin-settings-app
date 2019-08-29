import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src'
import React from 'react';
import { SettingsPageItemDesktop } from '../SettingsPageItemDesktop';
import { SettingsPageItemMobile } from '../SettingsPageItemMobile';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'ios';
    return Platform;
});
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
        // mount components
        require('../../index.ts');
        require('../../index.web.ts');
        require('../../../lang/ur.ts');
        require('../../../lang/ur-roman.ts');
        require('../../../lang/index.web.ts');
        require('../../../lang/index.ts');
        require('../index.ts');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageItemDesktop description="settings" title='settings' component='View' {...item} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });


    jest.mock('Platform', () => {
        const Platform = require.requireActual('Platform');
        Platform.OS = 'android';
        return Platform;
    });
    it('should return SettingsPageDesktop', async () => {
        // mount components

        require('../../index.ts');
        require('../../index.web.ts');
        require('../../../lang/ur.ts');
        require('../../../lang/ur-roman.ts');
        require('../../../lang/index.web.ts');
        require('../../../lang/index.ts');
        require('../index.ts');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageItemDesktop  {...item} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });


    it('should return SettingsMobileDesktop', async () => {
        // mount componentz
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageItemMobile component="View" {...item} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });
    it('should return SettingsMobileDesktop', async () => {
        // mount componentz
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageItemMobile  {...item} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });
});


