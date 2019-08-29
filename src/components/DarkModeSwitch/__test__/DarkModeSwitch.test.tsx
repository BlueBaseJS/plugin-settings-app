import { BlueBaseApp } from '@bluebase/core';
import { DarkModeSwitch } from '..';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('DarkModeSwitch', () => {
    it('DarkModeSwitch', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <DarkModeSwitch />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'DarkModeSwitch');
        const onValueChange: any = wrapper.find('Switch').first().prop('onValueChange');
        onValueChange((name: any) => name);



    });

    it('DarkModeSwitch', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp configs={{ 'theme.name': { theme: 'dark' } }} plugins={[Plugin, MUI,]}>
                <DarkModeSwitch />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'DarkModeSwitch');
        // expect(wrapper).toMatchSnapshot();
        const onValueChange: any = wrapper.find('Switch').first().prop('onValueChange');
        onValueChange((name: any) => name);
    });
});
