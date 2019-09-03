
jest.mock('Platform', () => {
    const Platform = require.requireActual('Platform');
    Platform.OS = 'web';
    return Platform;
});

import { BlueBaseApp } from '@bluebase/core';
import { ExternalLink } from '../ExternalLink';
import MUI from '@bluebase/plugin-material-ui';
import Plugin from '../../../index';
import React from 'react';
import { mount } from 'enzyme';
import { waitForElement } from 'enzyme-async-helpers';

jest.mock('expo', () => { });
describe('Externallink', () => {
    it('should return External link url for web platform', async () => {
        jest.mock('Platform', () => {
            const Platform = require.requireActual('Platform');
            Platform.OS = 'android';
            return Platform;
        });
        // mount component

        const wrapper = mount(
            <BlueBaseApp plugins={[Plugin, MUI,]}>
                <ExternalLink Component={'View' as any} props={{ onPress: () => { } }} href={'url'} />
            </BlueBaseApp>
        );
        await waitForElement(wrapper, 'View');
        // expect(wrapper.find('Text').first.props().)();


        // const onPress: any = wrapper.find('ExternalLink').last().prop('props');

        // onPress();
        expect(wrapper.find('Text').first().prop('accessibilityRole')).toBe('link');
    });

});

