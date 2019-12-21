import { BlueBaseApp } from '@bluebase/core';
import { DarkModeSetting } from '..';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('AboutSettingsList', () => {
    it('AboutSettingsList', async () => {
        // mount component
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <DarkModeSetting />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'DarkModeSetting');
        // expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('ListItem').first().prop('title')).toBe('Dark Mode')


    });
});
