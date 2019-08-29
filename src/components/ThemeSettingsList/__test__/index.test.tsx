import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const ThemeSettingsList = getComponent('ThemeSettingsList');
jest.mock('expo', () => { });
describe('ThemeSettingsList', () => {
    it('should return ThemeSettingsList', async () => {
        // mount componentz
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <ThemeSettingsList />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'List');
        expect(wrapper.find('List').first().prop('children')).toBeDefined();
        expect(wrapper.find('List').first().prop('children')).toHaveLength(1);

    });

});


