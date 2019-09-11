import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../../src'
import React from 'react';
import { SettingsPageList } from '../SettingsPageList';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('SettingsPageList', () => {

    it('should return SettingsPageList', async () => {
        // mount componentz
        require('../index');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <SettingsPageList name="" pages={[{ name: 'launcher', title: 'Launcher', path: '/' } as any]} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'List');
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });
});



it('should return SettingsPageList with Icon name', async () => {
    // mount componentz
    require('../index');
    const wrapper = mount(
        <BlueBaseApp plugins={[Plugin, MUI]}>
            <SettingsPageList name="settings" pages={[{ navigationOptions: { drawerIcon: { name: 'domain', type: 'string' } }, name: 'launcher', title: 'Launcher', path: '/' } as any]} />
        </BlueBaseApp>
    );
    await waitForElement(wrapper, 'List');
    expect(wrapper.find('List').first().prop('children')).toBeDefined();

});


it('should return SettingsPageList with Icon  as function', async () => {
    // mount componentz
    require('../index');
    const wrapper = mount(
        <BlueBaseApp plugins={[Plugin, MUI]}>
            <SettingsPageList name="settings"
                pages={[{
                    navigationOptions: { drawerIcon: () => 'domain' },
                    name: 'launcher', title: 'Launcher', path: '/'
                } as any]} />
        </BlueBaseApp>
    );
    await waitForElement(wrapper, 'List');
    expect(wrapper.find('List').first().prop('children')).toBeDefined();

});


