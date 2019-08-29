import { BlueBaseApp, getComponent } from '@bluebase/core';

import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

const ThemeSelectionSetting = getComponent('ThemeSelectionSetting');
jest.mock('expo', () => { });
describe('TextDirectionSetting', () => {
    it('should return TextDirectionSetting', async () => {
        // mount componentz
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <ThemeSelectionSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'Dialog');
        const onPress: any = wrapper.find('List.Item').last().prop('onPress');
        onPress();
        expect(wrapper.find('List.Item').first().prop('description')).toBe('Text Direction will automatically changed based on selected language.');

    });

});


