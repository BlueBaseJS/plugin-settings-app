import { BlueBaseApp } from '@bluebase/core';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../src'
import React from 'react';
import { createDesktopNavigator } from '../createSettingsRoutes/createDesktopNavigator';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('SettingsPageList', () => {
    const Desktop: any = createDesktopNavigator;
    const props: any = { items: [{ title: 'settings' }] };
    // it('should return SettingsPageList', async () => {
    //     // mount componentz
    //     require('../index');
    //     const wrapper = mount(
    //         <BlueBaseApp plugins={[Plugin, MUI]}>
    //             <Desktop  {...props} />
    //         </BlueBaseApp>
    //     );
    //     await waitForElement(wrapper, 'List');
    //     const onPress: any = wrapper.find('Button').first().prop('onPress');
    //     onPress();
    //     expect(wrapper.find('List').first().prop('children')).toBeDefined();

    // });
});


