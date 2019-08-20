import { BlueBaseApp } from '@bluebase/core';
import { DarkModeSwitch } from '..';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
// import ReactRouterPlugin from '@bluebase/plugin-react-router';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('AboutSettingsList', () => {
    it('AboutSettingsList', async () => {
        // mount component

        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <DarkModeSwitch />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'DarkModeSwitch');
        // expect(wrapper).toMatchSnapshot();
        const onValueChange: any = wrapper.find('Switch').first().prop('onValueChange');
        onValueChange();



    });
});
