import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const ThemeSelectionSetting = getComponent('ThemeSelectionSetting');
jest.mock('expo', () => { });
describe('ThemeSelectionSetting', () => {
    it('should return ThemeSelectionSetting', async () => {
        // mount componentz
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <ThemeSelectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');

        const wrappers: any = wrapper
            .find('ThemeSelectionSetting')
            .last()
            .instance();
        wrappers.onPress({ changeTheme: () => 'ss' }, [{}])();
        expect(wrapper.find('Dialog').first().prop('visible')).toBe(false);

    });

});


