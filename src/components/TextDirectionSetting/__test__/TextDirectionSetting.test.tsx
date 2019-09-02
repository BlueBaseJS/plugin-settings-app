import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const TextDirectionSetting = getComponent('TextDirectionSetting');
jest.mock('expo', () => { });
describe('TextDirectionSetting', () => {
    it('should return TextDirectionSetting with rtl false', async () => {
        // mount components
        const wrapper: any = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <TextDirectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        wrapper.context = { rtl: false, changeDirection: () => '' };
        const wrappers: any = wrapper
            .find('TextDirectionSetting')
            .last()
            .instance();
        wrappers.onPress('settings')();
        expect(wrapper.find('Dialog').first().prop('visible')).toBe(false);


    });
    it('should return TextDirectionSetting with rtl true', async () => {
        // mount components
        const wrapper: any = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <TextDirectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        wrapper.context = {
            rtl: true, changeDirection: () => ''
        };
        const wrappers: any = wrapper
            .find('TextDirectionSetting')
            .last()
            .instance();
        wrappers.onPress('settings')();
        expect(wrapper.find('Dialog').first().prop('visible')).toBe(false);


    });
    it('should return TextDirectionSetting with rtl true', async () => {
        // mount components
        const wrapper: any = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <TextDirectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        wrapper.context = {
            rtl: true, changeDirection: () => ''
        };
        const wrappers: any = wrapper
            .find('TextDirectionSetting')
            .last()
            .instance();
        wrappers.onPress('settings')();
        expect(wrapper.find('Dialog').first().prop('visible')).toBe(false);


    });

});


