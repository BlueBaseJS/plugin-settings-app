import { BlueBaseApp } from '@bluebase/core';
import { HomeScreen } from '../src/HomeScreen';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../src'
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';
jest.mock('expo', () => { });
describe('HomeScreen', () => {
    it('should return HomeScreen', async () => {
        // mount componentz
        require('../src/lib/createDesktopNavigator');
        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI]}>
                <HomeScreen navigation={{ navigate: (name: any) => name }} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'StatusBar');
        const onPress: any = wrapper.find('Button').first().prop('onPress');
        onPress();
        expect(wrapper.find('List').first().prop('children')).toBeDefined();

    });

});


