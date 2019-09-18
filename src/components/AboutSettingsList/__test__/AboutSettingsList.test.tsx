import { BlueBaseApp, getComponent } from '@bluebase/core';

import { AboutSettingsList } from '../AboutSettingsList';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const AboutSettingsLists = getComponent('AboutSettingsList');
jest.mock('expo', () => { });

jest.mock('I18nManager', () => ({
    ...jest.requireActual('I18nManager'),
    isRTL: false
}));

describe('AboutSettingsList', () => {
    it('should return author url undefined', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <AboutSettingsList />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        expect(wrapper.find('View')).toBeDefined();


    });
    it(' should not return author url', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp
                configs={{ author: 'author' }}

                plugins={[Plugin, MUI]}>
                <AboutSettingsList />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'ListItem');
        expect(wrapper.find('ListItem').first().prop('title')).toBe('Developed by');
    });

    it(' should not return author url', async () => {
        // mount component
        const wrapper = mount(
            <BlueBaseApp
                configs={{ author: 'author', version: 'version' }}

                plugins={[Plugin, MUI]}>
                <AboutSettingsList />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'ListItem');
        expect(wrapper.find('View')).toBeDefined();
    });



    it(' should not return External Link', async () => {
        // mount component
        const wrapper = mount(
            <BlueBaseApp
                configs={{ author: 'author', authorUrl: 'authroUrl' }}

                plugins={[Plugin, MUI]}>
                <AboutSettingsLists />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        expect(wrapper.find('ListItem').first().prop('title')).toBe('Developed by');
    });
});
