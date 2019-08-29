import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const TextDirectionSetting = getComponent('TextDirectionSetting');
jest.mock('expo', () => { });
describe('TextDirectionSetting', () => {
    it('should return TextDirectionSetting', async () => {
        // mount components
        const wrapper: any = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <TextDirectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        wrapper.context = { changeDirection: () => '' };
        const wrappers: any = wrapper
            .find('TextDirectionSetting')
            .last()
            .instance();
        wrappers.onPress('settings')();
        expect(wrapper.find('Divider').first().prop('inset')).toBe(true);


    });

});


