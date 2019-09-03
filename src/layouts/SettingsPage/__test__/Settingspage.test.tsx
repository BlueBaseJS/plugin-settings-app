import { BlueBaseApp, getComponent } from '@bluebase/core';

// import { HeaderTitle } from '@bluebase/components';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src'
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const SettingsPageDesktop = getComponent('SettingsPageDesktop');
const SettingsPageMobile = getComponent('SettingsPageMobile');


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


    const items = {

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
                <SettingsPageDesktop navigationOptions={{ title: 'title', headerTitle: 'settings' }} filter="settings"  {...item} isMobile={false} />
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
                <SettingsPageDesktop filter="settings"  {...items} isMobile={false} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'FormattedMessage');


        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });




    it('should return SettingsMobileDesktop', async () => {
        // mount componentz
        require('../../../createSettingsRoutes/createDesktopNavigator');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageMobile />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'SafeAreaView');
        const placeGridInstance: any = wrapper
            .find('SettingsPageMobile')
            .last()
            .instance();
        placeGridInstance.renderLayout([{ title: 'string' }]);


        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });

    it('should return SettingsMobileDesktop', async () => {
        // mount componentz
        require('../../../createSettingsRoutes/createDesktopNavigator');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageMobile filter={'filter'} items={[]} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'SafeAreaView');
        const placeGridInstance: any = wrapper
            .find('SettingsPageMobile')
            .last()
            .instance();
        placeGridInstance.renderLayout([{ title: 'string' }]);


        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });

    it('should return SettingsPageDesktop', async () => {
        // mount componentz
        require('../../../createSettingsRoutes/createDesktopNavigator');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageMobile filter={'filter'} items={[]} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'SafeAreaView');
        const placeGridInstance: any = wrapper
            .find('SettingsPageMobile')
            .last()
            .instance();
        placeGridInstance.renderLayout([{ title: 'string' }]);
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });
});


