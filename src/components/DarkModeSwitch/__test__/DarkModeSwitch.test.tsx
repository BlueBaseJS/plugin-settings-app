import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const DarkModeSwitch = getComponent('DarkModeSwitch');
jest.mock('expo', () => { });
describe('DarkModeSwitch', () => {
    it('DarkModeSwitch', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <DarkModeSwitch />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Switch');
        const onValueChange: any = wrapper.find('Switch').first().prop('onValueChange');
        onValueChange((name: any) => name);
        expect(wrapper.find('Switch').first().prop('checked')).toBe(false);
    });


});
